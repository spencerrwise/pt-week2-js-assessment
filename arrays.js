//create an array called family which has your family members in order of their age

var family = ['Alph','Brig','Josh','Aaron','KC','Spencer','Talmage'];



//Remove the oldest member of your family

family.shift();



//Add a new family member as the youngest member

family.pop();


//LOOP over your array to see if you have a family member named 'Tyler'
// If you do, alert ('I have a Tyler'), if you do not, alert ('I have no Tylers')

for (var i = 0; i < family.length; i++){
	if(i === 'Tyler'){
		alert("I Have a Tyler");
	}
	else {
		alert("I have no Tylers");
	}
}


// Remove the second oldest member of your family

family.splice(1,1);



//Write a function called 'reverse' that takes in a string and returns that string in reverse order

  //Function definition here

  var reverse = function(word){
  	return word.split('').reverse().join('');
  }

  //Call the function here

  reverse('Monkey');