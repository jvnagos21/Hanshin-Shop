function JerseyRender(array) {
    for (let index = 0; index < array.length; index++) {
        createCardJersey(array[index])
    }
}
JerseyRender(jerseyTshirt)

function capRender(array) {
    for (let index = 0; index < array.length; index++) {
        createCardCap(array[index])
    }
}
capRender(caps)

function acessoriesRender(array) {
    for (let index = 0; index < array.length; index++) {
        createCardAcessories(array[index])
    }
}
acessoriesRender(acessories)