//Q5. Print an infinite series of natural numbers using a generator.
function* nat() {
    let i = 1;
    while (true) {
      yield i++;
    }
  }
  
  for (let num of nat()) {
    console.log(num);
  }