var data = [
	["database.jpg","Computer Programmer","the best programmer in the planet."],
	["uiux.jpg","User Interface Design","Our user interface design."],
	["frontend.jpg","Front End Develop","The creator of Interfaces"],
	["content.jpeg","Content Creator","The one who create de contents"]
];

var initialOne = 0;

var professionalImg = document.getElementById("professional-img");
var profession = document.getElementById("profession");
var description = document.getElementById("description");

var previusButton = document.getElementById("previus");

previusButton.addEventListener('click', function (){
	var index = initialOne;
	index -= 1;

	if(index < 0){
		index = data.length - 1;
		initialOne = data.length - 1;
	}else{
		initialOne = index;
	}

	professionalImg.src = data[index][0];
	profession.innerText = data[index][1];
	description.innerText =  data[index][2];
});

var nextButton = document.getElementById("next");

nextButton.addEventListener('click', function () {
	var index = initialOne;
	index += 1;

	if(index >= data.length){
		index = 0;
		initialOne = 0;
	}else{
		initialOne = index;
	}

	professionalImg.src = data[index][0];
	profession.innerText = data[index][1];
	description.innerText =  data[index][2];
});


var randomButton = document.getElementById("random");

randomButton.addEventListener('click', function (){
	var index = Math.floor((Math.random() * data.length));

	while(index == initialOne){
		index = Math.floor((Math.random() * data.length));
	}

	initialOne = index;

	professionalImg.src = data[index][0];
	profession.innerText = data[index][1];
	description.innerText =  data[index][2];

});