 
     const buttonContainer = document.getElementById('buttonContainer');

     for (let i = 1; i <= 500; i++) {
         const button = document.createElement('div');
         button.innerText = `${i}`;
         button.className = 'm-box';
         button.id = `${i}`;
         button.onclick = () =>  document.getElementById(`${i}`).style.backgroundColor="rgb(15, 237, 15)"; 
         buttonContainer.appendChild(button);
     }


     let display = document.getElementById('anime');
     let buttons = document.querySelectorAll('button');
     let buttonsArray = Array.from(buttons);
     let x = '';
     buttonsArray.forEach(btn => {
      btn.addEventListener('click',(e) => {
        x = e.target.innerText;
        display.src = "https://vidsrc.icu/embed/anime/1735/" + x + "/0/1";
        console.log(e.target.innerText)
      });
     });
  
     
     /*"https://vidsrc.icu/embed/anime/21/" + x + "/0/1"*/
