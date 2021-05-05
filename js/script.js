// ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺-SLIDER-☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(){
	showSlides(slideIndex += 1);
}

function minusSlide(){
	showSlides(slideIndex -= 1);
}

function currentSlide(n){
	showSlides(slideIndex = n);
} 

function showSlides(n){
	var i;
		slides = document.getElementsByClassName("slides_item"),
		dots = document.getElementsByClassName("dots_item");

	if(n > slides.length){
		slideIndex = 1
	}

	if(n < 1){
		slideIndex = slides.length;
	}

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}

	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
// ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺-SLIDER-☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺


// ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ SLICK-slider ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦

$(document).ready(function(){
    $('.sliders').slick({
        slidesToShow: 3,
        infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
		]
    })
})



// ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ SLICK-slider ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