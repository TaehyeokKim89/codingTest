function solution(numbers) {
    let numberArr = ["zero","one", "two", "three" ,"four", "five", "six", "seven", "eight", "nine" ]
    for (let i = 0; i < numberArr.length; i++) {
        numbers = numbers.replaceAll(numberArr[i], i);
    }
    return Number(numbers);
}