document.querySelector('button').addEventListener('click', busca)
const div = document.querySelector('.result')

function time(id){
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`).then(function(info){
    info.json().then(function(club){
      console.log(club)
      div.innerHTML = ""

      for(team of club.teams){
        console.log(team)
        let divclub = document.createElement('div')
        divclub.setAttribute('class','club')
        let titulo = document.createElement('p')
        titulo.innerText = team.strTeam
        let logo = document.createElement('img')
        logo.setAttribute('src',team.strTeamBadge)
        let liga = document.createElement('p')
        liga.innerText = `Liga: ${team.strLeague}`
        let esporte = document.createElement('p')
        esporte.innerText = `Esporte: ${team.strSport}`
        let nomeEstadio = document.createElement('p')
        if(team.strStadium == ""){
          nomeEstadio.innerHTML = "Estadio: não encontrado"
        }else{
          nomeEstadio.innerText = `Estadio: ${team.strStadium}`
        }
        
        let txtEstadio = document.createElement('p')
        txtEstadio.innerText = team.strStadiumDescription
        let imgEstadio = document.createElement('p')
        if(team.strStadiumThumb == null){
          imgEstadio.setAttribute('class', 'erroImg')
          imgEstadio.innerText = "Imagem do estadio não disponivel"
        }else{
          imgEstadio.innerHTML = `<img src= ${team.strStadiumThumb}>`
        }
        
        let inf = document.createElement('p')
        inf.innerText = team.strDescriptionEN


        //teste
        divclub.appendChild(titulo)
        divclub.appendChild(logo)
        divclub.appendChild(liga)
        divclub.appendChild(esporte)
        divclub.appendChild(nomeEstadio)
        divclub.appendChild(txtEstadio)
        divclub.appendChild(imgEstadio)
        divclub.appendChild(inf)
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
          if(dados.strLeague == ""){
            liga.innerText = "Liga: Indefinida"
          }else{
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

