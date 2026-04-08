const lista = Array.from({ length: 128 }, (_,i) => i+1)

function pesquisaBinaria(lista, item) {
    let baixo = 0
    let alto = lista.length - 1
    let etapas = 0

    while (baixo <= alto) {
        etapas++

        let meio = Math.floor((baixo + alto) / 2)
        let chute = lista[meio]

        if (chute === item) {
            return `Etapas: ${etapas} | R: ${meio}`
        }
        if (chute > item) {
            alto = meio - 1
        } else {
            baixo = meio + 1
        }

    }

    return
}