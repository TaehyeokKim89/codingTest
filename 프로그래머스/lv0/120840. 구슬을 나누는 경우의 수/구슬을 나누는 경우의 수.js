function solution(balls, share) {
    let a = [];
    let b = [];
    let c = [];
    let d = balls-share;
    for ( let i =1 ; i <=balls; i++) {
           a.push(i);    
    }
    for (let i = 1; i <=share; i++) {
           b.push(i);    
    }
    for (let i = 1; i <= d; i++) {
           c.push(i);                  
    }
    let e = a.reduce((a,b)=> a*b, 1)
    let f = b.reduce((a,b)=> a*b, 1)
    let g = c.reduce((a,b)=> a*b, 1)
    return  Math.round(e/(f*g))
}