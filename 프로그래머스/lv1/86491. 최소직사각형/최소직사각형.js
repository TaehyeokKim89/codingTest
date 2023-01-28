function solution(size) {
    let b = 0;
    let s = 0;
    for (let i = 0; i< size.length; i++){
        size[i].sort((a,b) => a-b);
            if (size[i][0] > s ) {
                s = size[i][0];
            }
            if (size[i][1] > b) {
                b = size[i][1];
            }      
    }
    return b*s;
    
}
