$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
var parseMyForm = function(data){
	// use of form data here;
	console.log(data);
};

$('#formpage').on('pageinit', function(){

		var myForm = $('#formOne'),
			fErrorlink = $('#fErrors');
		    myForm.validate({
			invalidHandler: function(form, validator) {
				fErrorlink.click();
				var html = '';
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]');
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldname = legend.length ? legend.text() : label.text();
					html += '<li>'+ fieldname +'</li>';
				};
				$("#formError ul").html(html);
				console.log(html);
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			parseMyForm(data);
		}
	});
	
	//any other code needed for addItem page goes here
function proceedWithForm(key){
		if(!(key)){
			var id = Math.floor(Math.random()*10000001);
		}else{
			id = key;
		}
		getRadio();
		var item 				= {};
			item.formType		= ["Choose Type of Form: ", formTypeValue];
			item.activity 		= ["Activity: ", $("activity").value];
			item.firstName 		= ["First Name: ", $("firstName").value];
			item.yourLastName 	= ["Last Name: ", $("lastName").value];
			item.email 			= ["Email: ", $("email").value];
			item.flavor			= ["Flavor Type: ", $("flavorGroup").value];
			item.howmany		= ["How Many People? ", $("rangeSlider").value];
			item.delivery  		= ["Delivery Type: ", $("deliveryType").value];
			item.date			= ["Date to Schedule: ", $("duedate").value];
			item.addinfo		= ["Additional Information: ", $("moreInfo").value];
			
		localStorage.setItem(id, JSON.stringify(item));
		alert("Form Saved and Proceeding");
	}
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


