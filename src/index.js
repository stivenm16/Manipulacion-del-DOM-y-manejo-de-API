
 const urlBase = "https://platzi-avo.vercel.app";
 const appNode = document.querySelector('#app')

 const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN',{
        style: 'currency',
        currency: 'USD',
    }).format(price);
    return newPrice;
 }
 
//Intl


 //web api
 // Conectarnos al server
 window.fetch(`${urlBase}/api/avo`)
 // Procesar la respuesta, y convertirla en JSON
 .then((respuesta) => respuesta.json())
 // JSON -> Renderizar info browser
 .then((responseJSON) => {
     const todoLosItems  = [];
     responseJSON.data.forEach((item) => {
        
        //crear imagen
         const imagen = document.createElement('img');
         imagen.src = `${urlBase}${item.image}`;
         imagen.className = 'object-cover h-48 w-76';
         document.body.appendChild(imagen);
        
        
         //crear titulo
         const title = document.createElement('h3');
         title.textContent = item.name;
         title.className = 'subpixel-antialiased no-underline hover:underline font-sans cursor-pointer';
         document.body.appendChild(title);        
        
         //crear precio
         const price = document.createElement('div');
         price.textContent = formatPrice(item.price);
         price.className = 'font-sans font-bold';
         document.body.appendChild(price);

         const container = document.createElement('div')
         container.append(imagen, title, price);
         todoLosItems.push(container);
         container.className = 'flex items-center box-content m-8 y-64 w-64 p-6 border-6 flex-col float-left border-0 rounded-full shadow-2xl p-8 box-decoration-clone bg-gradient-to-r from-white to-white';

         document.body.appendChild(container);

     });

     appNode.body.append(...todoLosItems);
 });
