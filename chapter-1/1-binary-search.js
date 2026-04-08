const list = Array.from({ length: 128 }, (_, i) => i + 1)

function binarySearch(list, item) {
    let low = 0
    let high = list.length - 1
    let steps = 0

    while (low <= high) {
        steps++

        let mid = Math.floor((low + high) / 2)
        let guess = list[mid]

        if (guess === item) {
            return `Steps: ${steps} | Index: ${mid}`
        }
        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return
}