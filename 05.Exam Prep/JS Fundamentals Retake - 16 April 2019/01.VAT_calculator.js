function solve(sumAfterVat, vat) {
   let sumBeforeVat = sumAfterVat / (1 + vat / 100) ;
   console.log(sumBeforeVat.toFixed(2));
}

solve(120.00, 20.00);