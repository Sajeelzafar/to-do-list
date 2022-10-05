import add from './add.js';

describe('add test', () => {
    test('adding first item', () => {
        expect(add("Emre Book", [])).toEqual([{description: "Emre Book", completed: false, index: 1}]);
    })
    test('adding fourth item', () => {
        expect(add("Sajeel Book", [{description: "Emre Book", completed: false, index: 1}, 
        {description: "Hello", completed: false, index: 2}, 
        {description: "Microverse", completed: false, index: 3}]))
        .toEqual([{description: "Emre Book", completed: false, index: 1}, 
        {description: "Hello", completed: false, index: 2}, 
        {description: "Microverse", completed: false, index: 3},
        {description: "Sajeel Book", completed: false, index: 4}]);
    })
    test('adding second item', () => {
        expect(add("Sajeel Book", [{description: "Emre Book", completed: false, index: 1}]))
        .toEqual([{description: "Emre Book", completed: false, index: 1},
        {description: "Sajeel Book", completed: false, index: 2}]);
    })
})