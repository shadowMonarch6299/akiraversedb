 // Function to get ID from URL
         
 const urlParams = new URLSearchParams(window.location.search);
 const id = urlParams.get('id');

const url = `https://api.jikan.moe/v4/anime/${id}`;
fetch(`${url}`)
.then(response => response.json())
.then(data => { 

  const id = data.data.mal_id;
  const name = data.data.title_english;
  const videoUrl = data.data.trailer.embed_url;
  const release = data.data.aired.string;
  const status = data.data.status;
  const rated = data.data.rating;
  const score = data.data.score;
  const season = data.data.season;
  const imageUrl = data.data.images.jpg.large_image_url;
  const desc = data.data.synopsis;
  const dataDiv = document.getElementById('data');

  if (videoUrl === null ) {

     dataDiv.innerHTML = `
           <div class="images">
                     <img src="${imageUrl}" height="700px" >
                 </div>
                 <div id="onlines" class="online">
                 </div>
                  <div class="title">
                 <h1>Watch And Download ${name} Anime With Eng Sub</h1>
             </div>
             <div class="des">
                <h2><p>${desc}</p></h2>
             </div>
             <br>
             <hr>
             <div class="info">
             <h2>Series Info</h2>
             </div>
             <hr>
             <br>
             <div class="line">
                 <ul>
                     <li>Name: ${name}</li>
                     <li>Release Year: ${release}</li>
                     <li>Seasons: ${season}</li>
                     <li>Status: ${status}</li>
                     <li>Rated: ${rated}</li>
                     <li>Score: ${score}</li>
                 </ul>
             </div>
             <br>
             <hr>
             <div class="info">
             <h2>Video Detailes</h2>
             </div>
             <hr>
             <br>
             <div class="line">
                 <ul>
                     <li>Language: Japanese With English Subtitle</li>
                     <li>Quality: 480p || 720p || 1080p FHD</li>
                 </ul>
             </div>
             <br>
             <hr>
              <br>
   
  `; 
    
  } else {

     dataDiv.innerHTML = `
           <div class="images">
                     <iframe width="980" height="700" src="${videoUrl}" scrolling="no" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> </iframe>
                 </div>
                 <div id="onlines" class="online">
                 </div>
                  <div class="title">
                 <h1>Watch And Download ${name} Anime With Eng Sub</h1>
             </div>
             <div class="des">
                <h2><p>${desc}</p></h2>
             </div>
             <br>
             <hr>
             <div class="info">
             <h2>Series Info</h2>
             </div>
             <hr>
             <br>
             <div class="line">
                 <ul>
                     <li>Name: ${name}</li>
                     <li>Release Year: ${release}</li>
                     <li>Seasons: ${season}</li>
                     <li>Status: ${status}</li>
                     <li>Rated: ${rated}</li>
                     <li>Score: ${score}</li>
                 </ul>
             </div>
             <br>
             <hr>
             <div class="info">
             <h2>Video Detailes</h2>
             </div>
             <hr>
             <br>
             <div class="line">
                 <ul>
                     <li>Language: Japanese With English Subtitle</li>
                     <li>Quality: 480p || 720p || 1080p FHD</li>
                 </ul>
             </div>
             <br>
             <hr>
              <br>
   
  `; 
    
  }

  

 
  
 
})
.catch(err => console.error(err));

const url2 = `https://api.jikan.moe/v4/anime/${id}/streaming`;

fetch(`${url2}`)
.then(response => response.json())
.then(data => { 

    const stream = data.data[0].url;
    const urlDiv = document.getElementById('onlines');
    urlDiv.innerHTML = `
       <a href="${stream}" target="_blank" ><button>Watch Online Now</button></a>
    `;

})
.catch(err => console.error(err));

const characters = document.getElementById('card3');

fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
.then(response => response.json())
.then(data => {
  data.data.forEach(item => {
    const image_url = item.character.images.jpg.image_url;
    const name = item.character.name;
    const cast = document.createElement('div');
    cast.className = 'characters';
    cast.id = 'characters';

    cast.innerHTML = `
    <img src="${image_url}">
    <h4>${name}</h4>
    `
    characters.appendChild(cast);
    
  })
})
.catch(err => console.error(err));