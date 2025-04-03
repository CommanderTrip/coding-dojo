import { beforeEach, describe, expect, test } from "bun:test";
import { selectionSort } from "../../src/sorting algorithms/SelectionSort";

let unsorted: number[];
let sorted: number[];

beforeEach(() => {
    unsorted = [
        45, 94, 72, 17, 16, 79, 25, 77, 62, 70, 75, 60, 85, 14, 27, 21, 40, 53,
        80,
    ];

    sorted = [
        14, 16, 17, 21, 25, 27, 40, 45, 53, 60, 62, 70, 72, 75, 77, 79, 80, 85,
        94,
    ];
});

describe("Selection Sort Tests", () => {
    test("Selection Sort Random", () => {
        let potentiallySorted = selectionSort(unsorted);
        expect(potentiallySorted).toEqual(sorted);
    });

    test("Selection Sort Empty", () => {
        let potentiallySorted = selectionSort([]);
        expect(potentiallySorted).toEqual([]);
    });

    test("Selection Sort Best Case", () => {
        let potentiallySorted = selectionSort(sorted);
        expect(potentiallySorted).toEqual(sorted);
    });

    test("Selection Sort Worst Case", () => {
        let potentiallySorted = selectionSort(sorted.toReversed());
        expect(potentiallySorted).toEqual(sorted);
    });
});
