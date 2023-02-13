function solution(score) {
    let avg = [];
    for (let i = 0; i < score.length; i++) {
        avg.push((parseInt(score[i][0]) + parseInt(score[i][1])) / 2);
    }
    let sorted = [...avg].sort((a, b) => b - a);
    return avg.map((x) => sorted.indexOf(x) + 1);
}