import add from './add.js';
import remove from './remove.js';

describe('add test', () => {
  test('adding first item', () => {
    expect(add('Emre Book', [])).toEqual([{ description: 'Emre Book', completed: false, index: 1 }]);
  });
  test('adding fourth item', () => {
    expect(add('Sajeel Book', [{ description: 'Emre Book', completed: false, index: 1 },
      { description: 'Hello', completed: false, index: 2 },
      { description: 'Microverse', completed: false, index: 3 }]))
      .toEqual([{ description: 'Emre Book', completed: false, index: 1 },
        { description: 'Hello', completed: false, index: 2 },
        { description: 'Microverse', completed: false, index: 3 },
        { description: 'Sajeel Book', completed: false, index: 4 }]);
  });
  test('adding second item', () => {
    expect(add('Sajeel Book', [{ description: 'Emre Book', completed: false, index: 1 }]))
      .toEqual([{ description: 'Emre Book', completed: false, index: 1 },
        { description: 'Sajeel Book', completed: false, index: 2 }]);
  });
});

describe('removing item', () => {
  test('removing an item', () => {
    add('Emre Book', []);
    add('Sajeel Book', [{ description: 'Emre Book', completed: false, index: 1 }]);
    expect(remove('<div id="1"></div>', [{ description: 'Emre Book', completed: false, index: 1 },
      { description: 'Sajeel Book', completed: false, index: 2 }])).toEqual([{ description: 'Sajeel Book', completed: false, index: 1 }]);
  });
});