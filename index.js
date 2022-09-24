var dattebayo = new Audio("sounds/dattebayo.mp3");
var questions=["How kurama died?","Who is the writer of Icha Icha book?","Who is Pain?","Who is Tsunade?","Who is Kakashi Hatake?","Who is Hashirama Senju?",
"What is Naruto's common dialogue?","What is Kushina's common dialogue?","Who is Sasuke's big brother?","Jiraiya known as?",
"Who rejected Jiraiya's propose?","Who is terrified of Toads?","Whose hobby is pressing flowers?","Who else has the same ability as Kakashi to create lightning with the hand?",
"Who was the youngest ninja graduate from the academy?","Who is the only female ninja in Akatsuki?","Whom did Kakashi get his eye from?",
"What jutsu is Naruto most proficient in?","Who held Naruto hostage when he was born?","Who is the one person Naruto respects the most?",
"What test did Naruto fail in the academy?","Naruto is a container of which Tailed-Beast?","Who killed Haku's mom?",
"What is the name of the monster that is inside Gaara?","What is Naruto's favorite food?","Which Hokage sealed the nine-tailed fox inside Naruto?",
"What is the highest level of ninja in Konoha?","What is Naruto's last name?","Who summoned the five kage for the five kage summit?",
"What demon does Gaara have sealed inside of himself?","What is Naruto's dream?","Which Akatsuki member cut off Orochimaru's left hand?",
"Who was the Sannin's sensei?","I am Rock Lee's mentor. Who am I?","What does the symbol on Gaara's forehead mean?","Konohamaru is related to which Kazekage?",
"Who tricked Naruto into stealing a sacred scroll?","What is first level of ninja?","Who is Naruto's rival?","What is Kyubi's other name?",
"What did Iruka give Naruto after he defeated Mizuki?","Whose body is Pein made out of?","What is the name of Tsunade's boyfriend?",
"Which member of team 'Hebi' did Sasuke pick up first?","What was the name of the Fifth Hokage?","Who was the first Kyuubi host?",
"How many hearts does Kakuzu have?","Who was a student of the Fourth Hokage?","Who is Kakashi's enemy for eternity?",
"'Believe it' is my saying. Who am I?","How many of the inner gates can Rock Lee open?","Which character can only use taijutsu?",
"What is the upper level Ninja called?"];

var answers=["Because of Baryon mode","Jiraiya","Nagato","5th Hokage","6th Hokage","1st Hokage","Dattebayo","Dattebane","Itachi","Pervy sage",
"Tsunade","Sakura","Hinata","Indra","Kakashi","Konan","Obito","Shadow Clone","Madara","Iruka Sensei","Clone Jutsu","Nine-Tailed Beast",
"His dad","Shukaku","Ichiraku Ramen","4th Hokage","Hokage","Uzumaki","Raikage","One tail","To be Hokage","Itachi","Sarutobi","Gai","Love","None of these",
"Mizuki","Genin","Uchiha Sasuke","Kurama","His headband","Yahiko","Dan","Suigetsu","Tsunade","Mito","Five","Kakashi","Gai","Naruto","Six","Rock Lee",
"Jounin"];
var arrayIndex=0;
var base=true;
var correct=0;
var randome=0;
// BASIC IMPLEMENTED METHODS
$(".QDiv").hide();
$(".Result").hide();
$("#villians").hide();
// EVENTLISTTENERS
// ramen sound event
$(".NRamen").on("click", ramen);
// answer showing event
$(".Options").on("click",showAnswer);
//user choice taking event
$(".User").click(userChoice);
//villians showing event
$(".Vdown").on("click",sAndHvillians);
// FUNCTIONS
// ramen sound play function
function ramen() {
  dattebayo.play();
}
//answer showing function
function showAnswer(){
  var user=this.innerText;
  $(".Hover").removeClass("Hover");
if(user===answers[arrayIndex] && base===true){
  $(this).css("color","green");
  base=false;
  correct++;
  arrayIndex++;
  setTimeout(endResults,500);
  qAndAManger();
}else if (user!==answers[arrayIndex] && base===true){
  $(this).css("color","red");
  base=false;
  arrayIndex++;
  setTimeout(endResults,500);
  qAndAManger();
}
}
//fadeIn function
function showFade(element,time){
  setTimeout(function(){$("."+element).fadeIn(1000);},time);
}
//fadeOut function
function hideFade(element,time){
  setTimeout(function(){$("."+element).fadeOut(1000);},time);
}
//user choice function
function userChoice(){
  var id=this.getAttribute("id");
  if(id==="replay"||id==="play"){
    $(".UserChoice").fadeOut(1000);
    showFade("QDiv",1000);
  }
  switch(id){
    case "cancle":
    $(".Game").slideUp(1000);
    break;
    case "exit":
    hideFade("QDiv",10);
    document.querySelectorAll(".User")[0].textContent="Replay";
    document.querySelectorAll(".User")[0].setAttribute("id","replay");
    showFade("UserChoice",1000);
    break;
  }
}
//q and a managing function
function qAndAManger(){
  setTimeout(function(){
    base=true;
    changeColor();
    randomNumber();
    $(".Options").addClass("Hover");
    $(".Question").text(questions[arrayIndex]);
    if(arrayIndex%2){
        document.getElementsByClassName("Options")[0].textContent=answers[arrayIndex];
        document.getElementsByClassName("Options")[1].textContent=answers[randome];
    }else{
      document.getElementsByClassName("Options")[0].textContent=answers[randome];
      document.getElementsByClassName("Options")[1].textContent=answers[arrayIndex];
    }
  },1500);
}
//color changing function
function changeColor(){
  $(".Options").css("color","#f16a1f")
}
 // game ending function
function endResults(){
  if(arrayIndex===questions.length){
  $(".QDiv").fadeOut();
  $(".EndTitle").fadeIn();
if(correct<=10){
  $(".One").fadeIn(100);
}else if(correct>10&&correct<=20){
  $(".Two").fadeIn(100);
}else if(correct>20&&correct<=30){
  $(".Three").fadeIn(100);
}else if(correct>30&&correct<=45){
  $(".Four").fadeIn(100);
}else if(correct>45&&correct<53){
  $(".Five").fadeIn(100);
  $(".Winner").slideDown(500);
}
setTimeout(function(){$(".Game").slideUp(1000);},6000);
  }
}
//randome number generator
function randomNumber(){
  randome=Math.floor(Math.random()*53);
}
//villians showing function
function sAndHvillians(){
  var alt=this.getAttribute("alt");
  if(alt==="show"){
    $(".Vdown").addClass("Rotate");
    $(".EnemyText").removeClass("BotMar");
    $("#villians").slideDown(1500);
    $(".Vdown").attr("alt","hide");
  }else if(alt==="hide"){
    $(".Vdown").removeClass("Rotate");
    $(".EnemyText").addClass("BotMar");
    $("#villians").slideUp(1500);
    $(".Vdown").attr("alt","show");
  }
}
