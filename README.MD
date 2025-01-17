# Development 4: Opdracht Werkstuk

## Short
Podiumaanhuis.be is a new website that offers full video's of theater pieces. It's created very quickly using Webflow, a  very simple website creating platform. Now the organisation wants to recreate the app from scratch, using HTML, CSS and Javascript.

One feature is the option to filter the video entries based on genres and audience. Using the JSON fetch the entries, show them on the page, and recreate the filter like it is presented on podiumaanhuis.be.

## Requirements
- Write out your approach in the readme.md file. Do a functional analysis of the existing app. Plan your data, functions and the flow of your app.
- It must work. This is the most important requirement. Don't worry too much about clean code or functional programming in the beginning. Create the app, and iterate.
- Push your iterations to github.
- Try to make your code as functional & pure as possible.
- Try to avoid side effects as much as possible.
- Write tests for at least 2 functions
- Show the result on the webpage
- COMMENTS COMMENTS COMMENTS

## Resources
https://www.podiumaanhuis.be/

https://github.com/pmcp/ehbdev4werkstuk

https://docs.google.com/presentation/d/1tlhfJPTmw0MP4kfKSdszo4bUSKwG9xRcuSmzhbkiNaw/edit?usp=sharing

 




## Verslag Wienert Gillijns
- Hallo, eerst en vooral wil ik je van harte welkom heten.
Mijn werkstuk heb ik in stapjes aangepakt, hieronder zal je dan ook alles kunnen raadplegen.
De back-end is voor mij een enorme uitdaging, bij deze opdracht ben ik dus verschillende keer uitgedaagd geweest met verschillende problemen. Ik heb een aantal eufories gekregen omdat ik verschillende dingen heb kunnen realiseren waarvan ik nooit had gedacht dit mogelijk zou zijn voor mij ;).

Ik heb het werkstuk opgeload naar mijn Github. Zo kan ik maar ook u de verschillende commits zien hoe ik er juist aan ben begonnen. Sommige commits bevatten vele codes, dit kwam echter omdat ik het vergeten was en zo in de flow zat :)


Om te starten heb ik de volledige pagina van Podium Aan Huis nagebouwd in html en css. Dit was blijkbaar geen must maar ik wou voor mezelf en voor u een wauw-effect creeëren. Dit liet me een enorme motivatie zijn tijdens het maken van het werkstuk.
De website is dan ook responsive, je kan op de videos hoveren en nog meerdere details die ik hier in heb verwerkt die je zelf kan ontdekken! :)

Na ik alles had opgebouwd heb Ik eerst een voorbeeld videosectie gemaakt, hier heb ik classes aan gegeven zodat ik achteraf ik javascript dit makkelijk kan toepassen.

Na veel opzoekingswerk is het mij gelukt om de data op een juiste manier te fetchen, ik kreeg over de 100 items terug, ik wist dat dit de basis was maar was wel al zeer blij dat dit me volledig zelf gelukt is :)
Het was even zoeken maar uiteindelijk kon ik wel in een array de data eruit halen, ik kreeg de naam te zien, minimumleeftijd, locatie, duratie en nog veel meer. Dit zag ik echter in de console log, na wa zoeken is het mij ook gelukt om de data in de html te zetten aan de hand van document.getElementById, ik heb dit eerst geprobeerd adhv te appenden maar dat was me zo niet gelukt. (als je in de commits gaat dan kun je de foutieve lijnen code zien in bijschrift. Zo kon ik ook mijn progressie zien en besefte ik dat ik al veel had bijgeleerd tot nu toe.

De volgende stap was een loop maken zodat telkens de videos werden toegevoegd. Eerst ging hij loopen in hetzelfde object en zag ik het laatste in de array, ik was al goed bezig maar dit was toch nog niet het verwachte resultaat. Uiteindelijk is het me toch gelukt om telkens een nieuw object aan te maken voor elke video adhv een loop.

Ik zag ook dat er bij heel wat elementen  vaak "Undefined" staat. Hier waren geen waardes voor en op de echte website werd dan de container verborgen. Aangezien het element niet in html staat maar in javascript geschreven, kon ik dit niet met "document.getElementById("").style.display = "none";" oplossen. Ik heb dus voor iedere array een loop in de loop van de videos moeten zetten om die undefined op te zoeken en eruit te halen. And it worked!

De button voor meer videos te laden is toegevoegd maar werkt nog niet helemaal. Ik heb besloten om dit eventjes op kant te schuiven en mij te concentreren op het filteren van de video's.


Ik heb eerst geprobeerd om een for loop te maken en telkens het aangegeven genre op te vragen en weer te geven in de console.log, aan de hand van deze methode wist ik ook hoeveel videos dit genre bevatten zodat ik dit in de button tussen de haakjes kan weergeven. DIt is me gelukt en heb ik gemaakt voor elk genre. Nu zie je op de pagina bij elk genre het aantal videos staan :)

