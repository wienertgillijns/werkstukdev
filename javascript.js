fetch('entries.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
	// Work with JSON data here
    //items van 0 eruit halen
  
   





//     let getNaamVideo =  data["items"]["1"]["name"];
//   $('section.videos').append(`
//   <section class="apartevideo">
//         <div id="genreVideo"></div>
  
//          <article class="infovideo">
//              <h2 id="naamVideo">${getNaamVideo}"</h2>
//             <p id="locatieVideo"></p>
//             <p id="duratieVideo"></p>
//         </article>
//     </section>
//       `);




var arrayLength = data["items"].length;
for (var i = 0; i < arrayLength; i++) {
    console.log(data["items"][i]);
    //Do something

    var naam = data["items"][i]["name"];
    var genre = data["items"][i]["genre-v2"];
    var plaats = data["items"][i]["excerpt"];
    var duur = data["items"][i]["video-length"];
    
    //items in html zetten
    document.getElementById("naamVideo").innerHTML = naam;
    document.getElementById("genreVideo").innerHTML = genre;
    document.getElementById("locatieVideo").innerHTML = plaats;
    document.getElementById("duratieVideo").innerHTML = duur;




    

//     let getNaamVideo =  data["items"][i]["name"];
//   $('section.videos').append(`
//   <section class="apartevideo">
//         <div id="genreVideo"></div>
  
//          <article class="infovideo">
//              <h2 id="naamVideo">${getNaamVideo}"</h2>
//             <p id="locatieVideo"></p>
//             <p id="duratieVideo"></p>
//         </article>
//     </section>
//       `);


    // console.log(data)
    // console.log(naam)
    // console.log(genre)
    // console.log(plaats)
    // console.log(duur)

}



// for (int i=0; i<data.size(); i++) {
//     System.out.println(data.get(i));
// }



  })
  .catch(err => {
    // Do something for an error here
  })


