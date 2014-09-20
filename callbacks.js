//Make the following function calls work

var giveItName = function(nam, cb) {
	cb(nam);
}

giveItName('Spencer', function(name){
    alert('Your name is ' + name);
 });


var areEvens = function (list, cb){
	cb(list)
}

  var nums = [2,4,5,6];
  //returns true if all items in the array are evens.
  areEvens(nums, function(item){
    return item % 2 === 0; 
  });

