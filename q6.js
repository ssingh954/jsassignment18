//Q6. Create a generator that can throw an exception.

function *generateit() {
    try {
        yield 'Fruit';
        yield 'Coffee';
        yield 'Oatmeal'
    } catch (e) {

    }
}

let iter = generateit();
console.log(iter.next().value);
console.log(iter.throw('Hey now'));
console.log(iter.next());
