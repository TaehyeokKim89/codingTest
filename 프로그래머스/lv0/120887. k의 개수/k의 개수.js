function solution(i, j, k) {
    let str2 =""
    let count = 0;
    for (let l = i; l <=j; l++ ) {
         let str = l.toString()
         str2 += str
         
    }
    let str3 = str2.split("");
    for (let j = 0; j <str3.length; j++) {
            if( str3[j] == k) {
                count++
            }
    } return count
}