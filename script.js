let scoreCount = 0;
let PCScore = 0;
let drawCount = 0;
let roundCount = 1; 
//Information section

const Informations = document.querySelector('.scores');
const Round = document.querySelector('.round');

const round = document.createElement('h1');
round.innerHTML = 'Round '+roundCount;
const computerScore = document.createElement('p');
computerScore.innerHTML = 'Bot: '+PCScore;
const draw = document.createElement('p');
draw.innerHTML = 'Draw: '+drawCount;
const score = document.createElement('p');
score.innerHTML = 'You: '+scoreCount;

Round.append(round);
Informations.append(computerScore, draw, score,);

//Game section 
const choices = ["rock", "paper", "scissors"];

const gameGrid = document.querySelector('.choices');

const results = (userChoice, computerChoice) => {
    console.log('you choose '+(userChoice));//debug purpose
    console.log('computer choose '+(computerChoice));//debug purpose
    switch(true){
        case (userChoice === computerChoice):
            console.log('draw');
            drawCount++;
            draw.innerHTML = 'Draw: '+drawCount;
            roundCount++;
            round.innerHTML = 'Round '+roundCount;
            break;
        case (userChoice === 'paper' && computerChoice === 'rock'):        
        case (userChoice === 'scissors' && computerChoice === 'paper'):
        case (userChoice === 'rock' && computerChoice === 'scissors'):
            console.log('Win');
            scoreCount++;
            score.innerHTML = 'You: '+scoreCount;
            roundCount++;
            round.innerHTML = 'Round '+roundCount;
            break;
        case (userChoice === 'rock' && computerChoice === 'paper'):
        case (userChoice === 'paper' && computerChoice === 'scissors'):
        case (userChoice === 'scissors' && computerChoice === 'rock'):
            console.log ('Lose');
            PCScore++;
            computerScore.innerHTML = 'Bot: '+PCScore;
            roundCount++;
            round.innerHTML = 'Round '+roundCount;
            break;
    }
}

const handleClick = (e) => {
    const userChoice = e.target.innerHTML;
    console.log(userChoice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    results(userChoice,computerChoice);
}
choices.forEach(element => {
   const choice = document.createElement('button');
   choice.id = element;
   choice.innerHTML = element;
   choice.className = 'option';
   choice.addEventListener('click', handleClick, false)
   gameGrid.append(choice);
});

/*MISSING
icons
*/