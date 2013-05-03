$('#home').on('pageinit', function(){
	//code needed for home page goes here
	
	
});	

var parseMyForm = function(data){
	// use of form data here;
	console.log(data);
	
	
};

$('#formpage').on('pageinit', function(){
//validate
		var myForm = $('#formOne'),
			fErrorlink = $('#fErrors');
		    myForm.validate({
			invalidHandler: function(form, validator) {
				fErrorlink.click();
				var html = '';
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]').not('[generated]');
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
//store Data
	$('#submit-button').click(function(){
			localStorage.setItem("Form Type", $('input:checked + label').text());
			localStorage.setItem("Name", $('#first-name').val());
			localStorage.setItem("LastName", $('#last-name').val());
			localStorage.setItem("Email", $('#your-email').val());
			localStorage.setItem("Flavor Type", $('#choose-flavor').val());
			localStorage.setItem("How Many People", $('#people-slider').val());
			localStorage.setItem("Delivery Type", $('#delivery-method').val());
			localStorage.setItem("Date to Schedule", $('#date-wanted').val());
			localStorage.setItem("Additional Information", $('#additional-info').val());
			
	});//end store data
	
		
	console.log(localStorage);
/*	var storeData = function(key){
		if(!(key)){
			var id= Math.floor(Math.random()*10000001);
		}else{
			id = key;
		}
		theInfo();
		var item			= {};
		item.formType		= ["Choose Type of Form ", formTypeValue];
		item.activity		= ["Activity: ", J("select-activity").value];
		item.firstName		= ["First Name: ", J("first-name").value];
		item.yourLastName	= ["Last Name: ", J("last-name").value];
		item.email			= ["Email: ", J("your-email").value];
		item.flavor			= ["Flavor Type: ", J("choose-flavor").value];
		item.howmany		= ["How Many People?", J("people-slider").value];
		item.delivery		= ["Delivery Type: ", J("delivery-method").value];
		item.date			= ["Date to Schedule: ", J("date-wanted").value];
		item.addinfo		= ["Additional Information: ", J("additional-info").value];
		
		localStorage.setItem(id, JSON.stringify(item));
		alert("Form Save and Proceeding");
	}
*/
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(){
};
	 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


