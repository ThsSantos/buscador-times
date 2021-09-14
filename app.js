// const isbn = 9788501091338



fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9788554513566').then(function (resposta) {
  resposta.json().then(function (data) {
    console.log(data)
  })
})