export const logRunningTaskAsy = function () {
    return new Promise((res, rej) => {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
            sum += i
        }
        res(sum)
    })
}