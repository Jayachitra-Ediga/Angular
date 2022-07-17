let prime= (n) =>{
    let c=0; i=1;
    for(i=1; i<=n; i++){
        if( n%i ==0)
        c= c+1;
    }
    if( c==2){

console.log(n,"is Prime number")
    }
    else{
        console.log(n,"is not Prime number")
    }
}
prime(197)
let primeNumbers = (n2) => {
  let a = [];

  let c = 0,
    i,
    j,
    n1 = 1;

  for (j = n1; j <= n2; j++) {
    c = 0;
    for (i = 1; i <= j; i++) {
      if (j % i == 0) {
        c = c + 1;
      }
    }

    if (c == 2) {
      a.push(j);
      // console.log(j);
    }
  }
  console.log(a);
};

primeNumbers(15);