Na alles even opnieuw te bekijken met behulp van de docent wist ik meteen hoe ik dit eindwerk anders moest aanpakken om de filter volledig te laten werken, ik kon vele code hergebruiken wat een enorme meerwaarde heeft betekend. Het filteren is gelukt. Heb ook geprobeerd om de pagination in orde te brengen, in de update count zit een klein foutje en de search werkte niet volledig. De code staat tussen //.

Ik heb heel wat tekst in // geschreven zodat de structuur stees goed zag en goed kon reflecteren aan de hand van het document dat we samen hebben opgesteld of ik nog stees in de juiste richting bezig was.






## Basis die we hebben gemaakt
Werkstuk Development
Data ophalen uit json file en dit moet weergegeven worden in de html. Er moet ook kunnen gefilterd worden op basis van genre en  doelgroep.


Structuur voor filteren video’s
	Tijdens opstarten site
Data Ophalen (fetchen)
fetch('entries.json')
        .then(response => {
            return response.json()
        })
        .then(data => {


Loopen door aantal videos
var arrayLength = data["items"].length;
deze lengte gebruiken om te loopen door alle videos


Videos met alle informatie toevoegen aan array
array.push(video);
met push werken
Nog geen buttons aangetikt -> quantiteit staat op 0 (Niets wordt weergegeven, voorlopig)
met slice werken?

Zodra er een button wordt aangeklikt 
Ophalen welk genre er is aangetikt
data["items"][i]["genre-v2"]
maak een array met enkel de geselecteerde genres (selectGenre)
- maak array met video's die mogen getoond worden:
- loop door array met videos

Loopen in array door alle genres
Zoeken naar het gewenste genre
	if (data["items"][i]["genre-v2"] === volwassen) {

                    data["items"][i]["genre-v2"] = “'';

                } else {
                    data["items"][i]["genre-v2"] = '<p id="opgenomenVideo">' + getOpgenomenVideo + '</p>';
}

Die video van dat genre moet worden opgehaald
(loopen door alle videos en wanneer het dat genre tegenkomt dan moet hij die array ophalen en in html zetten) 

Videos worden toegevoegd aan andere array
met push werken


Deze array komt in html te staan
 var loopAparteVideos = document.getElementById("jsonarticles");
                loopAparteVideos.innerHTML = (ARRAY);






Structuur voor buttons 
	Naam genre + hoeveelheid genre in button
Data Ophalen (fetchen)
fetch('entries.json')
        .then(response => {
            return response.json()
        })
        .then(data => {

Loopen door alle genres (genre-v2)
Alle verschillende genres in een array zetten
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// usage example:
var a = [ARRAY];
var unique = a.filter( onlyUnique );
Loopen door alle genres(genre-V2)
Aantal per genre in array zetten
if (data["items"][i]["genre-v2"]; === "circus") {
                    countCircus++;
}
https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates


Waardes in array worden in button naast de naam gezet tussen ()
document.getElementById(button).innerHTML = genre + " (" + countGenre + ")";



