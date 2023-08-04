let imageAddlist = [
    'pokemon-img / bulbasur.jpg',
    'pokemon-img/ivysaur.jpg',
    'pokemon-img/charmeleon.jpg',
    'pokemon-img/venusaur.jpg',
    'pokemon-img/charizard.jpg',
]



function showRandomImage(){
    let imagelayout = document.getElementById('image-id');

    imagelayout.src = imageAddlist[ Math.floor(Math.random()*(imageAddlist.length))];
}