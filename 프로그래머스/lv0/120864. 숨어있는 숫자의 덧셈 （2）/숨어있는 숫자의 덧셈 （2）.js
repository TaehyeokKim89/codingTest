function solution(my_string) {
    let a= my_string.match(/\d+/g);
    if ( a == null) {
        return 0;
    } else {
        return a.map( x => Number(x)).reduce( ( a, b) =>  a+b, 0);     
    }
}