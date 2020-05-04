$(function () {

    fetch('entries.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            //items van 0 eruit halen



            //array voor data ui de JSON file te halen
            var arrayLength = data["items"].length;



            //videosectie weergeven
            var elkevideo = '';
            for (var i = 0; i < arrayLength; i++) {


                //loop voor undefined eruit te halen
                var getAge = data["items"][i]["age"];
                var loopAgeNormal = '<div id="ageVideo">' + getAge + '</div>';
                var loopAgeUndefined = '';
                if (getAge === undefined) {


                    getAge = loopAgeUndefined;
                } else {
                    getAge = loopAgeNormal;
                }

                var getlocatieVideo = data["items"][i]["excerpt"];
                var loopLocatieNormal = '<p id="locatieVideo">' + getlocatieVideo + '</p>';
                var loopLocatieUndefined = '';
                if (getlocatieVideo === undefined) {


                    getlocatieVideo = loopLocatieUndefined;
                } else {
                    getlocatieVideo = loopLocatieNormal;
                }

                var getOpgenomenVideo = data["items"][i]["recorded-at"];
                var loopOpgegomenNormal = '<p id="opgenomenVideo">' + getOpgenomenVideo + '</p>';
                var loopOpgegomenUndefined = '';
                if (getOpgenomenVideo === undefined) {


                    getOpgenomenVideo = loopOpgegomenUndefined;



                } else {
                    getOpgenomenVideo = loopOpgegomenNormal;
                }

                var getDuratieVideo = data["items"][i]["video-length"];
                var loopDuratieNormal = '<p id="duratieVideo">' + getDuratieVideo + '</p>';
                var loopDuratieUndefined = '';
                if (getDuratieVideo === undefined) {


                    getDuratieVideo = loopDuratieUndefined;
                } else {
                    getDuratieVideo = loopDuratieNormal;
                }

                elkevideo += '<section class="apartevideo videosapart" id="filterVideos"><section class="bovendeel"><div id="genreVideo">' + data["items"][i]["genre-v2"] + '</div>' + getAge + '<img class="foto" src="' + data["items"][i]["thumbnail"]["url"] + '"></section><article class="infovideo"><h2 id="naamVideo">' + data["items"][i]["name"] + '</h2>' + '<p id="locatieVideo">' + getlocatieVideo + getOpgenomenVideo + getDuratieVideo + '</article></section>';

                var loopAparteVideos = document.getElementById("jsonarticles");
                loopAparteVideos.innerHTML = elkevideo;







            }












            // console.log(data["items"][i]["genre-v2"]);

            // var testgenre = data["items"][i]["genre-v2"];

            // const array = testgenre;
            // const concertarray = array.filter((concert) => testgenre.genre === 'dans');
            // console.log(concertarray);


            //filteren
            var countLiteratuur = 0;
            var countComedy = 0;
            var countCircus = 0;
            var countDans = 0;
            var countFigurentheater = 0;
            var countMultidisciplinair = 0;
            var countTheater = 0;
            var countOpera = 0;
            var countMuziektheater = 0;
            var countConcert = 0;

            for (var i = 0; i < arrayLength; i++) {
                var genre = data["items"][i]["genre-v2"];

                if (genre === "literatuur") {
                    countLiteratuur++;
                }
                if (genre === "comedy") {
                    countComedy++;
                }
                if (genre === "circus") {
                    countCircus++;
                }
                if (genre === "dans") {
                    countDans++;
                }
                if (genre === "figurentheater") {
                    countFigurentheater++;
                }
                if (genre === "multidisciplinair") {
                    countMultidisciplinair++;
                }
                if (genre === "theater") {
                    countTheater++;
                }
                if (genre === "opera") {
                    countOpera++;
                }
                if (genre === "muziektheater") {
                    countMuziektheater++;
                }
                if (genre === "concert") {
                    countConcert++;
                }
            }

            document.getElementById("literatuur").innerHTML = "literatuur" + " (" + countLiteratuur + ")";
            document.getElementById("comedy").innerHTML = "Comedy" + " (" + countComedy + ")";
            document.getElementById("circus").innerHTML = "Circus" + " (" + countCircus + ")";
            document.getElementById("dans").innerHTML = "Dans" + " (" + countDans + ")";
            document.getElementById("figurentheater").innerHTML = "Figurentheater" + " (" + countFigurentheater + ")";
            document.getElementById("multidisciplinair").innerHTML = "Multidisciplinair" + " (" + countMultidisciplinair + ")";
            document.getElementById("theater").innerHTML = "Theater" + " (" + countTheater + ")";
            document.getElementById("opera").innerHTML = "Opera" + " (" + countOpera + ")";
            document.getElementById("muziektheater").innerHTML = "Muziektheater" + " (" + countMuziektheater + ")";
            document.getElementById("concert").innerHTML = "Concert" + " (" + countConcert + ")";




            // //filteren
            // document.getElementById("literatuur").addEventListener("click", clickLiteratuur);

            // function clickLiteratuur() {
            //     console.log("click");
            //     for (var i = 0; i < arrayLength; i++) {
            //         var genre = data["items"][i]["genre-v2"];
            //         if (genre === "literatuur") {
            //             console.log("literatuur");

            //             document.getElementById("filterVideos").style.display = "none";


            //         }

            //     }
            // }





            // //filteren
            // for (var i = 0; i < arrayLength; i++) {
            //     var genre = data["items"][i]["genre-v2"];
            //     if (genre === "circus"){
            //         console.log("ja");
            //     }

            // }




//filteren
document.getElementById("literatuur").addEventListener("click", clickLiteratuur);

function clickLiteratuur() {
    console.log("click");
    
    var zoekGenres = document.getElementById("genreVideo").innerHTML;
    for (var i = 0; i < 100; i++) {
        
        if (data["items"][i]["genre-v2"] === "literatuur") {
            console.log("ja");

        }else {
            console.log("nee");

           
        }

    }
}

        })
        .catch(err => {
            // Do something for an error here
        })


        

    // var genresVideos = document.getElementById("genreVideo");
    // console.log(genresVideos);



});

