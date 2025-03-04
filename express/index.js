import express from 'express';
import fs from 'fs'
import { ensureLoggedIn } from 'connect-ensure-login';
import statusMonitor from 'express-status-monitor';
import csv from 'csvtojson'
import { logRunningTaskAsy, } from './child_process/fork/probelom.js'
import { fork } from 'child_process';

const ensureLoggedInMiddleware = ensureLoggedIn();

const statusMonitorMiddleware = statusMonitor();
const app = express();
app.use(statusMonitorMiddleware);

app.get('/status', ensureLoggedInMiddleware, statusMonitorMiddleware.pageRoute);



app.get('/', (req, res) => {
    res.status(200).json({
        staus: "sucess"
    })
})

app.get('/file', (req, res) => {
    const readStream = fs.createReadStream('data/import.csv');

    readStream(
        pipe(
            csv({})
        ).on('data', data => {
            console.log('>> data ::', data);

        })
    )

})

app.get('/longtask', async (req, res) => {
    const sume = await logRunningTaskAsy()
    res.status(200).json({
        msg: "sucess",
        data: sume
    })
})


app.get('/longtask-solved', async (req, res) => {
    const child = fork('./child_process/fork/solution.js');
    child.send('start');
    child.on('message',(sum)=>{
        res.status(200).json({
            msg: "sucess",
            data: sum
        })
    })
})
app.listen(3000, () => {
    console.log("server started on 3000");

})