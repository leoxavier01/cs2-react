import '../App.css'

fetch('./CS.json')
    .then(res => res.json())
    .then(resposta => setArmas(resposta));

function setArmas(resposta) {
    const section = document.querySelector('.body section')

    resposta.forEach((arma) => {
        section.innerHTML += `<nav class="navInfo"><div class="divImg"><img class="imgArma" src=${arma.image} alt=""/></div><div class="nome"><div class="divName"><span>${arma.name}</span></div><div class="tipo"><span>${arma.type}</span></div></div> <div class="preco"><span>${arma.price}</span></div><div class="desc"><span>${arma.description}</span></div><button class="btn">Ver Mais</button></nav>`
    });
}

function Container() {
    return (
        <>
            <nav className="body">
                <section></section>
            </nav>
        </>
    )
}

export default Container