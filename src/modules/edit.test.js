import edit from './edit.js';

describe("edit test", () => {
  let todoTasks = [{description: 'hello', completed: false, index: 1}];
  localStorage.setItem('todoList', JSON.stringify(todoTasks));
  edit(0, "Microverse")
      test("String test", () => {
          expect(JSON.parse(localStorage.getItem('todoList'))[0].description).toEqual("Microverse");
      })
})

// import localStorageSave from './localStorage.js';

// class LocalStorage {
//     constructor(){
//         this.dictionary = {};
//     }

//     getItem(key) {
//         return this.dictionary[key];
//     }

//     setItem(key, item) {
//         this.dictionary[key] = item;
//     }
// }

// describe("edit test", () => { 
//     let data;
    
//     beforeAll( () => {
//         Window.localStorage = new LocalStorage();
//     });

    // beforeEach(() => {
    //     lStorage = new LocalStorage();
    //     Object.defineProperty(window, 'localStorage', {value: lStorage})
    //     data = JSON.parse('[{"description":"1","completed":false,"index":1},{"description":"2","completed":false,"index":2},{"description":"3","completed":false,"index":3}]');
    //     console.log(data);
    //     Window.localStorage.setItem('todoList', data);
    // });

//     it("Should edit the first task ", () => {
//         const lStorage = new LocalStorage();
//         Object.defineProperty(window, 'localStorage', {value: lStorage})
//         localStorageSave({"description":"1","completed":false,"index":1});
//         localStorageSave({"description":"2","completed":false,"index":2});
//         localStorageSave({"description":"3","completed":false,"index":3});
//         console.log(window.localStorage.getItem('todoList'));
        // Window.localStorage.setItem('todoList', data);
//         const newDescription = "not 1";
//         edit(0, newDescription);

//         expect(localStorage.getItem('todoList')[0].description).toEqual(newDescription);
//      })
// })

// <reference path="../../library.test.d.ts"/>
// import * as angular from "angular"; angular;
// import * as mocks from "angular-mocks/ngMock"; mocks;

// describe('feat(localStorage Mock): ', function() {

//   beforeAll(() => {
//     angular.module('mock-module',[])
//   });

  // --- snip ---
  // Mock localStorage
//   beforeEach(() => {
//     var store = {};

//     spyOn(localStorage, 'getItem').and.callFake( (key) => {
//      return store[key] || null;
//     });
//     spyOn(localStorage, 'removeItem').and.callFake((key) =>  {
//       delete store[key];
//     });
//     spyOn(localStorage, 'setItem').and.callFake((key, value) =>  {
//       return store[key] = value;
//     });
//     spyOn(localStorage, 'clear').and.callFake(() =>  {
//         store = {};
//     });
//   });
  
//   //--- snap ---

//   beforeEach(()=> {
//       angular.mock.module('mock-module');
//   });

//   it('should set an Item', () => {
//     expect(localStorage.setItem('foo', 'bar')).toBe('bar'); // bar
//     expect(localStorage.getItem('foo')).toBe('bar'); // bar
//   });

//   it('should return null for non existing items', () => {
//     expect(localStorage.getItem('foo')).toBeNull(); // null
//   });

//   it('should set and remove Item', () => {
//     expect(localStorage.setItem('foo', 'bar')).toBe('bar'); // bar
//     expect(localStorage.removeItem('foo')).toBeUndefined(); // undefined
//     expect(localStorage.getItem('foo')).toBeNull(); // null
//   });

//   it('should clear the storage', () => {
//     expect(localStorage.setItem('foo', 'bar')).toBe('bar'); // bar
//     expect(localStorage.setItem('bar', 'foo')).toBe('foo'); // foo
//     expect(localStorage.clear()).toBeUndefined(); // undefined
//     expect(localStorage.getItem('foo')).toBeNull(); // null
//     expect(localStorage.getItem('bar')).toBeNull(); // null
//   });
// });






// import edit from './edit.js';
// jest.mock('./edit.js');


// describe("edit test", () => {
//     edit(3, "Ex-Microverse");
    
    // expect('setItem').toHaveBeenCalled();
    // expect('getItem').toHaveBeenCalled();
    
    // expect().toEqual([{ description: 'Emre Book', completed: false, index: 1 },
    // { description: 'Hello', completed: false, index: 2 },
    // { description: 'Ex-Microverse', completed: false, index: 3 },
    // { description: 'Sajeel Book', completed: false, index: 4 }])
// })
