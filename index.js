//Game Choices Setup

const Choices = ["Rock", "Paper", "Scissors"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");

const ResultDisplay = document.getElementById("ResultDisplay");


//Ai Setup
function Game(PlayerChoice){

    const ComputerChoice = Choices[Math.floor(Math.random() * 3)]
  let Result = ""

  if(PlayerChoice === ComputerChoice){
     Result = "Tie No point Rewarded"
    console.log(ComputerChoice)
  }
    else{
        switch(PlayerChoice){
            //Rock
           case "rock":
             break
            //Paper
            case "paper":
             break
             //Scissors
             case "scissors":
             break
        }
    }
   //Score Board
    PlayerDisplay.textContent = `Player: ${PlayerChoice}`;
    ComputerDisplay.textContent = `Jeremy the Robot: ${ComputerChoice}`;
    ResultDisplay.textContent = Result;

}
