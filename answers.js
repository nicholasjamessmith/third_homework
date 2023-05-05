///////////////PART 1///////////
//HTML & CSS///
//HTML Intro - 3
//HTML Elements - 3
//CSS Intro - 4
//CSS Basics - 4

//////////////PART 2////////////
// Easy Going
////////////////////////////////
//Create a for loop that prints the numbers 1 through 20 when logged.
//Create a number variable equal to 1; make the variable less than or euqal to 20; write a funtion that continuously adds the variables within the set parameters.
for (let i = 1; i <= 20; i++) {
  console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////
//Create a for loop that prints the even numbers in 0 through 200. Create a number variable equal to 0; make the variable less than or equal to 200. Write a function that continuously adds the number 2 to the the variabble within the set parameters. Hint: think about the increment expression.
//let x = 2
//for (let i = 0; i <= 200;) {
//  console.log(x + i++)
//}
for (let i = 0; i <= 200; i += 2) {
  console.log(i)
}
//citation: https://linuxhint.com/increment-by-2-in-for-loop-in-javascript/#:~:text=To%20increment%20by%202%20in%20a%20for%20loop%2C%20use%20the,final%20or%20incremental%20expression%20statement.

////////////////////////////////
// Fizz Buzz
////////////////////////////////
//Create a javascript application that logs all the numbers from 1 through 100. If a number is divisible by 3 log "Fizz" instead of the number. If a number is divisible by 5 log "Buzz" instead of the number. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
//Create a for loop that logs the numbers from 1 - 100. Create a function that prints "Fizz" instead of numbers divisible by 3. Create a function that prints "Buzz" instead of numbers divisible by 5. Create a function that prints "Fizz Buzz" instead of numbers divisible by both three and five. Nest the function within the for loop.

//for let (i = 1; i <= 100; i++) {
//  if (i / 3 % 0) {
//    console.log("Fizz")
//  }
//  if (i % 3 == 0) {
//    console.log("Buzz")
//  }
//  if (i % 15 == 0) {
//    console.log("FizzBuzz")
//  }
//}
//console.log(i)


//let number = x
//if x / 3 % 0 console.log("Fizz")
//if x / 5 % 0 console.log("Buzz")
//if x / 3 % 0 && x / 5 % 0 console.log("FizzBuzz")

////////////////////////////////
// Wild Wild Life
////////////////////////////////
//Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]
//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = '5001';
console.log(plantee);
//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = 'Gotham City';
console.log(wolfy);
//Give D'Art a second hometown by adding "Hawkins"
dart.push('Hawkins')
console.log(dart);
//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.pop[0]
wolfy[0] = 'Gameboy'
console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
//Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
for (each in ninjaTurtles) {
  console.log(ninjaTurtles[each].toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
//Here is a list of favMovies:
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//Console log: the index of Titanic
console.log(favMovies[8])

//Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
//use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
console.log(favMovies)
favMovies.sort
console.log(favMovies) //the .sort method logged the list of movies in a verticle list. The change appears to be permanent so long as the .sort method is applied either above or below the .sort method code.
console.log(favMovies)
//Use the method pop
favMovies.pop();
console.log(favMovies)
//push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")
console.log(favMovies)
//Reverse the array
favMovies.reverse();
console.log(favMovies)
//Use the shift method
favMovies.shift();
console.log(favMovies);
favMovies.shift();
console.log(favMovies)
//unshift - what does it return?
favMovies.unshift()
console.log(favMovies)
//returns the same list as last log, but when I tried favMovies.unshift("Movie") it added "Movie" to the top of the array.
//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
//"Avatar" showed up outside of the array.
//favMovies.splice("Django Unchained")
//favMovies.push("Avatar")
console.log(favMovies)
//for (each in favMovies) {
//  if each = "Django Unchained"
//  console.log[each]("Django Unchained")
//}
for (item in favMovies) {
  if (favMovies[item] === "Django Unchained") {
    console.log(item)
  }
}
//slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
//Pseduocode:
//determine the number of items in the array
//console.log((favMovies).length)
//find median
//console.log(favMovies.median)
//write a statement that returns the index items greater than or equal to the median index number
//slice the index items greater than or equal to the median index number
//let i = favMovies.length;
//console.log(i)
//const median = arr => {
//  const mid = Math.floor(arr.length / 2),
//    nums = [...arr].sort((a, b) => a - b);
//  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
//};
//citation: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-88.php
//console.log(median(favMovies))
//let answer = (indexOf(favMovies) >= indexOf("Titanic"));
//console.log(favMovies.length)
//store the value of your slice in a variable, console.log it - Thought question: what is going on here?
//console.log your final results

//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf("Titanic"))
console.log(favMovies.indexOf("Fast and Furious"))
//indexOf "Fast and Furious" returned a value of -1, perhaps meant to indicate that it is not in the array.

// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array.Weird?Should we have used let?
//The value of a const variable cannot be changed, but if the constant is an object or array its properties can be updated/removed 

////////////////////////////////
// Where is Waldo
////////////////////////////////
//With the following multi-dimensional array
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];
//Remove Eggbert (hint look at the slice/splice method(s))
console.log(whereIsWaldo);
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo)
//Change "Neff" to "No One"
//whereIsWaldo.splice(2, 2, "No One")
//console.log(whereIsWaldo)
//console.log(whereIsWaldo)
////Access and console.log "Waldo"
//console.log(whereIsWaldo.indexOf("Waldo"))

////////////////////////////////
//  Excited Kitten
////////////////////////////////
//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//const message = "Love me, pet me! HSSSSSS!";
//console.log(message.repeat(20))
//citation: https://www.w3schools.com/jsref/jsref_repeat.asp#:~:text=The%20repeat()%20method%20returns,not%20change%20the%20original%20string.

//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
//arr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
//for (const message = "Love me, pet me! HSSSSSS!") {
//  if 'message number' / 2 % === 0';
//  console . log 'newMessage'
//}

const kittyTalk = ["Love me, pet me! HSSSSSS!", "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
console.log(kittyTalk[0])
let hss = [0];
let pic = [1];
let catnip = [2];
let dot = [3];
//You will need to use Math.random() in order to choose a random number and assign this random number to the variable you created (rather than have the variable equal 0)
//Math.random() will return a number between 0 and 1. Array positions are integers. You will need to multiply the Math.random() number so that the range is between 0 and the length of the array
//Then round the number by using another Math method like Math.floor() or Math.ceil() or Math.round()


////////////////////////////////
//  Find the Median
////////////////////////////////
//Find the median number in the following nums array, then console.log that number.
//hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
console.log(median(nums))
//citation: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-88.php
//=> 15