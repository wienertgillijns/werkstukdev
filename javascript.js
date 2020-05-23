$(function () {
    let selectedGenres = [];
    let selectedDoelgroep = [];
    fetch('entries.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            countGenres(data.items);
            showDoelgroepen();
            showResults(data.items);
            
        })
        .catch(err => {
            // Do something for an error here
        })



    let countGenres = entries => {
        
        const filteredEntries = entries.map(entry => {
            return entry['genre-v2']
        })
        const reducedGenres = filteredEntries.reduce(groupBy, {})

        function groupBy(acc, genre) {
            const count = acc[genre] || 0;
            return {
                ...acc,
                [genre]: count + 1
            }
        }
        showGenres(reducedGenres, entries);
        showDoelgroepen();
        
    }
    let showGenres = (countedGenres, entries) => {
        //Loopen over object - keys en values
        //Genre[0] bepaalt key, genre[1] bepaalt value
        Object.entries(countedGenres).forEach(genre => {
            $(`#genretags`).append(`<button class='genrebtn genrefilter ${genre[0]}'>${genre[0]} (<span class="count">${genre[1]}</span>)</button>`)
        })
        //key-values 0,1->entries
        $('.genrefilter').click(function () {
            $(this).toggleClass('selected');
            if ($(this).hasClass('selected')) {
                selectedGenres.push(this.classList[2]);
            } else {
                selectedGenres.splice(selectedGenres.indexOf(this.classList[2]), 1);
            }
            filterByDoelgroepen(entries);
        })
        $('.doelgroepfilter').click(function () {
            $(this).toggleClass('selected');
            if ($(this).hasClass('selected')) {
                selectedDoelgroep.push(this.classList[1]);
            } else {
                selectedDoelgroep.splice(selectedDoelgroep.indexOf(this.classList[1]), 1);
            }
            filterByDoelgroepen(entries);
        })
    }
    
    let filterByDoelgroepen = entries => {
        const filterByVolwassenen = entries.filter(entry => entry.category == 'volwassenen');
        const filterByFamilie = entries.filter(entry => entry.category == 'familie');

        if (selectedDoelgroep.includes('volwassenen') && selectedDoelgroep.length == 1) {
            filterByGenres(filterByVolwassenen);
        } else if (selectedDoelgroep.includes('familie') && selectedDoelgroep.length == 1) {
            filterByGenres(filterByFamilie);
        } else {
            filterByGenres(entries);
        }
    }

    let filterByGenres = filteredResults => {
        const filteredByGenre = [];
        filteredResults.forEach(result => {
            selectedGenres.forEach(selectedGenre => {
                if (result['genre-v2'] == selectedGenre) {
                    filteredByGenre.push(result);
                }
            })
        });
        showResults(filteredByGenre);
    }

    let showResults = results =>{
        let age;
       
        // $('#jsonarticles').append(entries);
        $('#jsonarticles').empty();
        results.forEach(result=>{
            if(result.age === undefined){
                age = '';
            }else {
                age = '<div id="ageVideo">'+ result.age + '</div>';   
            }
            $('#jsonarticles').append('<section class="apartevideo"><section class="bovendeel"><div class="genreVideo">' + result.genre + '</div>'+ age + '<img class="foto" src="' + result.thumbnail.url + '"></section><article class="infovideo"><h2 class="naamVideo">' + result.name + '</h2><p class="locatieVideo">' + result.excerpt + '</p><p class="opgenomenVideo">'+ result['recorded-at']  + '</p><p class="duratieVideo">'+ result['video-length'] +'</p></article></section>');
            

        })

        
    }
    
 });
let updateCount = reducedGenres =>{
    //Loopen over alle genre tags -> '.genrebtn'
    //Voor elke .genrebtn .count -> .text()
        //Verander de tekst in de tags van het vorige aantal naar het huidige aantal
        Object.entries(genres).forEach(genre => {
            $(`.genrebtn ${genre[0]} .count`).text(`${genre[1]}`);

        });
}



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















// function clickLiteratuur() {
//     console.log("click");

//     var zoekGenres = document.getElementById("genreVideo").innerHTML;
//     const array = [];
//     for (var i = 0; i < 100; i++) {

//         if (data["items"][i]["genre-v2"] === "literatuur") {
//             array.push(data['items'][i])
//         }
//     }
//     // nodige properties aanpassen in de array.push()

//     // nu alle literaturen  --> innerHTML leeg maken en opnieuw vullen 
//     for(b=0;b<array.length;b++) {

//         // vul hier je innerHTML 
//         // vb = document.getElementById("testId").innerHTML += <p>${array.naam}</p><br>;
//     }
// }

// document.getElementById("literatuur").addEventListener("click", clickLiteratuur);

// var genresVideos = document.getElementById("genreVideo");
// console.log(genresVideos);



// console.log(data["items"][i]["genre-v2"]);

// var testgenre = data["items"][i]["genre-v2"];

// const array = tezy = array.filter((concert) => testgenre.genre === 'dans');
// console.log(concertarray);


