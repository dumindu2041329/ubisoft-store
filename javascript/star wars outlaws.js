// Additional content
var slider = document.querySelectorAll('.additional-content .slider');
var curr = document.querySelector('.additional-content .slider .curr');
var images = document.querySelectorAll('.additional-content .slider img');
var slideInt; // Store on going timer
var intTime = 2000;

// Event listener for slider
slider.forEach(function(item){
    item.addEventListener('mouseenter', function(e){
        e.preventDefault();
        slideInt = setInterval(displayPictures, intTime);
        displayPictures();
    });
});

slider.forEach(function(item){
    item.addEventListener('mouseout', function(e){
        e.preventDefault();
        images.style.display = 'none';
        images[0].style.display = '';
    });
});

// Function for displaying pictures
function displayPictures(){
    var curr = document.querySelector('.additional-content .slider .curr');
    // Unset current picture
    curr.classList.remove('curr');

    // Set next picture
    if(curr.nextElementSibling){
        curr.nextElementSibling.classList.add('curr');
    }
    else{
        images[0].classList.add('curr');
    }
}