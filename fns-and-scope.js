//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name) {
  if (name === 'Tyler') {
    return true
  } else {
    return false
  }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
  var name = prompt('name');
  return name;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var pullName = getName()
  alert('Welcome, ' + pullName);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

//Parameters are being called by the function within the parentheses, and arguments are actual values passed to the function


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?

//undefined, NaN, null, 0, "", false
//arr.filter(Boolean); OR if (str !== true) {return false}


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(name) {
  name = 'Stewart';
  return name;
}

//Now save the function definition of myName into a new variable called newMyName

function newMyName() {

}

//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return (function() {
    return 'Stewart';
  });
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
