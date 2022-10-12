/*Create a generator for multiplying?
*/

function* logGenerator() {
    console.log(yield);
    console.log(yield);
    console.log(yield);
}

const gen = logGenerator();

gen.next();
gen.next(2*2);   
gen.next(3+3); 
gen.next(true); 
