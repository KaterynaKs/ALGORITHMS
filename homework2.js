// 1 ЗАДАНИЕ
// Напишите метод, который удаляет все дубликаты из отсортированного массива. 
// Метод должен вернуть длину нового массива без дубликатов и изменить исходный 
// массив таким образом, чтобы все уникальные элементы были перемещены в начало.

// Пример:
// Ввод: nums = {2, 2, 3, 3, 3, 4, 5, 5}
// Вывод: Длина нового массива: 4, измененный массив: {2, 3, 4, 5, _, _, _, _}

// --------------------------------------
// ВАРИАНТ 1
// const num =[1, 35, 23, 4, 1, 1, 35];
// num.sort((a, b) => a - b);
// console.log(num);

// function duplicates(num) {
//     if (num.length === 0) return 0;
//     let uniqueIndex = 1;
//     const n = [];
//     for (let i = 0; i < num.length; i++) {
        
//         if (num[i] !== num[i - 1]) {
//             num[uniqueIndex] = num[i];
//             uniqueIndex++;
//             n.push(num[uniqueIndex]);
//             console.log(n);
//         }
         
//     }   
//     return uniqueIndex;    
// }
// let length = duplicates(num);
// console.log(`Длина нового массива: ${length-1}`);
// --------------------------------
// ВАРИАНТ 2 
// const num = [1, 35, 23, 4, 1, 35];
// const uniqueSorted = [...new Set(num.sort((a, b) => a - b))];
// console.log(uniqueSorted);
// ---------------------------------
// 2 Задание. 
// Напишите метод, который принимает два отсортированных массива и объединяет их в один отсортированный массив. 

function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0; 
    let j = 0; 

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

let arr1 = [2, 3, 8, 10];
let arr2 = [1, 4, 6];
let mergedArray = mergeArrays(arr1, arr2);
console.log("Объединенный массив:", mergedArray);

function mergeSortedArrays(arr1, arr2) {
    // Объединяем два массива и сортируем результат
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
// -------------------------
// ВАРИАНТ 2

// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// let arr1 = [2, 3, 10];
// let arr2 = [1, 4, 6];
// let mergedArray = mergeArrays(arr1, arr2);
// console.log("Объединенный массив:", mergeArray);