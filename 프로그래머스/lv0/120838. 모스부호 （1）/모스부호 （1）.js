morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
function solution(letter) {    
    let a = letter.split(" ");
    let strArr = Object.entries(morse);
    let answer = [];
    for (let i = 0; i < a.length; i++) {
        for(let j = 0; j < strArr.length; j++) {
            if( a[i] === strArr[j][0]) {
                answer.push(strArr[j][1]);
            }
        }
    }   return answer.join("");    
}
