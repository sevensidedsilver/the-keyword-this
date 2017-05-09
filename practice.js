//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

// this works as a reference to the currently selected object based upon the context of the function being called



  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

// default - refers to the window
// if the function is preceded by a . , the context is the object preceding the devmount
// if used in a constructor function, this refers to the object being constructed
// with call and apply, this is explicitly defined as an argument of the function

  // 3) What is the difference between call and apply?

// with apply, you must present your arguments as an array, with call, you may explicitly list parameters

  // 4) What does .bind do?

//bind creates a function that binds this to the provided value, rather than the preceeding dot value


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: "user5",
  email: "user5@mail.com",
  getUsername: function(){
    return this.username;
  }
}




//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
function Car(make, model, year){
  this.make = make,
  this.model = model,
  this.year = year,
  this.move = 0,
  this.moveCar = function() {
    this.move += 10;
    return this.move;
  }
}


  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.bind(prius);
getYear.bind(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //it will return undefined because the window has no username property

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //window

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
