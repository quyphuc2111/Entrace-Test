var array1 = ["a", "b", "c"]
var array2 = [1, 2, 3]
var result1 = []
var result2 = []
var result = []

for (let i = 0; i < array1.length; i++) {
    result1.push(array1.slice(i, i + 1))
}
for (let i = 0; i < array2.length; i++) {
    result2.push(array2.slice(i, i + 1))
}

//case1
for (let i = 0; i < result1.length; i++) {
    for(let j =0;j< result2.length;j++) {
        if(i==j) {
            result.push(result1[i] + result2[i])
        }
    }
}
//case2

console.log(result.join(''))



