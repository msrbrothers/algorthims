const logRunningTask = function (params) {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i
    }

    return sum
}


process.on("message", (message) => {
    if (message === 'start') {
        const sum = logRunningTask();
        process.send(sum)
    }
})