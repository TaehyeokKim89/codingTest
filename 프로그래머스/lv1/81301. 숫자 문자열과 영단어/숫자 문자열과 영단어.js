function solution(s) {
    let a = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i = 0; i < a.length; i++) {
         let b = s.replaceAll(a[i],i);
          s = b;
    }
    return Number(s);
}