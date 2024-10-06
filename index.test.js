
const holaMundo = require('./index');

test('Devuelve "Hola Mundo!"', () => {
  expect(holaMundo()).toBe("Hola Mundo!");
});
