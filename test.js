// importar la función sum del archivo app.js


const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')

// comienza tu primera prueba
test("One yen should be 0.006 pounds", function(){
    //import the function from app.js
    
    
    const Pound = fromYenToPound(3.5);

    const expected = 3.5 * 0.006; 

     expect(fromYenToPound(3.5)).toBe(0.021); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One Dollar should be 134 Yens", function(){
    //import the function from app.js
   

    const Yen = fromDollarToYen(3.5);
   
    const expected = 3.5 * 134; 
    
     expect(fromDollarToYen(3.5)).toBe(469); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

