/* Declare variables below to save the different sections (divs) of your story*/
let sO=document.querySelector(".story-opening");
let q1a1=document.querySelector(".question1-a1");
let oT=document.querySelector(".option_Teeth");
let q1a2=document.querySelector(".question1-a2");
let oW=document.querySelector(".option_Window");
let q2a1=document.querySelector(".question2-a1");
let oS=document.querySelector(".option_Scream");
let q2a2=document.querySelector(".question2-a2");
let oR=document.querySelector(".option_Run");
let q3a1=document.querySelector(".question3-a1");
let q3a2=document.querySelector(".question3-a2");
let q4a1=document.querySelector(".question4-a1");
let oY=document.querySelector(".option_Yes")
let q4a2=document.querySelector(".question4-a2");
let oN=document.querySelector(".option_No")
let q5a1=document.querySelector(".question5-a1");
let oA=document.querySelector(".option_Accept")
let q5a2=document.querySelector(".question5-a2");
let oD=document.querySelector(".option_Decline")
let q6a1=document.querySelector(".question6-a1");
let oTD=document.querySelector(".option_Trapdoor")
let q6a2=document.querySelector(".question6-a2")
let oSO=document.querySelector(".option_QuestionShop")
let q7a1=document.querySelector(".question7-a1")
let oAD=document.querySelector(".option_Advice")
let q7a2=document.querySelector(".question7-a2")
let oQS=document.querySelector(".option_QuestionSheriff")
let q8a1=document.querySelector(".question8-a1")
let oE=document.querySelector(".option_Enter")
let q8a2=document.querySelector(".question8-a2")
let oDr=document.querySelector(".option_Drink")
let q9a1=document.querySelector(".question9-a1")
let oBH=document.querySelector(".option_BowlerHat")
let q9a2=document.querySelector(".question9-a2")
let oL=document.querySelector(".option_Log")
let q10a1=document.querySelector(".question10-a1")
let oBB=document.querySelector(".option_Basketball")
let q10a2=document.querySelector(".question10-a2")
let oDN=document.querySelector(".option_Donut")
let restartDrink=document.querySelector(".gameover1")
let restartDecline=document.querySelector(".gameover2")
let restartNo=document.querySelector(".gameover3")
let restartQuestion=document.querySelector(".gameover4")



// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
q1a1.onclick=function(){
        sO.style.display = "none";
    oT.style.display="block"
};
q1a2.onclick=function(){
        sO.style.display = "none";
    oW.style.display="block"
};
q2a1.onclick=function(){
    oT.style.display = "none";
  oS.style.display = "block"
}
q2a2.onclick=function(){
    oT.style.display = "none";
  oR.style.display = "block"
}
q3a1.onclick=function(){
    oW.style.display= "none";
  oS.style.display = "block"
}
q3a2.onclick=function(){
    oW.style.display= "none";
  oR.style.display= "block";
}
q4a1.onclick=function(){
  oS.style.display= "none"
  oY.style.display= "block"
}
q4a2.onclick=function(){
  oS.style.display= "none"
  oN.style.display= "block"
}
q5a1.onclick=function(){
  oR.style.display= "none"
  oA.style.display= "block"
}
q5a2.onclick=function(){
  oR.style.display= "none"
  oD.style.display= "block"
}
q6a1.onclick=function(){
  oA.style.display= "none"
  oTD.style.display= "block"
}
q6a2.onclick=function(){
  oA.style.display= "none"
  oSO.style.display= "block"
}
q7a1.onclick=function(){
  oY.style.display= "none"
  oAD.style.display= "block"
}
q7a2.onclick=function(){
  oY.style.display= "none"
  oQS.style.display= "block"
}
q8a1.onclick=function(){
  oAD.style.display= "none"
  oE.style.display= "block"
}
q8a2.onclick=function(){
  oAD.style.display= "none"
  oDr.style.display= "block"
}
q9a1.onclick=function(){
  oTD.style.display= "none"
  oBH.style.display = "block"
}
q9a2.onclick=function(){
  oTD.style.display= "none"
  oL.style.display= "block"
}
q10a1.onclick=function(){
  oE.style.display="none"
  oBB.style.display="block"
}
q10a2.onclick=function(){
  oE.style.display="none"
  oDN.style.display="block"
}


restartDrink.onclick=function(){
  oDr.style.display= "none"
  sO.style.display= "block"
}
restartDecline.onclick=function(){
  oD.style.display= "none"
  sO.style.display= "block"
}
restartNo.onclick=function(){
  oN.style.display= "none"
  sO.style.display= "block"
}
restartQuestion.onclick=function(){
  oQS.style.display= "none"
  sO.style.display= "block"
}






  