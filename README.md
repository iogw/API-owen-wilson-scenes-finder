## Buscador de Escenas de Owen Wilson

El objetivo de este proyecto es crear una página web que muestra un listado de las escenas de películas en las que el actor Owen Wilson ha dicho 'Wow' 😎

 ## Implementaciones principales.

🎥🍿 **Listado de Escenas**. Tarjetas con  películas con detalles como el póster, el nombre de la película, la frase completa y el año de lanzamiento.

🔍 **Filtrado por Película**: Los usuarios pueden buscar escenas específicas filtrando por el nombre de la película. 

📅 **Filtrado por Año**: Selector con el año de lanzamiento de la película. 

🕵️‍♂️🔈 **Detalle de Escenas**: Al hacer clic en una escena se muestra información.

🛠️ **Mejora de usabilidad**: Página personalizada en caso de entrar a un enlace que no existe. Mensajes claros en caso de búsquedas sin resultados.

 ## Implementaciones Adicionales.
- 🔗 **Url Compatible**: Se permite refrescar o abrir una escena en otra pestaña o ventana del navegador para una experiencia de usuario más fluida.

- 📃**Ordenar la Lista por Título de Película** para facilitar la navegación. 

## Tecnologías Utilizadas.
- React.
- React Router DOM: Para la navegación y visualización de detalles de escenas.
- [API Wow de Owen Wilson](https://owen-wilson-wow-api.onrender.com/): Para obtener información sobre las escenas.
- HTML y Sass para la estructura y el diseño de la aplicación.
- Almacenamiento local (Local Storage)

## DIY.
> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/)
1. Clonar este repositorio en tu ordenador.
2. Instalar los módulos de nodejs: `npm i`
3. Iniciar proyecto: `npm run dev`

Para cualquier modificación en directo, editar los archivos en `/src`. 

> **CTRL+C** para finalizar el proyecto.

## Comentarios

Con este proyecto he podido practicar y asentar:
- Uso de **useState** para la gestión de eventos y los estados en React.
- **Manejar** los formularios.
- Manejo de arrays, objetos y uso de **spread** y métodos funcionales.
- Uso de **UseEffect** para llamadas a api o almacenamiento en local storage
- Manejo de **componentes**, parents, childs, children, props y liftings.
- Reutilización de **componentes personalizados**.
- Control de calidad con **PropTypes**.
- Funcionamiento y manejo de las **rutas estáticas y dinámicas**.

Mejoras UI/UX:
- Añadir un **loader** mientras se reciben los datos de la API.
- Botón para **limpiar los valores** de la búsqueda.
- Botón de subir en la pantalla principal, donde se genera mucho scroll aplicando **Navigate de React-Router-DOM**.
- **Nuevos datos curiosos** recogidos de la API en las tarjetas filtradas y en los detalles de la tarjeta.
- Escuchar el wow de la escena en la propia página y poder ver la escena en una pestaña nueva.
- **Dinamismo en las opciones para filtrar** por título: si se hace click sobre el mismo filtro, este se quita y vuelve al orden original.
- Añadir un pie de página con un detalle gracioso para **aplicar el uso de Children**.

Con una maquetación sencilla centrando el proyecto en la funcionalidad y en mantener un código limpio, mantenible y escalable: 
- Limpiando los datos recibidos de la API.
- Utilizando nombres de fácil interpretación.
- Estructurando el código por tipos.
- Estructurando el proyecto por funcionalidad.

🖖

