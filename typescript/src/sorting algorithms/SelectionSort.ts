export function selectionSort(list: number[]): number[] {
    // Loop over the full list
    for (let i = 0; i < list.length; i++) {
        let min = i;

        // Loop over the rest of the array that has not been sorted
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[min]) min = j;
        }

        // Only swap if the next value wasn't the smallest
        if (min != i) {
            let temp = list[min];
            list[min] = list[i];
            list[i] = temp;
        }
    }
    return list;
}
