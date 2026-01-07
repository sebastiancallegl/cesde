const findMaxDifference = (arr) => {
    const min = Math.min(...arr);
    const newArr = arr.slice(arr.indexOf(min));
    return Math.max(...newArr) - min;
}

console.log(findMaxDifference([1, 3, 4]))
console.log(findMaxDifference([7, 1, 5, 3, 6, 4]))
