let userScore=0
let compScore=0

const choices= document.querySelectorAll(".choise")

var msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

 
const drawGame = () => {
    console.log("match was a draw")
     msg.innerText = `Match was a draw ! Play Again `
     msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You Win ! Your ${userChoice} Beats ${compChoice}`
        msg.style.backgroundColor = "green"
     
    } else {
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You Loose ! ${compChoice} Beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
        
    }
}
const genCmpChoice = () => {
    const options = ["rock" , "paper" , "scissors"]
    const randIndx = Math.floor(Math.random()*3)
    // console.log(randIndx)
    return options[randIndx]
}

const playGame= (userChoice) =>{
    console.log(`userchoice = ${userChoice}`)
    // generate comp choice -> modular
    const compChoice = genCmpChoice()
    console.log( 'compChoice =',compChoice)

    if(userChoice === compChoice)
        // Draw 
        {
           drawGame()
        } else {
            let userWin = true 
            if (userChoice === "rock"){
                //paper, scissors
                userWin = compChoice === "paper" ? false : true
            }else if( userChoice === "paper"){
                //rock , scissors
                userWin = compChoice === "scissors" ? false : true
            }else{
                //rock , paper
                userWin = compChoice === "rock" ? false : true
            }
            showWinner(userWin , userChoice , compChoice )

        }

}

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        // console.log(` ${userChoice} choice was clicked`)
        playGame(userChoice)
    })
})