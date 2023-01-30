function solution(new_id) {
    //1단계 : 문자열을 소문자로 변환
    new_id = new_id.toLowerCase()
    //2단계 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외하고 모든 문자 제거
    new_id = new_id.replace(/[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/ ]/gim,"");
    //3단계 : 연속된 두개의 '.'을 하나로 반환 
    new_id = new_id.replace(/\.{2,}/g, "."); 
    //4단계 : 처음과 끝의 '.'은 공백으로 변환   
    new_id = new_id.replace(/^\.|\.$/,"");
    //5단계 : new_id의 길이가 0이면 빈 문자열 이 때 a로 변환 
    if(new_id.length === 0) {new_id = "a";}
    //6단계 : new_id의 길이가 16이상이면 15자리만 남기고, 끝에 또 '.'이 있다면 공백으로 변환
    if(new_id.length >= 16) {new_id = new_id.slice(0,15)};
    new_id= new_id.replace(/\.$/, "")
    //7단계 : new_id의 길이가 2이하일 때 new_id의 끝의 문자를 길이가 3일때까지 반복         
    let len = new_id.length;
    if (len <= 2) {new_id = new_id + new_id[len-1].repeat(3-len)};
    return new_id;
    }