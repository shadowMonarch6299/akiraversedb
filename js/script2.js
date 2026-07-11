/*function searchCard() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card');
        
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else{
            x[i].style.display="initial";    
        }
    }
}
  const animeDataDiv = document.createElement('div');
  animeDataDiv.className = 'card'
  animeDataDiv.
  animeDataDiv.innerHTML = `
        <a href="#"><div class ="image"><img src="${imageUrl}"></div><div class="title"><p>${anime.title_english}</p></div></a>
        `;   

 const dataLink = document.getElementById('dataLink');
  dataLink.onclick = () => {
    dataLink.href = link;
  };

*/

const topItem = document.getElementById('airing');

fetch('https://api.jikan.moe/v4/top/anime?filter=airing')
.then(response => response.json())
.then(data => {
  data.data.forEach(item => {
    const id = item.mal_id;
  const title = item.title_english;
  const description = item.synopsis;
  const imageUrl = item.images.jpg.image_url;
  const cards = document.createElement('div');
  cards.className = 'card-master';
  cards.id = 'topairing';

  const basePath = `?id=`+id+`` // Define your base path here
  const fileName = `watch/anime.html`; // Customize the file name as needed
  const link = `${fileName}${basePath}`;

  

  


  cards.innerHTML = `
       <div class="anime-img">
       <a href="${link}" style="text-decoration: none;" >
       <img src="${imageUrl}"  alt="${title}" width="150px" height="200px" data-bs-toggle="popover" title="${title}" data-bs-content="" id="popover" >
       </a>
       </div>
       <div class="anime-details">
       <a href="${link}" style="text-decoration: none;" >
       <h1 style="color: white; font-family: Arial, Helvetica, sans-serif; " >${title}</h1>
       <p style="color: white; " >${description}</p>
       </a>
       </div>
        `;

        topItem.appendChild(cards);
 

  })
})
.catch(err => console.error(err));


const upcoming = document.getElementById('upcoming');

fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming')
.then(response => response.json())
.then(data => {
  data.data.forEach(item => {
    const id = item.mal_id;
  const title = item.title_english;
  const description = item.synopsis;
  const imageUrl = item.images.jpg.image_url;
  const type = item.type;
  const cards = document.createElement('div');
  cards.className = 'card-master-2';
  cards.id = 'topairing-2';

  const basePath = `?id=`+id+`` // Define your base path here
  const fileName = `watch/anime.html`; // Customize the file name as needed
  const link = `${fileName}${basePath}`;

  

  


  cards.innerHTML = `
       <div class="anime-img-2">
       <a href="${link}" style="text-decoration: none;" >
       <img src="${imageUrl}"  alt="${title}" data-bs-toggle="popover" title="${title}" data-bs-content="" id="popover" >
       </a>
       </div>
       <div class="anime-details-2">
       <a href="${link}" style="text-decoration: none;" >
       <h4 style="color: white; font-family: Arial, Helvetica, sans-serif; " >${title}</h4>
       <p style="color: white;">${type}</p>
       </a>
       </div>
        `;

        upcoming.appendChild(cards);
 

  })
})
.catch(err => console.error(err));







