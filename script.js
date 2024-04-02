


function pular(){        
    let personagem = document.querySelector("#personagem")
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)   
}

var testarColisao = setInterval( function(){
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var Esquerdaquadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if (Esquerdaquadrado < 20 && Esquerdaquadrado > 0 && topoPersonagem >= 130){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert("Game Over! ")
    }

}, 10)