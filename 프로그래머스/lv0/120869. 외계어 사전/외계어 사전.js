function solution(spell, dic) {
    let a = spell.sort()
    let b=  dic.map((x)=> [...new Set(x)].sort() )
    let c= b.map((x)=> {
       return x.filter((y)=>  a.includes(y))
    })
    let d =c.map((x)=> x.length )
    for (let i =0; i< d.length; i++) {
        if (d[i]===a.length) {
            return 1
        }        
    }
    return 2   
}