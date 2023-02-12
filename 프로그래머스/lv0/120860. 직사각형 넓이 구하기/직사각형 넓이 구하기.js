function solution(dots) {
    let a = dots.map((x) => x[0])
    let x = Math.max(...a)-Math.min(...a)
    let c = dots.map((x) => x[1])
    let y = Math.max(...c)-Math.min(...c)
    return x*y
}