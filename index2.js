// Mini Assignment - 02

// let arr1 = [[1,2,7], [2,5], [9, 0, 2]];
// let arr2 = [[1,6,3], [4,5], [8, 4, 4]];

// Addition of same index of arr1 and arr2 
// Result = [2, 8, 10, 6, 10, 17, 4, 6]


let arr1 = [[1,2,7], [2,5], [9, 0, 2]];
let arr2 = [[1,6,3], [4,5], [8, 4, 4]];

for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr1[i].length; j++) {
        console.log(arr1[i][j]+ arr2[i][j]);
    }
}