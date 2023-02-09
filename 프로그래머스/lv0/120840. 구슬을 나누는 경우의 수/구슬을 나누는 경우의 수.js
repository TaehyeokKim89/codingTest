function solution(balls, share) {
    let a = 1;
    let b = 1;
    let c = 1;
    let d = balls-share;
    for ( let i =1 ; i <=balls; i++) {
           a = a*i;    
    }
    for (let i = 1; i <=share; i++) {
           b= b*i;    
    }
    for (let i = 1; i <= d; i++) {
           c= c*i;                 
    }
    return  Math.round(a/(b*c))
}