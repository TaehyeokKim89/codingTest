function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    let number = 1;
    for (let i = 1; i < numer; i++) {
        if (numer % i === 0 && denom % i === 0) {
            number = i;
        }
    }
    let a = numer / number;
    let b = denom / number;
    if (a % b === 0) {
        return [a / b, 1];
    } else if (b % a === 0) {
        return [1, b / a];
    } else {
        return [a, b];
    }
}