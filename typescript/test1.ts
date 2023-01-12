type fun1 = {
    <T>(arr:T[]):T
}

const last : fun1 = (arr) => arr[arr.length-1]

console.log('last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.')
console.log('last([1,2,3,4])')
console.log(last([1,2,3,4]))



function prepend(arr: Array<number>, item:number) {
    const test = [item, ...arr]
    return test
}

console.log('prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.')
console.log('prepend([2, 3, 4], 1)')
console.log(prepend([2, 3, 4], 1))