// Mini Assignment - 01

// let arr = [[1,2,3] , [4,5]];
// Result = [1,2,3,4,5]


let arr = [[1,2,3] , [4,5]];

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}


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


// Mini Assignment - 03

// let array1 = [[1,2,7], [2,5], [9, 0, 2]];
// let array2 = [[1,6,3], [4,5], [8, 4, 4]];

// Square of array1
// Result = [2, 8, 10, 6, 10, 17, 4, 6]


let array1 = [[1,2,7], [2,5], [9, 0, 2]];
for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array1[i].length; j++) {
        console.log(array1[i][j] * array1[i][j]);
    }
}