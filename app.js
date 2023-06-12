let button = document.getElementById('submit');
let score = document.querySelector('.numbers')

button.addEventListener('click', function(){
    button.style.backgroundColor = 'white';
    button.style.color = 'hsl(25, 97%, 53%)';
});

score.addEventListener('click', function(){
    score.style.backgroundColor = 'hsl(25, 97%, 53%)';
    score.style.color = 'white';
});


