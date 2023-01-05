function twoSum(array, target) {
    let newValue = [];
    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x < array.length; x++) {
            if (array[i] + array[x] == target && i !== x) {
                newValue = [i, x];
            } else {
                continue;
            }
        }
    }
    return newValue;
}