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
          let time = document.createElement('p')
          p.innerText = dados.strPlayer
          esporte.innerText = `Esporte: ${dados.strSport}`
          if(dados.strTeam != null || dados.strTeam != ""){
            time.innerText = `Time: ${dados.strTeam}`
          }else{
            time.innerText = `Time: Time não encontrado`
          }

          let botao = document.createElement('button')
          botao.innerText = "Saiba Mais +"
          botao.setAttribute('onclick', `jogador(${dados.idPlayer})`)
          // console.log(dados.strTeam)
          divJogador.appendChild(img)
          divJogador.appendChild(p)
          divJogador.appendChild(time)
          divJogador.appendChild(esporte)
          
          divJogador.appendChild(botao)
          div.appendChild(divJogador)

        }

      })
    })
  }


}

function jogador(id){
  div.innerHTML = ""
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id}`).then(function(infos){
    infos.json().then(function(dados){
      console.log(dados)
      for(player of dados.players){
        let divPlayer = document.createElement('div')
        divPlayer.setAttribute('class','player')
        let nome = document.createElement('h1')
        nome.innerText = player.strPlayer
        let foto = document.createElement('p')
        if(player.strThumb != null){
          let img = document.createElement('img')
          img.setAttribute('src', player.strThumb)
          foto.appendChild(img)
        }else{
          foto.setAttribute('class','erro')
          foto.innerText = "Foto não encontrada"
        }

        let altura = document.createElement('p')
        altura.innerText = `Altura: ${player.strHeight}`
        let peso = document.createElement('p')
        peso.innerText = `Peso: ${player.strWeight}`
        let posição = document.createElement('p')
        posição.innerText = `Posição: ${player.strPosition}`
        let time = document.createElement('p')
        time.innerText = `Time: ${player.strTeam}`
        let nascimento = document.createElement('p')
        nascimento.innerText = `Data de nascimento: ${player.dateBorn}`
        let localNas = document.createElement('p')
        localNas.innerText = `Local de nascimento: ${player.strBirthLocation}`
        let nacionalidade = document.createElement('p')
        nacionalidade.innerText = `Nacionalidade: ${player.strNationality}`


        divPlayer.appendChild(nome)
        divPlayer.appendChild(foto)
        divPlayer.appendChild(time)
        divPlayer.appendChild(posição)
        divPlayer.appendChild(altura)
        divPlayer.appendChild(peso)
        divPlayer.appendChild(nascimento)
        divPlayer.appendChild(localNas)
        divPlayer.appendChild(nacionalidade)
        

        div.appendChild(divPlayer)
      }
    })
  })
  
}