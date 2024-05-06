function onJson(json) {
    console.log('JSON ricevuto');

    const library = document.querySelector('#library-view');
    library.innerHTML = '';

    let num_results = json.info.count;

    for (let i = 0; i < num_results; i++) {
        const doc = json.data[i];
        if (!doc.imageUrl) {
            continue; 
        }

        const characterInfo = document.createElement('div');
        characterInfo.classList.add('character-info');

        const name = document.createElement('h3');
        name.textContent = doc.name;
        characterInfo.appendChild(name);

        const img = document.createElement('img');
        img.src = doc.imageUrl;
        characterInfo.appendChild(img);

        if (doc.films.length > 0) {
            const filmsParagraph = document.createElement('p');
            filmsParagraph.innerHTML = "<span class='colorSpan'>Films: </span>" + doc.films.join(","); // Aggiungi la classe per il colore del testo
            characterInfo.appendChild(filmsParagraph);
        }

        if (doc.tvShows.length > 0) {
            const tvShowsParagraph = document.createElement('p');
            tvShowsParagraph.innerHTML = "<span class='colorSpan'>Tv Shows: </span>" + doc.tvShows.join("</span>, <span class='tv-shows'>") + "</span>"; // Aggiungi la classe per il colore del testo
            characterInfo.appendChild(tvShowsParagraph);
        }

        if (doc.videoGames.length > 0) {
            const videoGamesParagraph = document.createElement('p');
            videoGamesParagraph.innerHTML = "<span class='colorSpan'>VideoGames: </span>" + doc.videoGames.join("</span>, <span class='video-games'>") + "</span>"; // Aggiungi la classe per il colore del testo
            characterInfo.appendChild(videoGamesParagraph);
        }

        if (doc.parkAttractions.length > 0) {
            const parkAttractionsParagraph = document.createElement('p');
            parkAttractionsParagraph.innerHTML = "<span class='colorSpan'>Park Attractions: </span>" + doc.parkAttractions.join("</span>, <span class='park-attractions'>") + "</span>"; // Aggiungi la classe per il colore del testo
            characterInfo.appendChild(parkAttractionsParagraph);
        }

        library.appendChild(characterInfo);
    }

    const footer = document.querySelector('.hidden');
    if (num_results > 0) {
        footer.classList.remove('hidden');
    } else {
        footer.classList.add('hidden'); 
    }
}

function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
}

function search(event)
{
    // Impedisci il submit del form
    event.preventDefault();
    // Leggi valore del campo di testo
    const character_input = document.querySelector('#character');
    const character_value = encodeURIComponent(character_input.value);
    console.log('Eseguo ricerca: ' + character_value);

    base_url = 'https://api.disneyapi.dev/character?name=' + character_value;
    console.log('URL: ' + base_url);

    fetch(base_url).then(onResponse).then(onJson);
}
  

const form = document.querySelector('form');
form.addEventListener('submit', search);

