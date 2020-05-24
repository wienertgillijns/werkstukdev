$(function () {
    //aanmaken van variabelen
    let geselecteerdGenre = [];
    let doelgroepSelect = [];
    fetch('entries.json')//fetchen van objecten
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            optellenGenres(data.items);
            weergaveDoelgroepen();
            weergaveResultaten(data.items);
        })
        .catch(err => {
            // Do something for an error here
        })

//BUTTONS TEXT + COUNT
        //Accumulator (acc)
        // Current Value (cur)
        // Current Index (idx)
        // Source Array (src)

    let optellenGenres = entries => {

        //map creeërt array met waarden (genre-V2) die gereturnd worden
        const gefilterddeEntries = entries.map(entry => {
            return entry['genre-v2'];
        })
        //reduce functie gebruiken voor loopen door arrat en zien het aantal keer deze voorkomt en returnen
        const reducedGenres = gefilterddeEntries.reduce(groupBy, {})
        //Accumulator = teller
        function groupBy(acc, genre) {
            const count = acc[genre] || 0;
            return {
                ...acc,
                [genre]: count + 1
            }
        }
        resultGenre(reducedGenres, entries);
        weergaveDoelgroepen();
    }
        //LOOPEN door alle genres en APPENEN
    let resultGenre = (countedGenres, entries) => {
        //Loopen over object - object.entries -> keys en values
        //Genre[0] bepaalt key, genre[1] bepaalt value
        Object.entries(countedGenres).forEach(genre => {
            $(`#genretags`).append(`<button class='genrebtn genrefilter ${genre[0]}'>${genre[0]} (<span class="count">${genre[1]}</span>)</button>`)
           
           
           
            // //TEST	
            // test('naam genre en aantal', () => {
            //     const text = generateText('Klassiek',7);
            // });
    })



        //key-values 0,1->entries


//GESELECTEERDE OPHALEN


        //ALLE VIDDEOS IN FILTER ZETTEN
        //als genre geslecteerd is wordt css aangepast
        $('.genrefilter').click(function () {
            $(this).toggleClass('selected');
            if ($(this).hasClass('selected')) {
                //als geselecteerd is aan classlist toevoegen
                geselecteerdGenre.push(this.classList[2]);
            } else {
                //splice gebruiken voor methode toe te voegen of eruit te halen en terug te sturen
                //als niet geselecteerd is eruit halen
                geselecteerdGenre.splice(geselecteerdGenre.indexOf(this.classList[2]), 1);
            }
            filterByDoelgroepen(entries);
        })
    
        //als doelgroep geslecteerd is wordt css aangepast
        $('.doelgroepfilter').click(function () {
            $(this).toggleClass('selected');
            if ($(this).hasClass('selected')) {
                //als geselecteerd is aan classlist toevoegen
                doelgroepSelect.push(this.classList[1]);
            } else {
                //als niet geselecteerd is eruit halen
                doelgroepSelect.splice(doelgroepSelect.indexOf(this.classList[1]), 1);
            }
            filterByDoelgroepen(entries);
        });
    }


//FILTEREN


    //FILTEREN VAN DOELGROEPEN
    let filterByDoelgroepen = entries => {
        //const aanmaken voor in entries te filteren naar volwassenen en familie
        const volwassenFilter = entries.filter(entry => entry.category == 'volwassenen');
        const familieFilter = entries.filter(entry => entry.category == 'familie');
        //if statement wanneer de doelgroep volwassen bevat in filter zetten
        if (doelgroepSelect.includes('volwassenen') && doelgroepSelect.length == 1) {
            filterByGenres(volwassenFilter);
        } else if (doelgroepSelect.includes('familie') && doelgroepSelect.length == 1) {
            filterByGenres(familieFilter);
        } else {
            //anders alle entries worden weergegeven
            filterByGenres(entries);
        }
    }

    //FILTEREN VAN GENRES in filterByGenres
    let filterByGenres = resultsGefilterd => {
        const filteredByGenre = [];
        //loopen in geslecteerde resultaten
        resultsGefilterd.forEach(result => {
        //loopen in geslecteerde resultaten van genres
        geselecteerdGenre.forEach(selectedGenre => {
            if (result['genre-v2'] == selectedGenre) {
                    filteredByGenre.push(result);
                }
            })
        });
        //zetten in functie weergaveResultaten die later gaat gebruikt worden
        weergaveResultaten(filteredByGenre);
    }



//RESULTATEN WEERGEVEN

    let weergaveResultaten = results =>{
        let age;
       
        // $('#jsonarticles').append(entries);
        //leegmaken articles
        $('#jsonarticles').empty();
        results.forEach(result=>{
            if(result.age === undefined){
                age = '';
            }else {
                age = '<div id="ageVideo">'+ result.age + '</div>';   
            }
            //appenden naar html met loop
            $('#jsonarticles').append('<section class="apartevideo"><section class="bovendeel"><div class="genreVideo">' + result.genre + '</div>'+ age + '<img class="foto" src="' + result.thumbnail.url + '"></section><article class="infovideo"><h2 class="naamVideo">' + result.name + '</h2><p class="locatieVideo">' + result.excerpt + '</p><p class="opgenomenVideo">'+ result['recorded-at']  + '</p><p class="duratieVideo">'+ result['video-length'] +'</p></article></section>');
            
            
            // //TEST	
            // test('append age en naam', () => {
            //     const text = generateText(19,'Klassiek concert');
            // });
            // })

        })

        
    }
    
 });

 //UPDATEN BUTTONS
let updateCount = reducedGenres =>{
    //Loopen over alle genre tags -> '.genrebtn'
    //Voor elke .genrebtn .count -> .text()
        //Verander de tekst in de tags van het vorige aantal naar het huidige aantal
        Object.entries(reducedGenres).forEach(genre => {
            $(`.genrebtn ${genre[0]} .count`).text(`${genre[1]}`);

        });
}

//search
// var searchword = document.getElementById("searchengine").textContent;
// console.log(searchword);

function zoekenNaarInput(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("inputValue").value;
    
    // Displaying the value
    alert(inputVal);
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


//W3schools search:
// Declare variables
// var input, filter, ul, li, a, i, txtValue;
// input = document.getElementById('myInput');
// filter = input.value.toUpperCase();
// ul = document.getElementById("myUL");
// li = ul.getElementsByTagName('li');

// // Loop through all list items, and hide those who don't match the search query
// for (i = 0; i < li.length; i++) {
//   a = li[i].getElementsByTagName("a")[0];
//   txtValue = a.textContent || a.innerText;
//   if (txtValue.toUpperCase().indexOf(filter) > -1) {
//     li[i].style.display = "";
//   } else {
//     li[i].style.display = "none";
//   }
// }
// }