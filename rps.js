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

        function humanChoice()
        {
            do
            {   
                choice = prompt("Enter your choice");
            }while(choice != "rock" && choice !="scissors" && choice != "paper");

            return choice;
        }

        let humanScore = 0;
        let computerScore = 0;

        function winConditions(playerChoice, computerChoice) // reminder to myself that a variable inside a function cant have the same name as the parameter
        {
            if(playerChoice === "rock" && computerChoice === "paper")
            {
                computerScore+=1;
                return "Computer wins, paper beats rock"
            } else if(playerChoice === "paper" && computerChoice === "rock")
            {   
                humanScore+=1
                return "You win, paper beats rock"
            } else if(playerChoice === "scissors" && computerChoice === "paper")
            {       
                humanScore+=1
                return "You win, scissors beat paper"
            }else if(playerChoice === "paper" && computerChoice === "scissors")
            {
                computerScore+=1
                return "Computer wins, scissors beat paper"
            }else if(playerChoice=== "rock" && computerChoice === "scissors")
            {
                humanScore+=1
                return "You win, rock beats scissors"
            }else if(playerChoice === "scissors" && computerChoice === "rock")
            {
                computerScore+=1
                return "Computer wins, rock beats scissors"
            }else
            {
                return "It was a tie";
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

            for(let i = 0; i<5; i++)
            {
                playerchoice = humanChoice();
                computerchoice = getRandomChoice();

                alert(playRound(playerchoice, computerchoice));
            }

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

        alert(playGame());