let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const te = 0
const test = arr.filter(el => {
    te = el % 2
    return te === 0
});
console.log(test);