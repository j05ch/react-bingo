export const M = 'marked';
export const UM = 'unmarked';
export const MIDDLE = 12;

export function checkForWin(arr) {
    return checkHorizontal(arr)
        || checkVertical(arr)
        || checkDiagonal(arr);
}

function checkHorizontal(arr) {
    let win = false;
    for (let i = 0; i < 21; i = i + 5) {
        if (
            arr[i] === M
            && arr[i + 1] === M
            && arr[i + 2] === M
            && arr[i + 3] === M
            && arr[i + 4] === M
        ) {
            win = true;
        }
    }

    return win;
}

function checkVertical(arr) {
    let win = false;
    for (let i = 0; i < 5; i++) {
        if (
            arr[i] === M
            && arr[i + 5] === M
            && arr[i + 10] === M
            && arr[i + 15] === M
            && arr[i + 20] === M
        ) {
            win = true;
        }
    }

    return win;
}

function checkDiagonal(arr) {
    return (
            arr[0] === M
            && arr[6] === M
            && arr[12] === M
            && arr[18] === M
            && arr[24] === M
        )
        || (
            arr[4] === M
            && arr[8] === M
            && arr[12] === M
            && arr[16] === M
            && arr[20] === M
        )
}
