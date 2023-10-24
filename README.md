Ejercicio para la evaluación final del móodulo 3 (react) de Adalab. By Irene García Wodak.

## Ejercicio de Evaluación Final del Módulo 3 - Listado de Escenas de Owen Wilson

Este ejercicio tiene como objetivo crear una página web que muestra un listado de las escenas de películas en las que el actor Owen Wilson ha dicho 'wow' 😎

### Funcionalidades Principales
- 🎥🍿**Listado de Escenas**: Se mostrará un listado de las escenas de películas con detalles como el póster, el nombre de la película, la frase completa y el año de lanzamiento. 

- 🔍**Filtrado por Película**: Los usuarios podrán buscar escenas específicas filtrando por el nombre de la película. 

- 📅**Filtrado por Año**: También será posible filtrar las escenas por el año de lanzamiento de la película. 

- 🕵️‍♂️🔈**Detalle de Escenas**: Al hacer clic en una escena, se mostrará información adicional, incluyendo el nombre de la película, la frase completa y un enlace para escuchar la escena. 

- 🛠️**Detallitos de Calidad**: Se han implementado mejoras de usabilidad, como evitar la navegación accidental y mostrar mensajes claros en caso de búsquedas sin resultados.

 ### Posibles Implementaciones Adicionales
- 🔗**Url Compatible**: Se podría implementar la funcionalidad que permite refrescar o abrir una escena en otra pestaña o ventana del navegador para una experiencia de usuario más fluida.

- 📃**Ordenar la Lista por Título de Película**: Agregar la capacidad de ordenar la lista de escenas alfabéticamente por el título de la película para facilitar la navegación. 

### Tecnologías Utilizadas
- React: La interfaz de la aplicación se ha construido utilizando React.
- React Router DOM: Se ha utilizado React Router DOM para la navegación y visualización de detalles de escenas.
- [API Wow de Owen Wilson](https://owen-wilson-wow-api.onrender.com/ ): Para obtener información sobre las escenas.
- HTML, CSS: Se han empleado HTML y CSS para la estructura y el diseño de la aplicación.
- Almacenamiento local (localStorage)

### Pasos para Arrancar el Programa
Para ejecutar esta aplicación en tu entorno local, sigue estos pasos:

### La primera vez que lo arranques:
> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/)
1. Clona este repositorio en tu ordenador.
```bash
git clone https://github.com/Adalab/modulo-3-evaluacion-final-irenegwodak.git
```
2. Instala las dependencias desde tu terminal con el siguiente comando:
```bash
npm install
```
> No te asustes, se creará una carpeta llamada `node_modules`, son las dependencias.
3. Arranca el proyecto con:
```bash
npm run dev
```
> Entra en el enlace que aparece en terminal

### Cada vez que lo quieras arrancar de nuevo:

- Simplemente abre el repositorio y ejecuta:
```bash
npm run dev
```

## Nota de la autora

En este ejercicio he podido practicar y asentar:
- Uso de useState para la gestión de eventos y los estados en React.
- Controlar los formularios.
- Manejo de arrays, objetos y uso de spread y métodos funcionales.
- Uso de UseEffect para llamadas a api o almacenamiento en local storage
- Manejo de componentes, parents, childs, children, props y liftings.
- Reutilización de componentes personalizados.
- Control de calidad con PropTypes.
- Funcionamiento y manejo de las rutas estáticas y dinámicas.

Mejoras UI/UX:
- Añadir un **loader** mientras se reciben los datos del api.
- Un botón para **limpiar los valores** de la búsqueda.
- Un botón de subir en la pantalla principal, donde se genera mucho scroll. Aquí investigué y apliqué **Navigate de React-Router-DOM**.
- **Nuevos datos curiosos** recogidos de la API en las tarjetas filtradas y en los detalles de la tarjeta.
- Escuchar el wow de la escena en la propia página y poder ver la escena en una pestaña nueva.
- **Dinamismo en las opciones para filtrar** por título: si se hace click sobre el mismo filtro, este se quita y vuelve al orden original.
- Añadir un pie de página con un detalle gracioso para **aplicar el uso de Children**.

Gracias por interesarte por mi proyecto, cualquier duda o sugerencia mándame un DM &#129299;

Y si quieres contribuir a este proyecto, ¡no dudes en enviar un pull request!

[Irene García Wodak](https://github.com/irenegwodak)

