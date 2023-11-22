


function isPrime(n) {
    let checkPrime = true;
    if (n<2){
        checkPrime = false;
    } else if (n>3){
        for (let i = 2; i < n; i++) {
            if (n%i == 0) {
                checkPrime = false;
            }
        }
    }
    return checkPrime;

}


for (let i = 2; i <= 1000; i++) {
    if (isPrime(i)) {
        document.write(i+" ");
    }

}