// //filteren
// let countLiteratuur = 0;
// let countComedy = 0;
// let countCircus = 0;
// let countDans = 0;
// let countFigurentheater = 0;
// let countMultidisciplinair = 0;
// let countTheater = 0;
// let countOpera = 0;
// let countMuziektheater = 0;
// let countConcert = 0;

// for (let i = 0; i < arrayLength; i++) {
//     var genre = data["items"][i]["genre-v2"];

//     if (genre === "literatuur") {
//         countLiteratuur++;
//     }
//     if (genre === "comedy") {
//         countComedy++;
//     }
//     if (genre === "circus") {
//         countCircus++;
//     }
//     if (genre === "dans") {
//         countDans++;
//     }
//     if (genre === "figurentheater") {
//         countFigurentheater++;
//     }
//     if (genre === "multidisciplinair") {
//         countMultidisciplinair++;
//     }
//     if (genre === "theater") {
//         countTheater++;
//     }
//     if (genre === "opera") {
//         countOpera++;
//     }
//     if (genre === "muziektheater") {
//         countMuziektheater++;
//     }
//     if (genre === "concert") {
//         countConcert++;
//     }
// }




// //filteren
// document.getElementById("literatuur").addEventListener("click", clickLiteratuur);

// function clickLiteratuur() {
//     console.log("click");

//     var zoekGenres = document.getElementById("genreVideo").innerHTML;
//     for (var i = 0; i < 100; i++) {

//         if (data["items"][i]["genre-v2"] === "literatuur") {
//             console.log("ja");

//         }else {
//             console.log("nee");


//         }

//     }
// }




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





// document.getElementById("literatuur").innerHTML = "literatuur" + " (" + countLiteratuur + ")";
// document.getElementById("comedy").innerHTML = "Comedy" + " (" + countComedy + ")";
// document.getElementById("circus").innerHTML = "Circus" + " (" + countCircus + ")";
// document.getElementById("dans").innerHTML = "Dans" + " (" + countDans + ")";
// document.getElementById("figurentheater").innerHTML = "Figurentheater" + " (" + countFigurentheater + ")";
// document.getElementById("multidisciplinair").innerHTML = "Multidisciplinair" + " (" + countMultidisciplinair + ")";
// document.getElementById("theater").innerHTML = "Theater" + " (" + countTheater + ")";
// document.getElementById("opera").innerHTML = "Opera" + " (" + countOpera + ")";
// document.getElementById("muziektheater").innerHTML = "Muziektheater" + " (" + countMuziektheater + ")";
// document.getElementById("concert").innerHTML = "Concert" + " (" + countConcert + ")";




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




// //array voor data ui de JSON file te halen
// var arrayLength = data["items"].length;



// //videosectie weergeven
// var elkevideo = '';
// for (var i = 0; i < arrayLength; i++) {

//     //loop voor undefined eruit te halen
//     var getAge = data["items"][i]["age"];
//     var loopAgeNormal = '<div id="ageVideo">' + getAge + '</div>';
//     var loopAgeUndefined = '';
//     if (getAge === undefined) {


//         getAge = loopAgeUndefined;
//     } else {
//         getAge = loopAgeNormal;
//     }



//     var getlocatieVideo = data["items"][i]["excerpt"];
//     var loopLocatieNormal = '<p id="locatieVideo">' + getlocatieVideo + '</p>';
//     var loopLocatieUndefined = '';
//     if (getlocatieVideo === undefined) {


//         getlocatieVideo = loopLocatieUndefined;
//     } else {
//         getlocatieVideo = loopLocatieNormal;
//     }

//     var getOpgenomenVideo = data["items"][i]["recorded-at"];
//     var loopOpgegomenNormal = '<p id="opgenomenVideo">' + getOpgenomenVideo + '</p>';
//     var loopOpgegomenUndefined = '';
//     if (getOpgenomenVideo === undefined) {


//         getOpgenomenVideo = loopOpgegomenUndefined;



//     } else {
//         getOpgenomenVideo = loopOpgegomenNormal;
//     }

//     var getDuratieVideo = data["items"][i]["video-length"];
//     var loopDuratieNormal = '<p id="duratieVideo">' + getDuratieVideo + '</p>';
//     var loopDuratieUndefined = '';
//     if (getDuratieVideo === undefined) {


//         getDuratieVideo = loopDuratieUndefined;
//     } else {
//         getDuratieVideo = loopDuratieNormal;
//     }

//     elkevideo += '<section class="apartevideo videosapart" id="filterVideos"><section class="bovendeel"><div class="genreVideo">' + data["items"][i]["genre-v2"] + '</div>' + getAge + '<img class="foto" src="' + data["items"][i]["thumbnail"]["url"] + '"></section><article class="infovideo"><h2 id="naamVideo">' + data["items"][i]["name"] + '</h2>' + '<p id="locatieVideo">' + getlocatieVideo + getOpgenomenVideo + getDuratieVideo + '</article></section>';

//     var loopAparteVideos = document.getElementById("jsonarticles");
//     loopAparteVideos.innerHTML = elkevideo;