function searchPhone(phones: number[], target: number): number {
  let left = 0
  let right = phones.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const value = phones[mid]

    if (value === target) {
      return mid
    }

    if (target < value) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]

console.log(searchPhone(phones, 1008)) // → 3
console.log(searchPhone(phones, 1020)) // → 6
console.log(searchPhone(phones, 9999)) // → -1