/*function onTokenResponse(response)
{
  return response.json();
}

function onTokenJson(json)
{
  console.log(json)
  // Imposta il token global
  token = json.access_token;
}

// Define the access token. Make sure to replace this with your actual access token.
function search(){
const accessToken = "Bearer v2/cFZMOE1MU2lBZHpmRklqSGlVSkRBc01SSWw3YWZRdTYvNDMwMDU1OTY1L2N1c3RvbWVyLzQvNUdlSXZqNjdfRlhXemZrZ2IyY3pBY2Z2dm1FMzJtV1oyZXltSzQ4VmZhbDdiTy1vbXdpTnJZWk13bVF3UmpmVUVSVkY4ZkYzVDBlOFBDVE45S28xeWNheFVja01MTXQzbWN6NHdBeURlZzNMd2djeFdxLThkMXRwTWVJcGIwcUxVRGlxXy02bGZDVEE2VlNIREJQNHhXSXZEekpiOS1Yc3ZTR0dqX1VPREk3WDRzMmdqVUhldHhBYXZxREZMdGQyS3lvUmlBbmFCeExjWW5LZDBsYlV4US9NNlUteXVCRXV4dkVXaktfcFF0V053";


const query = document.querySelector('#searchInput').value;

// Definisci i parametri di ricerca
const queryParams = {
  "query": query,
};

// Make the API call
fetch("https://api.shutterstock.com/v2/images/search/suggestions?" + new URLSearchParams({ query }), {
  method: "get",
  headers: {
    "Content-Type": 'application/x-www-form-urlencoded',
    "Authorization": accessToken
  }
}).then(onTokenResponse).then(onTokenJson);
}

const form = document.querySelector('form');
form.addEventListener('submit', search);

/*
function displayImages(images) {
    const libraryView = document.querySelector('#library-view');
    libraryView.innerHTML = ''; // Pulisce la sezione prima di aggiungere nuove immagini

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.search_id; // Assumi che la struttura dell'oggetto image contenga l'URL dell'immagine
        libraryView.appendChild(imgElement);
    });
}

/*
const client_id = "pVL8MLSiAdzfFIjHiUJDAsMRIl7afQu6";
const client_secret = "gBhZqI0a3MScjpJA";
const token = "Bearer v2/cFZMOE1MU2lBZHpmRklqSGlVSkRBc01SSWw3YWZRdTYvNDMwMDU1OTY1L2N1c3RvbWVyLzQvNUdlSXZqNjdfRlhXemZrZ2IyY3pBY2Z2dm1FMzJtV1oyZXltSzQ4VmZhbDdiTy1vbXdpTnJZWk13bVF3UmpmVUVSVkY4ZkYzVDBlOFBDVE45S28xeWNheFVja01MTXQzbWN6NHdBeURlZzNMd2djeFdxLThkMXRwTWVJcGIwcUxVRGlxXy02bGZDVEE2VlNIREJQNHhXSXZEekpiOS1Yc3ZTR0dqX1VPREk3WDRzMmdqVUhldHhBYXZxREZMdGQyS3lvUmlBbmFCeExjWW5LZDBsYlV4US9NNlUteXVCRXV4dkVXaktfcFF0V053";

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const resultsDiv = document.getElementById("results");

  // Aggiungi un event listener al click del pulsante di ricerca
  searchButton.addEventListener("click", function() {
    const query = searchInput.value.trim(); // Ottieni il valore dell'input e rimuovi gli spazi bianchi iniziali e finali
    if (query !== "") {
      // Esegui la ricerca utilizzando la query inserita dall'utente
      searchImages({ query: query });
    } else {
      // Avvisa l'utente se l'input è vuoto
      alert("Inserisci un termine di ricerca valido!");
    }
  });

  // Funzione per effettuare la ricerca delle immagini
  async function searchImages(queryParams) {
    try {
      const response = await fetch("https://api.shutterstock.com/v2/images/suggestions?query=" + queryParams.query, {
        method: "GET",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        }
      });
      
      if (!response.ok) {
        throw new Error("Errore nella richiesta delle immagini: " + response.status);
      }
      
      const data = await response.json();
      displayResults(data); // Mostra i risultati a schermo
    } catch (error) {
      console.error(error);
    }
  }

  // Funzione per visualizzare i risultati della ricerca
  function displayResults(data) {
    // Pulisci i risultati precedenti
    resultsDiv.innerHTML = "";

    // Mostra i nuovi risultati
    data.forEach(image => {
      const imgElement = document.createElement("img");
      imgElement.src = image.url;
      imgElement.alt = image.description;
      resultsDiv.appendChild(imgElement);
    });
  }
});
*/
/*
const accessToken = "Bearer v2/cFZMOE1MU2lBZHpmRklqSGlVSkRBc01SSWw3YWZRdTYvNDMwMDU1OTY1L2N1c3RvbWVyLzQvNUdlSXZqNjdfRlhXemZrZ2IyY3pBY2Z2dm1FMzJtV1oyZXltSzQ4VmZhbDdiTy1vbXdpTnJZWk13bVF3UmpmVUVSVkY4ZkYzVDBlOFBDVE45S28xeWNheFVja01MTXQzbWN6NHdBeURlZzNMd2djeFdxLThkMXRwTWVJcGIwcUxVRGlxXy02bGZDVEE2VlNIREJQNHhXSXZEekpiOS1Yc3ZTR0dqX1VPREk3WDRzMmdqVUhldHhBYXZxREZMdGQyS3lvUmlBbmFCeExjWW5LZDBsYlV4US9NNlUteXVCRXV4dkVXaktfcFF0V053";

const queryParams = {
  "query": "cats",
};

fetch('https://api.shutterstock.com/v2/images/search', {
  method: 'GET',
  headers: {
    "Content-Type": 'application/x-www-form-urlencoded',
    "Authorization": accessToken
  },
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});
*/