// function myfunction() {
//     if(data["items"][i]["category"] === "volwassenen"){
//         console.log("Ja")
//     } 
//     console.log("Nee")

//   }

// for (var i = 0; i < arrayLength; i++) {
//}


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




// console.log(data["items"][i]);
//Do something



//data eruit halen
// var naam = data["items"][i]["name"];
// var genre = data["items"][i]["genre-v2"];
// var plaats = data["items"][i]["excerpt"];
// var duur = data["items"][i]["video-length"];
// var opgenomen = data["items"][i]["recorded-at"];
// var leeftijd = data["items"][i]["age"];

//items in html zetten
// document.getElementById("naamVideo").innerHTML = naam;
// document.getElementById("genreVideo").innerHTML = genre;
// document.getElementById("locatieVideo").innerHTML = plaats;
// document.getElementById("duratieVideo").innerHTML = duur;






// var url = data["items"][9]["link-to-video"]["url"];


// for (var i = 0; i < arrayLength; i++) {
//     var filterConcert = data["items"][i]["genre-v2"];




//  if (filterConcert === "concert"){


//         console.log("count");





//  }else {

//  }


//  document.getElementById("TESTTTT").innerHTML = count;

// }


//  var array = data["items"][i]["category"];
// var volwassenen = array.filter((familieVideos) => familieVideos.data["items"][i]["category"] ==='familie');
// console.log(volwassenen);

// //Bekijk meer button
// $(".apartevideo").slice(0, 1).show();

// $("#bekijkMeer").click(function (e) { // click event for load more

//     e.preventDefault();
//     $(".apartevideo:hidden").slice(0, 10).show(); // selecteren van 10 volgende elementen en hun zichtbaar maken
//     if ($(".apartevideo:hidden").length == 0) { // nakijken of er verborgen elementen zijn
//         $("#bekijkMeer").text("Geen resultaten meer").addClass("noContent");
//     }
// });



//   $(document).ready(function() {
//     $(".videos").slice(0, 3).show();
//     if ($(".videos:hidden").length != 0) {
//       $("#bekijkMeer").show();
//     }
//     $("#bekijkMeer").on('click', function(e) {
//       e.preventDefault();
//       $(".videos:hidden").slice(0, 6).slideDown();
//       if ($(".videos:hidden").length == 0) {
//         $("#bekijkMeer").fadeOut('slow');
//       }
//     });
// //   });
// $( document ).ready(function() {
//     $(".apartevideo").slice(0, 4).show();

// $("#bekijkMeer").on("click", function(e){
//   e.preventDefault();
//   $(".apartevideo:hidden").slice(0, 4).slideDown();
//   if($(".apartevideo:hidden").length == 0) {
//     $("#bekijkMeer").text("Geen videos meer").addClass("noContent");
//   }
// })
// });