document.querySelector('button').addEventListener('click', busca)
const div = document.querySelector('.result')

function time(id) {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`).then(function (info) {
    info.json().then(function (club) {
      console.log(club)
      div.innerHTML = ""

      for (team of club.teams) {
        console.log(team)
        let divclub = document.createElement('div')
        divclub.setAttribute('class', 'club')
        let titulo = document.createElement('p')
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
        if (team.strStadium == "") {
          nomeEstadio.innerHTML = "Estadio: não encontrado"
        } else {
          nomeEstadio.innerText = `Estadio: ${team.strStadium}`
        }

        let txtEstadio = document.createElement('p')
        txtEstadio.innerText = team.strStadiumDescription
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
        inf.innerText = team.strDescriptionEN


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
          galeria.appendChild(logoMarca)
        }


        //'strTeamFanart1', 'strTeamFanart2', 'strTeamFanart3', 'strTeamFanart4', 'strTeamBanner'

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










        //teste
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
        divclub.appendChild(inf)


        divclub.appendChild(galeria)



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
        console.log(data)

        for (dados of data.teams) {
          console.log(dados)
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
          // console.log(dados.strTeam)
          divTime.appendChild(img)
          divTime.appendChild(p)
          divTime.appendChild(esporte)
          divTime.appendChild(liga)
          divTime.appendChild(botao)
          div.appendChild(divTime)

        }

      })
    })
  }


}

