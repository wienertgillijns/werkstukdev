// var request = new XMLHttpRequest()
// request.open('GET', 'entries.json', true)
// request.onload = function() {
// 	var data = JSON.parse(this.response)


//   }
// data = JSON.parse(description);
// console.log(data[1].name)










fetch('entries.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
	// Work with JSON data here
    //items van 0 eruit halen
    var naam = data["items"]["1"]["name"];
    var genre = data["items"]["1"]["genre-v2"];
    var plaats = data["items"]["1"]["excerpt"];
    var duur = data["items"]["1"]["video-length"];
	


    console.log(data)
    console.log(naam)
    console.log(genre)
    console.log(plaats)
    console.log(duur)
  })
  .catch(err => {
    // Do something for an error here
  })
