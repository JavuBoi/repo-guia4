# Guía de Ejercicios

## Descripción
Este es un repositorio de clases en el cual desarrollo una guía de ejercicios de Javascript.

## Ejercicios

### [Ejercicio 1](Ejercicio%201)

Cree un archivo con el nombre de “login.html”, que permita al usuario ingresar un correo electrónico y una contraseña y sus respectivos botones de “iniciar sesión” y “cancelar” (este último, solo borrará el formulario). En un archivo de JavaScript llamado “functions.js”, diseñará una variable de tipo arreglo objeto (JSON) que contendrá los datos de los posibles usuarios que operarán el sistema, siguiendo el ejemplo mostrado en la imagen (es solo un ejemplo, usted deberá seguir la secuencia con otros datos de acceso; también puede utilizar otros nombres en las llaves de cada ítem del elemento).

```js
[
    {
        "mail": "admin@example.com",
        "name": "Alan Brito Delgado",
        "pass": "Macoy123",
        "role": "administrador"
    },
    {
        "mail": "user@example.com",
        "name": "Debora Flores Del Campo",
        "pass": "Qwerty123",
        "role": "usuario"
    }
]
```

Al momento de iniciar sesión, deberá validar que los datos ingresados existan en el arreglo
de objetos JSON, de no existir, mostrará el mensaje de error respectivo, y de lo contrario,
guardará en una almacén de sesión, los datos que coincidieron, redirigiendo al usuario a
la página “dashboard.html”, donde mostrará los datos ingresados.
En el archivo “dashboard.html”, deberá controlar que el usuario no pueda acceder
directamente a él, sin antes haber iniciado sesión, validando que exista el almacén de
sesión entregado; si no existe, deberá redirigir al usuario inmediatamente al archivo
“login.html”. Además, deberá existir un botón que permita el “cierre de sesión”

### [Ejercicio 2](Ejercicio%202)

Diseñe una calculadora funcional, que incluya un cuadro de texto a modo de pantalla que no admita el ingreso directo (solo lectura o “readonly”), su botonera de dígitos del 0 al 9, y las 4 operaciones aritméticas básicas (suma, resta, multiplicación, división); botón de resultado (=), botón de borrado del último digito ingresado, botón de reseteo de pantalla a cero (0), botón de borrado reseteo completo y el punto como separador decimal. Los números deberá aparecer en la “pantalla”, solo cuando el usuario haga clic en los diferentes botones numéricos, o bien, cuando utilice el teclado físico del computador. Adicionalmente, la calculadora deberá contener un botón para “guardar en memoria”, cualquier valor que esté expresado en la pantalla, haciendo uso del almacén de sesión; otro botón para mostrar en la pantalla lo que haya en memoria (reemplazando a lo que haya escrito), y un botón que borre la memoria. Estos dos últimos botones solo deberán estar activos, si es que existe algún dato en el almacén, de lo contrario, estarán deshabilitados (considerar el atributo “disabled”). Operacionalmente, deberá controlar:
- Que al ingresar dígitos, no aparezcan ceros a la izquierda de la pantalla, salvo que ingrese un número decimal;
- Que no permita digitar más de 1 símbolo decimal;
- Que no admita la división por cero;
- Que por cada vez que se presione algún botón de operación, la pantalla vuelva a cero para recibir el nuevo valor y, si se había presionado previamente otra operación, ésta se reemplace.