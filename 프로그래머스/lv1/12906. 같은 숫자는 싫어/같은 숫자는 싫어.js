function solution(arr){
 return arr.filter((val,index) => val != arr[index+1]);
                    //val 값이 val index 다음값과 같지 않은 값들만 반환한다.
}