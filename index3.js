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