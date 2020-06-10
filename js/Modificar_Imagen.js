
/*
    -----------------------------------------------------------
        Autor: Osvaldo Aquino
        nickname: owi
        Hacer una imagen Dinamica
    -----------------------------------------------------------
*/


/*
    ------------------------------
        VARIABLE GLOBALES
    -----------------------------
 */

//Acceder a las etiquetas HTML
var Stark_Texto = document.getElementById("titulo");
var Stark_Imagen = document.getElementById("Elon_Musk")




/*
    ----------------
        EVENTOS
    ----------------
 */



// Evento que espera a que el usuario clickee sobre la imagen 
Stark_Imagen.addEventListener("click",function()
    {
        // Se altera el tamaño de la imagen. Aumentandola
        Stark_Imagen.style.width= "900px"; 

        // Se cambia el nombre y el color de referencia de la imagen
        Stark_Texto.innerHTML="Stark Aumentado";
        Stark_Texto.style.color="purple";

        

        Stark_Imagen.addEventListener("click",function()
            {
                // Se altera el tamaño de la imagen. Retornando a su tamaño inicial
                Stark_Imagen.style.width= "600px"; 

                // Se cambia el nombre y el color de referencia de la imagen
                Stark_Texto.innerHTML="Stark Retroalimentado Inicial";
                Stark_Texto.style.color="orange";
            });
    });

