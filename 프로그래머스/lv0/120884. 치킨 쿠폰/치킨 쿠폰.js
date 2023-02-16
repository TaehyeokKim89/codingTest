function solution(chicken) {
    let 서비스치킨 = 0;
    while (chicken >= 10) {
        서비스치킨 += parseInt(chicken / 10);
        chicken = (chicken % 10) + parseInt(chicken / 10);
    }
    return 서비스치킨;
}