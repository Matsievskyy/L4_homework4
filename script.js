const array = [9, 5, -1, 12, 0, 3]

function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let sort = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = sort;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(array));