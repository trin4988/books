//her skulle jeg forstille at tage fat i div elementet med 
const fbooks = document.querySelector(".favbooks")
//her laver jeg et arry i et arry for at danne min liste med indhold. 
const books = [ 
["ACourtOfThornsAndRoses.jpg", "A court of thorns and roses series", "Sarah J Maas", "A Court of Thorns and Roses er en fantastisk fantasy om en ung jægers kamp for at bryde en ældgammel forbandelse.Feyre er på jagt, da hun i skoven ser en hjort jaget af en ulv. Hun slår ulven ihjel, og tager byttet med for at brødføde sin familie. Men ulven var ikke blot en ulv, og Feyre, må betale en dyr pris for dens død. Den uvidende Feyre har slået en fe ihjel, og som straf tages hun til fange af en mand, hvis ansigt er gemt væk bag en ædelstensmaske. Langsomt opdager hun, at han bærer på en dyb hemmelighed og at feernes verden er fyldt med farer. Feyres første frygt forandres til kærlighed, og hun må kæmpe en farefuld kamp for at bryde Tamlins ældgamle forbandelse eller miste ham for evigt Court of Thorns and Roses er en gribende og eventyrlig fortælling i et magisk univers, som kun den mesterlige Sarah J. Maas kan fremmane."],
["HandmaidsTale.jpeg", "The Handmaid's Tal", "Margaret Atwood", "Offred har kun en funktion i den totalitære republik Gilead: at føde børn, der kan videreføre befolkningen. Hvis hun afviger fra sin påbudte rolle, vil hun - ligesom oprørere - blive hængt eller sendt væk fra Republikkens sikkerhed for at dø langsomt af radioaktiv stråling. The Handmaid's Tale følger Offreds tilværelse som konkubine og rugemaskine i et dystopisk fremtidsunivers, hvor frugtbare kvinder ingen frihed har. Fanget af sin tiltrækning til to mænd, der begge kan afgøre hendes fremtid, længes Offred tilbage til tiden før Gilead, hvor hun stadig boede sammen med sin lille datter. The Handmaid's Tale er en stærk, vittig og indsigtsfuld fremtidsfortælling, der i 2017 blev adapteret til en populær amerikansk tv-serie."],
["HisDarkMaterials.jpeg", "His Dark Materials", "Philip Pullman", "His Dark Materials serien indeholder hele Philip Pullmans betagende trilogi om pigen Lyra og drengen Wills færd gennem parallelle verdener.Trilogien handler om de to børn Lyra og Will, som kommer på en farlig rejse gennem hjemsøgte verdener. Undervejs møder de hekse, armerede bjørne, faldne engle, og sjæleædende spøgelser. Og til sidst vil både de levende og de dødes skæbne afhænge af dem.His Dark Materials er navnet på Philip Pullmans tryllebindende trilogi, som består af bøgerne The Golden Compass, The Subtle Knife og The Amber Spyglass. I dette sæt får du alle tre bøger, som har bjergtaget læsere i over tyve år, og som har vundet et hav af store litteraturpriser og udmærkelser."],
["MidnightSun.jpg", "Midnight sun", "Stephenie Meyer", "I Twilight Midnatssol fortæller Stephenie Meyer den episke kærlighedshistorie mellem Bella og Edward ud fra Edwards perspektiv som vampyr splittet mellem blodtørst og kærlighed. Vi kender indtil nu kun Edward Cullen og Bella Swans stormfulde kærlighedshistorie fra Bellas fortælling, men hvordan oplevede Edward som vampyr at blive inderligt forelsket i et menneske? Hvordan kunne han balancere sin sult efter blod og kærlige hengivenhed til hans udkårne Bella, der kunne koste hende livet? Det giver Stephenie Meyer endelig svar på i Twilight Midnatssol Twilight Midnatssol giver et fascinerende, skræmmende og mørkere indblik i Edwards indre kamp mellem at være vampyr og forelsket samt hans dystre fortid."],
["TheGirlYouLeftBehind.jpeg", "The Girl You Left Behind", "Jojo Moyes", "Vi befinder os i Frankrig, år 1916. Sophie Lefevre skal sørge for at holde sin familie i sikkerhed, mens hendes elskede mand Edouard kæmper i fronten. Da tyske officerer kræver behandling på hendes hotel, begynder tingene at smildre. Et portræt af Sophie, malet af Edouard, kommer til at få stor betydning - især for eftertiden. Jojo Moyes står bag The Girl You Left Behind, der handler om fortid, nutid og fremtid. Næsten et århundrede efter Sophies levetid, bliver hendes portræt foræret til en kvinde i bryllupsgave. Nu er det på tide at finde ud af portrættets historie. The Girl You Left Behind handler om at kæmpe for kærligheden - uanset prisen."],
];

//den her funktion henter indholdet fra mine arrays oven over
//og så tilføjer den indhold til min class hvor den skaber nedståene html 
books.forEach(function(book){
    fbooks.innerHTML += ` 
    <img loading="lazy" src="./asset/img/${book[0]}" alt="">
    <div>
    <h2 class="title">${book[1]}</h2>
    <h3 class="author">${book[2]}</h3>
    <p class="info">${book[3]}</p>
    </div>
    `;
})
//det er ikke det skukkeste jeg har lavet men lidt får du da ;) 


