// Question no. 26 Alien colors #2

// Choose a color for an alien as you did in Exercise 25,
// and write an if-else chain.
let alien_color: string = "Green";

// • If the alien’s color is green, print a statement 
// that the player just earned 5 points for shooting the alien.
if (alien_color == "Green"){
    console.log("the player just earned 5 points for shooting the alien.");
}
else{
    console.log("the player just earned 10 points")
}

alien_color = "Red";
if(alien_color == "Green"){
    console.log("the player just earned 5 points for shooting the alien.");
}
