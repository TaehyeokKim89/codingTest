function solution(s, n) {
    let a = '';
    for (let i = 0; i < s.length; i++) {  
        let b = s.charCodeAt(i);   
        if ( 97 <= s.charCodeAt(i) && s.charCodeAt(i) <=122) {  //유니코드가 소문자인 범위
            let c = String.fromCharCode(b+n);   // "z"뒤로는 "a"이므로
            if ( b+n >= 123) {                      
                let d = String.fromCharCode(b+n-26); // 다시 "a"의 유니코드로 올 수 있게 26을 빼주고 반환한다.
                a += d;
            } else {
                a += c;
            }
        } else if (65 <= s.charCodeAt(i) && s.charCodeAt(i) <=90 ){ //유니코드가 대문자인 범위
            let e = String.fromCharCode(b+n);   // "Z"뒤로는 "A"이므로
        if ( b+n >= 91) {                           // 유니코드와 n의 합이 91을 넘으면    
                let f = String.fromCharCode(b+n-26); // 다시 "A"의 유니코드로 올 수 있게 26을 빼주고 반환한다.
                a += f;
            } else {
                a += e;
            }
        }else if (s.charCodeAt(i) == 32){   //" "(공백)의 유니코드는 32이이고, 이를 유지해주는 조건을 단다.
            let g = String.fromCharCode(32);
            a += g;
        }
    }
    return a;
}
