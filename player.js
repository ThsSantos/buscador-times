document.querySelector('button').addEventListener('click', busca)
const div = document.querySelector('.result')

function busca() {
  const nomeJogador = document.querySelector('input').value
  div.innerHTML = ""

  if (nomeJogador == "") {

  } else {

    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${nomeJogador}`).then(function (resposta) {
      resposta.json().then(function (data) {
        console.log(data)

        for (dados of data.player) {
          console.log(dados)
          let divJogador = document.createElement('div')
          divJogador.setAttribute('class', 'jogador')
          let img = document.createElement('img')
          img.setAttribute('src', dados.strCutout)
          let p = document.createElement('p')
          let esporte = document.createElement('p')
          let liga = document.createElement('p')
          p.innerText = dados.strPlayer
          esporte.innerText = `Esporte: ${dados.strSport}`
          if (dados.strLeague == "") {
            liga.innerText = "Liga: Indefinida"
          } else {
            liga.innerText = `Liga: ${dados.strLeague}`
          }

          let botao = document.createElement('button')
          botao.innerText = "Saiba Mais +"
          botao.setAttribute('onclick', `time(${dados.idTeam})`)
          // console.log(dados.strTeam)
          divJogador.appendChild(img)
          divJogador.appendChild(p)
          divJogador.appendChild(esporte)
          divJogador.appendChild(liga)
          divJogador.appendChild(botao)
          div.appendChild(divJogador)

        }

      })
    })
  }


}