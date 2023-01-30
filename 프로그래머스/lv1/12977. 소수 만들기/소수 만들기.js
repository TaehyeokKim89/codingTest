function solution(nums) {
    let len = nums.length, answer = 0;  
    for (let i = 0; i < len - 2; i++) {   
      for (let j = i + 1; j < len - 1; j++) {
        for (let k = j + 1; k < len; k++) {
          if (isPrime(nums[i] + nums[j] + nums[k])) { //각 원소 3개씩만 더해서 isPrime 함수의 인자로 넣는다.
            answer++;    //소수이면 카운트 한다.
          }
        }
      }
    }
    
    return answer;
  }
  
const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }