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
    // console.log(data["items"][i]);
    //Do something



    //data eruit halen
    // var naam = data["items"][i]["name"];
    // var genre = data["items"][i]["genre-v2"];
    // var plaats = data["items"][i]["excerpt"];
    // var duur = data["items"][i]["video-length"];
        // var leeftijd = data["items"][i]["age"];
    
    //items in html zetten
    // document.getElementById("naamVideo").innerHTML = naam;
    // document.getElementById("genreVideo").innerHTML = genre;
    // document.getElementById("locatieVideo").innerHTML = plaats;
    // document.getElementById("duratieVideo").innerHTML = duur;




    



    // loopvideos = "<section>" + data["items"][i]["genre-v2"] + "</section>";
    // document.getElementById("alleVideos").innerHTML = loopvideos;

//probeersel
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










var elkevideo = '';
for (var i = 0; i < arrayLength; i++) {
     var getAge = data["items"][i]["age"];
     
     var loopAgeNormal = '<div id="ageVideo">'+ getAge + '</div>';
     var loopAgeUndefined = '';
     if (getAge === undefined) {
        

        getAge =  loopAgeUndefined;

       

          }else {
            getAge =  loopAgeNormal;
          }
   elkevideo += '<section class="apartevideo"><section class="bovendeel"><div id="genreVideo">'+ data["items"][i]["genre-v2"] + '</div>' + getAge + '<img class="foto" src="'+ data["items"][i]["thumbnail"]["url"] +'"></section><article class="infovideo"><h2 id="naamVideo">'+ data["items"][i]["name"] +'</h2><p id="locatieVideo">'+ data["items"][i]["excerpt"] +'</p><p id="duratieVideo">'+ data["items"][i]["video-length"] +'</p></article></section>';

   

  
 
// var item1 = document.getElementById("ageVideo");
// var x = item1.isEqualNode("undefined");
// document.getElementById("ageVideo").style.display = "none";
// if(data["items"][i]["age"] ===undefined){
// console.log("ja");

// document.getElementById("ageVideos").style.color = "blue";
// }else {
    
//     console.log("nee");
// }


var loopAparteVideos = document.getElementById("test");
loopAparteVideos.innerHTML = elkevideo;    









 
}




// var url = data["items"][9]["link-to-video"]["url"];
console.log(data);


// for (int i=0; i<data.size(); i++) {
//     System.out.println(data.get(i));
// }



  })
  .catch(err => {
    // Do something for an error here
  })




  



