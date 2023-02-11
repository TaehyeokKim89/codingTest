function solution(spell, dic) {
    let newDic= dic.map((x)=> [...new Set(x)])
    let filteredDic= newDic.map((x)=> {
       return x.filter((y)=> spell.includes(y))
    })
    let dicLength =filteredDic.map((x)=> x.length )
    for (let i =0; i< dicLength.length; i++) {
        if (dicLength[i]===spell.length) {
            return 1
        }        
    }
    return 2   
}