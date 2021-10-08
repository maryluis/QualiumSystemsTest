export function objToArr(obj) {
    let newArr = [];
    for(let key in obj) {
        newArr.push(obj[key]);
    }
    return newArr;
}