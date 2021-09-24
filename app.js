document.querySelector('button').addEventListener('click', busca)
const div = document.querySelector('.result')

function time(id) {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`).then(function (info) {
    info.json().then(function (club) {
      div.innerHTML = ""

      for (team of club.teams) {
        let divclub = document.createElement('div')
        divclub.setAttribute('class', 'club')
        let titulo = document.createElement('h1')
        titulo.innerText = team.strTeam
        let logo = document.createElement('img')
        logo.setAttribute('src', team.strTeamBadge)
        let liga = document.createElement('p')
        liga.innerText = `Liga: ${team.strLeague}`
        let pais = document.createElement('p')
        pais.innerText = `País: ${team.strCountry}`
        let esporte = document.createElement('p')
        esporte.innerText = `Esporte: ${team.strSport}`
        let nomeEstadio = document.createElement('p')
        if (team.strStadium == "" || team.strStadium == null) {
          nomeEstadio.innerHTML = "Estadio: Não encontrado"
        } else {
          nomeEstadio.innerText = `Estadio: ${team.strStadium}`
        }

        let txtEstadio = document.createElement('p')
        if (team.strStadiumDescription != null || team.strStadiumDescription != "") {
          txtEstadio.innerText = team.strStadiumDescription
        }

        let imgEstadio = document.createElement('p')
        if (team.strStadiumThumb == null) {
          imgEstadio.setAttribute('class', 'erroImg')
          imgEstadio.innerText = "Imagem do estadio não disponivel"
        } else {
          imgEstadio.innerHTML = `<img src= ${team.strStadiumThumb}>`
        }

        let cidade = document.createElement('p')
        if (team.strStadiumLocation == null) {
          cidade.innerText = "Cidade: Não definida"
        } else {
          cidade.innerText = `Cidade: ${team.strStadiumLocation}`
        }

        let estadioCap = document.createElement('p')
        if (team.intStadiumCapacity == null) {
          estadioCap.innerText = "Capacidade: Não definida"
        } else {
          estadioCap.innerText = `Capacidade: ${team.intStadiumCapacity}`
        }

        let inf = document.createElement('p')
        if (team.strDescriptionEN == null) {
          inf.setAttribute('class', 'erroImg')
          inf.innerText = "Texto não encontrado"
        } else {
          inf.innerText = team.strDescriptionEN
        }


        let textoHis = document.createElement('h1')
        textoHis.innerText = "História"

        let textoGaleria = document.createElement('h1')
        textoGaleria.innerText = "Galeria"

        let galeria = document.createElement('div')
        galeria.setAttribute('class', 'galeria')

        galeria.appendChild(logo.cloneNode(true))


        if (team.strTeamJersey != null) {
          let uniforme = document.createElement('img')
          uniforme.setAttribute('src', team.strTeamJersey)
          galeria.appendChild(uniforme)
        }




        if (team.strTeamLogo != null) {
          let logoMarca = document.createElement('img')
          logoMarca.setAttribute('src', team.strTeamLogo)
          logoMarca.setAttribute('id', 'logoMarca')
          galeria.appendChild(logoMarca)
        }


        if (team.strTeamFanart1 != null) {
          let fanart1 = document.createElement('img')
          fanart1.setAttribute('src', team.strTeamFanart1)
          galeria.appendChild(fanart1)
        }

        if (team.strTeamFanart2 != null) {
          let fanart2 = document.createElement('img')
          fanart2.setAttribute('src', team.strTeamFanart2)
          galeria.appendChild(fanart2)
        }

        if (team.strTeamFanart3 != null) {
          let fanart3 = document.createElement('img')
          fanart3.setAttribute('src', team.strTeamFanart3)
          galeria.appendChild(fanart3)
        }

        if (team.strTeamFanart4 != null) {
          let fanart4 = document.createElement('img')
          fanart4.setAttribute('src', team.strTeamFanart4)
          galeria.appendChild(fanart4)
        }

        if (team.strTeamBanner != null) {
          let banner = document.createElement('img')
          banner.setAttribute('src', team.strTeamBanner)
          banner.setAttribute('id', 'banner')
          galeria.appendChild(banner)
        }


        let redes = document.createElement('div')
        redes.setAttribute('class', 'redes')

        if (team.strYoutube != "") {
          let youtube = document.createElement('a')
          youtube.setAttribute('href', `https://${team.strYoutube}`)
          youtube.setAttribute('class', 'fa fa-youtube')
          youtube.setAttribute('target', '_blank')
          redes.appendChild(youtube)
        }

        if (team.strFacebook != "") {
          let facebook = document.createElement('a')
          facebook.setAttribute('href', `https://${team.strFacebook}`)
          facebook.setAttribute('class', 'fa fa-facebook')
          facebook.setAttribute('target', '_blank')
          redes.appendChild(facebook)
        }

        if (team.strInstagram != "") {
          let instagram = document.createElement('a')
          instagram.setAttribute('href', `https://${team.strInstagram}`)
          instagram.setAttribute('class', 'fa fa-instagram')
          instagram.setAttribute('target', '_blank')
          redes.appendChild(instagram)
        }

        if (team.strTwitter != "") {
          let twitter = document.createElement('a')
          twitter.setAttribute('href', `https://${team.strTwitter}`)
          twitter.setAttribute('class', 'fa fa-twitter')
          twitter.setAttribute('target', '_blank')
          redes.appendChild(twitter)
        }

        divclub.appendChild(titulo)
        divclub.appendChild(logo)
        divclub.appendChild(liga)
        divclub.appendChild(esporte)
        divclub.appendChild(pais)
        divclub.appendChild(nomeEstadio)
        divclub.appendChild(cidade)
        divclub.appendChild(estadioCap)
        divclub.appendChild(txtEstadio)
        divclub.appendChild(imgEstadio)
        divclub.appendChild(textoHis)
        divclub.appendChild(inf)
        divclub.appendChild(textoGaleria)
        divclub.appendChild(galeria)
        divclub.appendChild(redes)

        div.appendChild(divclub)


      }

    })
  })
}

function busca() {
  const nomeTime = document.querySelector('input').value
  div.innerHTML = ""

  if (nomeTime == "") {

  } else {

    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${nomeTime}`).then(function (resposta) {
      resposta.json().then(function (data) {
        

        if (data.teams == null) {
          div.innerHTML = "<p class = 'erroImg'>Nenhum time encontrado</p>"
        } else {
          for (dados of data.teams) {
            let divTime = document.createElement('div')
            divTime.setAttribute('class', 'time')
            let img = document.createElement('img')
            img.setAttribute('src', dados.strTeamBadge)
            let p = document.createElement('p')
            let esporte = document.createElement('p')
            let liga = document.createElement('p')
            p.innerText = dados.strTeam
            esporte.innerText = `Esporte: ${dados.strSport}`
            if (dados.strLeague == "") {
              liga.innerText = "Liga: Indefinida"
            } else {
              liga.innerText = `Liga: ${dados.strLeague}`
            }

            let botao = document.createElement('button')
            botao.innerText = "Saiba Mais +"
            botao.setAttribute('onclick', `time(${dados.idTeam})`)
            divTime.appendChild(img)
            divTime.appendChild(p)
            divTime.appendChild(esporte)
            divTime.appendChild(liga)
            divTime.appendChild(botao)
            div.appendChild(divTime)

          }
        }



      })
    })
  }


}

