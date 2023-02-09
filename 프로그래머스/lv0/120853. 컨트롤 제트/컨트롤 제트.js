function solution(s) {
    let sum = 0; 
    let a = s.split(" ")
    for (let i = 0; i< a.length; i++) {
        if( a[i] !== "Z") {
            sum += a[i]*1
        } else if ( a[i] == "Z") {
            sum -= a[i-1]*1
        }
    }   return sum
}