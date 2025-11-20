function getRandomInt(max)
        {
            return Math.floor(Math.random() * max);
        }

        function getRandomChoice()
        {
            //i dont plan to use these variables other places so i can just define them here
            const value = getRandomInt(3);

            if (value === 1)
            {
                return "paper";
            }
            else if (value === 2)
            {
                return "rock";
            }
            else
            {
                return "scissors";
            }

        }

        // function humanChoice()
        // {
        //     do
        //     {   
        //         choice = prompt("Enter your choice");
        //     }while(choice != "rock" && choice !="scissors" && choice != "paper");

        //     return choice;
        // }

        let humanScore = 0;
        let computerScore = 0;


        const div = document.createElement("div");
        document.body.appendChild(div);

        function winConditions(playerChoice, computerChoice) // reminder to myself that a variable inside a function cant have the same name as the parameter
        {
            if(playerChoice === "rock" && computerChoice === "paper")
            {
                computerScore+=1;
                div.textContent = "Computer wins, paper beats rock\n"
            } else if(playerChoice === "paper" && computerChoice === "rock")
            {   
                humanScore+=1
                div.textContent = "You win, paper beats rock\n"
            } else if(playerChoice === "scissors" && computerChoice === "paper")
            {       
                humanScore+=1
                div.textContent = "You win, scissors beat paper\n"
            }else if(playerChoice === "paper" && computerChoice === "scissors")
            {
                computerScore+=1
                div.textContent = "Computer wins, scissors beat paper\n"
            }else if(playerChoice=== "rock" && computerChoice === "scissors")
            {
                humanScore+=1
                 div.textContent = "You win, rock beats scissors\n"
            }else if(playerChoice === "scissors" && computerChoice === "rock")
            {
                computerScore+=1
                div.textContent = "Computer wins, rock beats scissors\n"
            }else
            {
                 div.textContent = "It was a tie";
            }

            if(humanScore == 5)
            {
             div.textContent += "You win " + humanScore + "to " + computerScore;
            } else if(computerScore == 5)
            {
             div.textContent += "Computer wins " + computerScore + "to " + humanScore;
            }
        }


        function playRound(playerChoice,computerChoice)
        {
            playerChoice = playerChoice.toLowerCase();
            //uncommenting this block and having the selection here
            return winConditions(playerChoice, computerChoice)

        }

        function playGame()
        {
            let playerchoice;
            let computerchoice;

            
            playerchoice = humanChoice();
            computerchoice = getRandomChoice();

            // alert(playRound(playerchoice, computerchoice));
            

            if(computerScore > humanScore)
            {
                return "Computer wins " + computerScore + " to " + humanScore;
            }else if (humanScore > computerScore)
            {
                return "Human wins " + humanScore + " to " + computerScore;
            }
            else
            {
                return "Tie";
            }


        }

        // alert(playGame());


    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");


    rock.addEventListener('click', () =>
    {
        const computer = getRandomChoice();
        playRound("rock",computer);

        
    });


    paper.addEventListener('click', () =>
    {
        const computer = getRandomChoice();
        playRound("paper",computer);
        
    
    
    });


    scissors.addEventListener('click', () =>
    {
        const computer = getRandomChoice();
        playRound("scissors",computer);
    
    });

   
  