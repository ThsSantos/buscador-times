document.querySelector('button').addEventListener('click', busca)
const div = document.querySelector('.result')

function busca() {
  const nomeJogador = document.querySelector('input').value
  div.innerHTML = ""

  if (nomeJogador == "") {

  } else {

    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${nomeJogador}`).then(function (resposta) {
      resposta.json().then(function (data) {

        if (data.player == null) {
          div.innerHTML = "<p class = 'erro'>Nenhum Jogador encontrado</p>"
        } else {
          for (dados of data.player) {
            console.log(dados)
            let divJogador = document.createElement('div')
            divJogador.setAttribute('class', 'jogador')
            let img = document.createElement('p')
            if (dados.strCutout == null) {
              img.setAttribute('class', 'erro')
              img.innerText = "Foto não disponivel"
            } else {
              let imgJogador = document.createElement('img')
              imgJogador.setAttribute('src', dados.strCutout)
              img.appendChild(imgJogador)
            }
            // img.setAttribute('src', dados.strCutout)
            let p = document.createElement('p')
            let esporte = document.createElement('p')
            let time = document.createElement('p')
            p.innerText = dados.strPlayer
            esporte.innerText = `Esporte: ${dados.strSport}`
            if (dados.strTeam != null || dados.strTeam != "") {
              time.innerText = `Time: ${dados.strTeam}`
            } else {
              time.innerText = `Time: Time não encontrado`
            }

            let botao = document.createElement('button')
            botao.innerText = "Saiba Mais +"
            botao.setAttribute('onclick', `jogador(${dados.idPlayer})`)
            divJogador.appendChild(img)
            divJogador.appendChild(p)
            divJogador.appendChild(time)
            divJogador.appendChild(esporte)

            divJogador.appendChild(botao)
            div.appendChild(divJogador)

          }
        }
      })
    })
  }


}

function jogador(id) {
  div.innerHTML = ""
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id}`).then(function (infos) {
    infos.json().then(function (dados) {
      for (player of dados.players) {
        let divPlayer = document.createElement('div')
        divPlayer.setAttribute('class', 'player')
        let nome = document.createElement('h1')
        nome.innerText = player.strPlayer
        let foto = document.createElement('p')
        foto.setAttribute('id', 'img')
        if (player.strThumb != null) {
          let img = document.createElement('img')
          img.setAttribute('src', player.strThumb)
          img.setAttribute('id', 'foto')
          foto.appendChild(img)
        } else {
          foto.setAttribute('class', 'erro')
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


        let textoHis = document.createElement('h1')
        textoHis.innerText = "História"

        let desc = document.createElement('p')

        if (player.strDescriptionEN != null) {
          desc.innerText = player.strDescriptionEN
        } else {
          desc.setAttribute('class', 'erro')
          desc.innerText = "Texto não encotrado"
        }
        let textoGa = document.createElement('h1')
        textoGa.innerText = "Galeria"
        let galeria = document.createElement('div')
        galeria.setAttribute('class', 'galeria')


        if (player.strThumb != null) {
          let uniforme = document.createElement('img')
          uniforme.setAttribute('src', player.strThumb)
          galeria.appendChild(uniforme)
        }
        if (player.strCutout != null) {
          let iconFoto = document.createElement('img')
          iconFoto.setAttribute('src', player.strCutout)
          galeria.appendChild(iconFoto)
        }
        if (player.strRender != null) {
          let render = document.createElement('img')
          render.setAttribute('src', player.strRender)
          galeria.appendChild(render)
        }

        if (player.strFanart1 != null) {
          let fan1 = document.createElement('img')
          fan1.setAttribute('src', player.strFanart1)
          galeria.appendChild(fan1)
        }
        if (player.strFanart2 != null) {
          let fan2 = document.createElement('img')
          fan2.setAttribute('src', player.strFanart2)
          galeria.appendChild(fan2)
        }
        if (player.strFanart3 != null) {
          let fan3 = document.createElement('img')
          fan3.setAttribute('src', player.strFanart3)
          galeria.appendChild(fan3)
        }
        if (player.strFanart4 != null) {
          let fan4 = document.createElement('img')
          fan4.setAttribute('src', player.strFanart4)
          galeria.appendChild(fan4)
        }
        if (player.strBanner != null) {
          let banner = document.createElement('img')
          banner.setAttribute('src', player.strBanner)
          banner.setAttribute('id', 'banner')
          galeria.appendChild(banner)
        }


        let redes = document.createElement('div')
        redes.setAttribute('class', 'redes')

        if (player.strFacebook != "") {
          let facebook = document.createElement('a')
          facebook.setAttribute('href', `https://${player.strFacebook}`)
          facebook.setAttribute('class', 'fa fa-facebook')
          facebook.setAttribute('target', '_blank')
          redes.appendChild(facebook)
        }

        if (player.strInstagram != "") {
          let instagram = document.createElement('a')
          instagram.setAttribute('href', `https://${player.strInstagram}`)
          instagram.setAttribute('class', 'fa fa-instagram')
          instagram.setAttribute('target', '_blank')
          redes.appendChild(instagram)
        }

        if (player.strTwitter != "") {
          let twitter = document.createElement('a')
          twitter.setAttribute('href', `https://${player.strTwitter}`)
          twitter.setAttribute('class', 'fa fa-twitter')
          twitter.setAttribute('target', '_blank')
          redes.appendChild(twitter)
        }
        let loja = document.createElement('div')
        if (player.strKit == null) {

        } else if (player.strKit == "") {

        } else {
          loja.setAttribute('class', 'loja')
          let textoLoja = document.createElement('h1')
          textoLoja.innerText = "Chuteira do Jogador"
          let iframe = document.createElement('iframe')
          iframe.setAttribute('src', `https://www.zoom.com.br/search?q=${player.strKit}`)
          loja.appendChild(textoLoja)
          loja.appendChild(iframe)
        }

        divPlayer.appendChild(nome)
        divPlayer.appendChild(foto)
        divPlayer.appendChild(time)
        divPlayer.appendChild(posição)
        divPlayer.appendChild(altura)
        divPlayer.appendChild(peso)
        divPlayer.appendChild(nascimento)
        divPlayer.appendChild(localNas)
        divPlayer.appendChild(nacionalidade)
        divPlayer.appendChild(textoHis)
        divPlayer.appendChild(desc)
        divPlayer.appendChild(loja)
        divPlayer.appendChild(textoGa)
        divPlayer.appendChild(galeria)
        divPlayer.appendChild(redes)

        div.appendChild(divPlayer)
      }
    })
  })

}