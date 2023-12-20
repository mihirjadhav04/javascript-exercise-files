// forEach does not return values.
const coding = ["JS", "Python", "React", "Flutter", "Django"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
});


// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter() - this function returns some vlaue from the function as per the condition.
const newNums = myNums.filter( (num) => num > 4)
console.log(newNums)


// .reduce() 

const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)


console.log(myTotal);