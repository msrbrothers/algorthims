import fs from 'fs'
import csv from 'csvtojson'
import { Transform } from 'stream';

const readStream = fs.createReadStream('data/import.csv');

const dataTransform = new Transform({
    objectMode: true,
    transform(chunk, enc, callback) {

        const user = {
            name : chunk.name,
            email: chunk.email,
            age: chunk.age,
            salary: chunk.salary,
            isActive: chunk.isActive === 'true'
        }
        callback(null, user)

    }
})

const filterData = new Transform({
    objectMode: true,
    transform(user, enc, callback) {  
        if (!user.isActive) {
            callback(null);
            return
        }
        callback(null, user)

    }
})


readStream
    .pipe(
        csv({ delimiter: ';' },
            { objectMode: true })
    )
    .pipe(dataTransform)
    .pipe(filterData)
    .on('data', data => { console.log('>> data ::', data); })
    .on('error', (err) => {
        // console.log('>>>>>');
        // console.log(err);
    })