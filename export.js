// exportar_modulos.js
export const cat = () => {
    console.log("Me llamo Michelle");
};
//npm init -y
//ejecutar ese comando en la terminal para iniciar el package.json

// ¿Qué es package.json?
// El archivo package.json es un archivo de configuración que Node.js utiliza para gestionar tu proyecto. En él, se guardan detalles sobre el proyecto, como el nombre, la versión, las dependencias, los scripts, y más. También le dice a Node.js cómo debe manejar ciertos aspectos de tu proyecto, incluyendo la forma en que los archivos son tratados como módulos.

// ¿Por qué necesitamos package.json para usar import/export?
// Por defecto, Node.js (hasta la versión 12.x) usaba el sistema de módulos CommonJS, que funciona con require() y module.exports. Pero con la evolución de JavaScript, se introdujo el sistema de módulos ES6, que utiliza import y export.

// Cuando usas import y export, Node.js necesita saber que estás utilizando módulos ES6. Aquí es donde entra el package.json.

// Propiedad "type": "module" en package.json:
// Cuando agregas "type": "module" en tu package.json, le estás diciendo a Node.js que todos los archivos .js de tu proyecto deben ser tratados como módulos ES6. Esto le permite a Node.js usar la sintaxis moderna de import y export.

// ¿Qué pasa si no tienes "type": "module"?
// Si no tienes esa propiedad en el package.json, Node.js asumirá que estás usando el sistema CommonJS (es decir, require() y module.exports). En ese caso, si intentas usar import y export, recibirás un error como el que experimentaste antes.

// ¿Qué hace exactamente "type": "module"?
// Cuando añades "type": "module", Node.js entiende que quieres usar la sintaxis moderna de ES6 para manejar módulos. Esto permite:

// Usar import para traer módulos.
// Usar export para exportar funciones, objetos o variables.
