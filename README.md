# PreEntrega1SebastianDiMatteo

El presente proyecto fue creado por Sebastian Di Matteo.
Se trata de un Ecommerce en el rubro de vehiculos de motor(automoviles, motos, y PWC).
En el mismo, y dentro de la Navbar se puede navegar entre las diferentes categorias (automoviles, motos y PWC) y volver al menu principal con todos los productos haciendo click en el nombre de la empresa.
Asimismo, se visualiza una lista de productos de los cuales, es posible ver su detalle , haciendo click en el boton "Ver detalle" que te direcciona a una nueva card del producto, pudiendo visualizar nombre completo, imagen categoria, precio, stock y una descripciòn mas completa del producto junto a un contador que permite elegir la cantidad y un boton que ofrece la posibilidad de agregar al carro de compras.
Una vez agregado al carrito se visualiza boton ¨Terminar compra¨ a los efectos de poder culminar la compra.
Luego se abre una card con los datos de la cantidad elegida, el precio unitario y el total a pagar, junto con los botones de ¨Limpiar carrito¨ y ¨checkout¨.
Al momento de realizar el checkout se despliega un formulario, que permite al usuario agregar sus datos que son relacionados a los productos elegidos y finalmente si se hace click en el boton ¨crear orden¨ durante el loadin se indica que ¨se està generando la orden¨ para posteriormente otorgar y visualizar el Id de la orden con la leyenda ¨el Id de su orden es:¨.

Como tecnologias utilizadas para el desarrollo del proyecto, encontramos React: 18.2.0; Firebase:10.3.1, Sass 1.66.0; tailwindcss": 3.3.3.

Instucciones:
bash
git clone // https://github.com/sdimatteo82/PreEntrega1SebastianDiMatteo.git
npm install
npm start.

Este proyecto utiliza Sass

Cree un archivo index.scss
npm node-sass--save

Tailwindcss
Este proyecto utiliza Tailwind CSS para estilos. Asegúrese de configurar Tailwind CSS siguiendo estos pasos:

En la raíz de su proyecto, cree un archivo tailwind.config.js si aún no existe y personalícelo según sus necesidades. Puede usar el siguiente comando para generar un archivo de configuración predeterminado:
npm install

En su archivo de estilos (por ejemplo, src/styles.css o src/index.css), importe los estilos de Tailwind CSS:
npm tailwindcss init
En su archivo Sass
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

Gif:
Se adjunta link que direcciona al gif de la App
https://drive.google.com/file/d/1b7i9xoF9LwIqxeCX427zyK3pwSNrG65F/view?usp=sharing

A los efectos de backup se agrega el mismo a la carpeta public [image] (public/proyectoFinal.gif)

Espero haya sido util la presente informacion.
