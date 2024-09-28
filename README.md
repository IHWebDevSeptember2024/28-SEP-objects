# Objetos en javaScript

Los objetos son una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. 

El valor puede ser cualquier cosa, desde un número, una string, una función, o incluso otro objeto o arrays. (primitives y non-primitives data types)

## Creación de objetos

Por ahora hemos visto que podemos crear objetos así:

```javascript
const person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'music'],
};
```

Dentro de una variable llamada `person` hemos creado un objeto con tres propiedades: `name`, `age` y `hobbies`.

También hemos visto cómo acceder a las propiedades de un objeto, modificarlas, borrarlas y añadir nuevas.

Para más información consulta el portal o la documentación de [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos)

# Testing con Jasmine

Jasmine es un framework de testing para JavaScript. Es una herramienta de testing de código abierto que se puede utilizar para probar código JavaScript.

En el portal nos indica cómo instalar Jasmine y cómo escribir tests.

## describe()

La función `describe()` se utiliza para definir un grupo de tests. Se utiliza para agrupar tests que tienen algo en común.

El primer argumento de la función `describe()` es el nombre del grupo de tests, y el segundo argumento es una función (callback function) que contiene los "its".

```javascript
describe('nombre del grupo de tests', function() {
  // tests
});
```

## it()

La función `it()` "individual test" se utiliza para definir un test. Se utiliza para describir un test en Jasmine.

El primer argumento de la función `it()` es el nombre del test, y el segundo argumento es una función que contiene el test (callback function).

```javascript
describe('nombre del grupo de tests', function() {
  it('nombre del test', function() {
    // test
  });
});
```