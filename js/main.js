const button = document.querySelector('.container button');
const jokes = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', fetchjoke);
button.addEventListener('click', fetchjoke);

async function fetchjoke(){
const jokedata = await fetch('https://icanhazdadjoke.com/',{
     headers:{
          'Accept': 'application/json'
     }
});

const joke_obj = await joke_data.json();
jokes.innerHTML = joke_obj.joke;
}
