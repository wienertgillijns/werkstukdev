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
	
	


    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
  })
