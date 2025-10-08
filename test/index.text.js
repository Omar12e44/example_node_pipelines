const hash = require('testindex');

test('Verificar Hash', () => {
    const message = 'Hola, este es un mensaje de prueba.';
    const hash = hash(message);
    expect(hash).equals('edf9b4c3c8e3f6d4e8f0c3e5b6a7c8d9e0f1a2b3c4d5e6f708192a3b4c5d6e7f8')
});
