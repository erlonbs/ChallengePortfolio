const btn = document.getElementById('botaoToTopo')

btn.addEventListener('click', function () {
  window.scrollTo(0, 0)
})

document.addEventListener('scroll', ocultar)

function ocultar() {
  if (window.scrollY > 10) {
    btn.style.display = 'flex'
  } else {
    btn.style.display = 'none'
  }
}

ocultar()

const cabecalho = document.getElementById('cabecalho')
const resumoMover = document.getElementById('resumo__container')

cabecalho.addEventListener('scroll', function () {
  window.scrollTo(0, 0)
})

document.addEventListener('scroll', ficarVisivel)

function ficarVisivel() {
  if (window.scrollY > 0) {
    cabecalho.style.position = 'fixed'
 
  }else {
    cabecalho.style.position = "static"
  }
}

ficarVisivel()
