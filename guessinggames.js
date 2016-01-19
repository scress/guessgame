function writeImage(){
	var div = document.getElementById('img')


div.innerHTML = '<img src="http://visitor.wsu.edu/Cougar%20Pride%20Sculpture2.jpg">'
}
function writeImage2(){
	var div=document.getElementById('img')

	div.innerHTML= '<img src="http://sportspressnw.com/wp-content/uploads/2011/11/Washington_Huskies-e1321810480747.jpg">'
}


function color(){
	document.getElementById('id').style.backgroundColor="green"
}
function color2(){
	document.getElementById('id2').style.backgroundColor="red"

}
var correct=0
var guess = prompt("Did I go to college");
if (guess ="yes"){
	alert ("I did go to college!");
	writeImage()
	correct++
}
else {
alert ("Try again");
writeImage2()

}
var guess = prompt("Am in from Washington?");
if (guess="yes"){
	alert("That is correct");
	writeImage()
	correct++
}
else {
alert("Sorry wrong answer!");

writeImage2()
}

var guess = prompt ("Am i a niners fan?");
if (guess="no") {
	alert("Thats right! I'm a Seahawks fan");
	writeImage()
	correct++
}
else {
alert("No way dude!");
writeImage2()
}
var guess = prompt ("Do i like cheese?");
if (guess ="yes") {
	alert("Of course! Who doesn't");
	writeImage()
	correct++
}

else {
alert("Say what?");
writeImage2()
}
var guess = prompt ("What is my age?");
if (guess = 39){alert ("Great guess!");
writeImage()
correct++
}
else if (guess > 39)
	{alert ("You think I'm how old?");}
else if (guess < 39)
	{alert("Thank you! But I'm older than that");
writeImage2()
}
var number=correct
if(number === 5){
	color()
};
if(number < 5){
	color2()
};
