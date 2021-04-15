//SECTION 1: REPLACE THE SECTIONS THAT SAY REPLACE ME WITH THE CORRECT CODE.
//* Question 1:
//* When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the font color to blue.
//* We've started you off, ONLY replace everything instance of "replaceMe" with correct code.
function ques1() {
   $("*p").css("color", "blue");
}
$("#button1").on('click', ques1);
//* Question 2:
//* When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
    function ques2(){
		$("*h2").text("Ghadah");
	}
	$("#button1").on('click', ques2);
// Question 3:
// When button 1 is clicked, select the ordered list item that has the class "falseFact".
// Using jQuery change the content to read "True Fact".
// Uncomment the code below and solve the problem
   function ques3(){
	   $( "ol" ).children( ".falseFact" ).text("True Fact")
	}
	$("#button1").on('click', ques3);
//SECTION 2: Now you are on your own. Write the necessary code to accomplish the following.
//* Question 4:
//* When button 2 is clicked, change the background color of the whole page to "pink"
function ques4() {
   $("body").css("background-color", "pink");
}
$("#button2").on('click', ques4);
//* Question 5:
//* When button 2 is clicked, change the color of all h2's to "green"
function ques5() {
   $("*h2").css("color", "green");
}
$("#button2").on('click', ques5);
//* Question 6:
//* When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
function ques6(){
   $("blockquote").replaceWith("<span>no quote</span>");
}
$("#button2").on('click', ques6);
//SECTION 3: This section is more difficult. Try your hand at the next 3 questions.
//* Question 7:
//* When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
function ques7(){
   $("h1").text("jQuery Ninja");
}
$("#button3").on('click', ques7);
//* Question 8:
//* Have the following code execute when button 3 is clicked.
$(".city").attr("src", "http://lorempixel.com/g/500/400/food");
function ques8(){
   $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
}
$("#button3").on('click',ques8 );
//* Question 9:
//* When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
function ques9() {
   $("*p").css("color", "blue");
   $("*p").css("font-family", "Georgia");
}
$("#button3").on('click', ques9);
//* Question 10:
//* Try to do Question 9 but with only one jQuery call. 
$("selector").css({attribute: "value", attribute: "value"})
function ques10() {
   $("*p").css({color: "blue", fontFamily: "Georgia"})
}
$("#button3").on('click', ques10);