
var colorOne = document.querySelector('.colorOne');
var colorTwo = document.querySelector('.colorTwo');
var body = document.getElementById('gradient');
var header = document.querySelector('h3');


function gradient() {
	body.style.background = 'linear-gradient(45deg, ' + colorOne.value + ', ' + colorTwo.value + ')';

	header.innerHTML = "linear-gradient(45deg, " + colorOne.value + ", " + colorTwo.value + ")";
};

colorOne.addEventListener("input", function(){
	gradient();
});

colorTwo.addEventListener("input", function(){
	gradient();
});

gradient();