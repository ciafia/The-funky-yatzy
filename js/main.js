var animals;
var hage;

// Start everything
loadHagar();


// Hagar för djur
function loadHagar(){
	$.getJSON("data/hage.json", function(data) {
		hage=data;
		console.log('here comes',hage);
		loadAnimals();
	});
}

// Djur som ska vara i hagar
function loadAnimals(){
	$.getJSON("data/animal.json", function(data) {
		animals=data;
	  	console.log('here comes',animals);
	  	// Wait for the DOM then run startHagar
	  	$(startHagar);
	});
}

	
// Funktion som skapar html struktur med hagar och djuuuur.
function startHagar() {

	hage.forEach(function(hager){
		var hageDiv=$(
			'<div class="margin">'+
			'<div class="hage col-sm-6 ">' +
			'    <div class="panel-body">' +
			'      <h1> '+hager.name+' </h1>' + 
			'      <div class="row animals">' + 
			'      </div>' + 
			'    </div>' +
			'    </div>' +
			'</div>'
		);
	    $('.html').append(hageDiv);

	    animals.forEach(function(animal){
		  if(animal.hage == hager.name){

		  	var animalHtml = $(
		  		'<div class="animal col-sm-6 col-md-4">' +
            	'    <div class="caption">' +
            	'      <h3>' + animal.name + '</h3>' +
            	'      <p>' + animal.description + '</p>' + 
            	'      <p>' +
            	'         <div class="food btn btn-xs btn-primary" role="button">Food</div>' +
            	'         <div class="sound btn btn-xs btn-default" role="button">Sound</div>' +
            	'      </p>' +
            	'  </div>' +
            	'</div>'
		  	);

		  	animalHtml.data("animalObj",animal);

            hageDiv.find('.animals').append(animalHtml); 

          } 

        });

	});

    // Add click events for buttons
    $('.animal .food').click(function(){
    	var me = $(this);
    	var animalHtml = me.parents('.animal');
    	var animal = animalHtml.data('animalObj');
    	alert("Hi I am " + animal.name + " and I eat " + animal.food + "!");
    });

    $('.animal .sound').click(function(){
	    var me = $(this);
    	var animalHtml = me.parents('.animal');
    	var animal = animalHtml.data('animalObj');
    	alert("Hi I am " + animal.name + " and I sound like this: " + animal.sound + "!");
    });
};


