function computer()
{
    function fun(choice){
    var input;
    switch (choice) {
        case 1:
            input = "Rock";
            break;
        case 2:
            input = "Paper";
            break;
        case 3:
            input = "Scissor";
            break;
        }
        return input;
    }
rand = Math.floor(Math.random() * 3 + 1);
comchoice = fun(rand);
}
function rock() {
    computer();
    userchoice="Rock";
    single(userchoice);
}
function paper() {
    computer();
    userchoice="Paper";
    single(userchoice);
}
function scissor() {
    computer();
    userchoice="Scissor";
    single(userchoice);
}
function win(){
    document.getElementById("userchoice").innerText="Your Choice: "+userchoice;
    document.getElementById("comchoice").innerText="Computers Choice: "+comchoice;
    document.getElementById("return").innerText="You Winn!! 😁";
}
function loss(){
    document.getElementById("userchoice").innerText="Your Choice: "+userchoice;
    document.getElementById("comchoice").innerText="Computers Choice: "+comchoice;
    document.getElementById("return").innerText="Computer Winn!! 😒";
}
function tie(){
    document.getElementById("userchoice").innerText="Your Choice: "+userchoice;
    document.getElementById("comchoice").innerText="Computers Choice: "+comchoice;
    document.getElementById("return").innerText="Tie Game!! 🙌";
}
function refresh(){
    location.reload();
}
function single(choice) {
    if (choice === "Rock") {
        comchoice === "Rock" ? tie() : comchoice === "Scissor" ? win() : loss();
    }
    if (choice === "Paper") {
        comchoice === "Paper" ? tie() : comchoice === "Scissor" ? loss() : win();
        }
    if (choice === "Scissor") {
        comchoice === "Scissor" ? tie() : comchoice === "Rock" ? loss() : win();
    }
}
   /*     person1= prompt("1st person \n what you are, rock or paper or Scissor");
     person2= prompt("2st person \n what you are, rock or paper or Scissor");
     person1=person1.trim().toLowerCase();
     person2=person2.trim().toLowerCase();
     if (person1 === "rock" || person1 === "paper" || person1 ===  "scissor" || person2 === "rock" || person2 === "paper" || person2 ===  "scissor" )
     {
         
         if(person1 ==="rock")
         {
         alert(person2 === "rock" ? "Tie..!" : person2 === "paper" ? "2nd person win" : "1st person Winn..!");
         }
         if(person1 ==="paper")
         {
         alert(person2 === "paper" ? "Tie..!" : person2 === "scissor" ? "2nd person win" : "1st person Winn..!");
         }
         if(person1 ==="scissor")
         {
         alert(person2 === "scissor" ? "Tie..!" : person2 === "rock" ? "2nd person win" : "1st person Winn..!");
         }
     }
     else
     {
         alert("Oh Fuck..! Type correctly..");
     }*/