const fibonacci = function(placement) {
    if (placement < 0){
        return "OOPS"
    }
    if (placement == 0) {
        return 0
    }
    if (placement == 1) {
        return 1
    }
    let n1 = 0, n2 = 1, Nextterm
    placement = Number(placement)
    for (let i = 2; placement >= i; i++) {
        Nextterm = n1 + n2
        n1 = n2
        n2 = Nextterm
    }
    return Nextterm
};
console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci;
