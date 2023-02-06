function solution(before, after) {
        before = before.split("").sort();
        after = after.split("").sort();
        let answer = before.filter((x,i) => x === after[i]);
        return answer.length === after.length ? 1 : 0;
}
