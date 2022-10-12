/*Q3. Are function generators iterable in JavaScript?
Ans.
Yes, Generators provide an easier way to implement iterators.
generators are iterables, you can implement an iterator in an easier way
*/
// generator function
function* generatorFunc() {
  
    yield 1;
    yield 2;
    yield 3;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
    console.log(value);
}