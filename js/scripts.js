function createCardJersey(objeto) {
    let section = document.getElementById('jerseys-tshirts')

    let img = document.createElement('img')
    let name = document.createElement('h3')
    let price = document.createElement('p')

    let card = document.createElement('div')

    img.src = objeto.img 
    name.innerText = objeto.name 
    price.innerText = ` R$ - ${objeto.price}`.replace(".",",")

    card.append(img, name, price)
    section.append(card)
    return card
}
function createCardCap (objeto) {
    let section = document.getElementById('caps')

    let img = document.createElement('img')
    let name = document.createElement('h3')
    let price = document.createElement('p')

    let card = document.createElement('div')

    img.src = objeto.img 
    name.innerText = objeto.name 
    price.innerText = ` R$ - ${objeto.price}`.replace(".",",")

    card.append(img, name, price)
    section.append(card)
    return card
}
function createCardAcessories (objeto) {
    let section = document.getElementById('acessories')

    let img = document.createElement('img')
    let name = document.createElement('h3')
    let price = document.createElement('p')

    let card = document.createElement('div')

    img.src = objeto.img 
    name.innerText = objeto.name 
    price.innerText = ` R$ - ${objeto.price}`.replace(".",",")

    card.append(img, name, price)
    section.append(card)
    return card
}
