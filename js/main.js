const button = document.querySelector('.container button');
const jokes = document.querySelector('.container p');

document.addEventListener('DOMContentLoaded', getjoke);
button.addEventListener('click', getjoke);

async function getjoke(){
const jokedata = await fetch('https://icanhazdadjoke.com/',{
     headers:{
          'Accept': 'application/json'
     }
});
const jokeobj = await jokedata.json();
jokes.innerHTML = jokeobj.joke;
}