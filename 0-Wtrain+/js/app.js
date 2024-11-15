    const container = document.querySelector(".container")



    catalogo.forEach(item => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `  
            
                    <img src="${item.image}" alt="">
                    <div class="texto">
                    <a href="${item.enlace}"><h1>${item.categoria}</h1></a>
                    <p>${item.descripcion}</p>
                
            
        `
        container.appendChild(card)
        /* imprimer solo del 10 al 20 */
    /*     if(item.id <=20 && item.id >=10){
            document.write(card)
        }
            */
    });