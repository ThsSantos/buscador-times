document.querySelector('button').addEventListener('click', busca)
const div = document.querySelector('.result')



function busca() {
  const nomeTime = document.querySelector('input').value
  div.innerHTML = ""

  if (nomeTime == "") {

  } else {

    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${nomeTime}`).then(function (resposta) {
      resposta.json().then(function (data) {
        // console.log(data)

        for (dados of data.teams) {
          console.log(dados)
          let divTime = document.createElement('div')
          divTime.setAttribute('class', 'time')
          let img = document.createElement('img')
          img.setAttribute('src', dados.strTeamLogo)
          let p = document.createElement('p')
          p.innerText = dados.strTeam
          let botao = document.createElement('button')
          botao.innerText = "Saiba Mais +"
          botao.setAttribute('onclick', `time(${dados.idTeam})`)
          // console.log(dados.strTeam)
          divTime.appendChild(img)
          divTime.appendChild(p)
          divTime.appendChild(botao)
          div.appendChild(divTime)

        }

      })
    })
  }


}

