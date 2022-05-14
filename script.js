let scoreCount = 0;
//Information section

const Informations = document.querySelector('.info');

const score = document.createElement('p');
score.innerHTML = 'Score: '+scoreCount;

Informations.append(score);

//Game section 
const choices = ["rock", "paper", "scissors"];

const gameGrid = document.querySelector('.choices');

const results = (userChoice, computerChoice) => {
    console.log('you choose '+(userChoice));//debug purpose
    console.log('computer choose '+(computerChoice));//debug purpose
    switch(true){
        case (userChoice === computerChoice):
            console.log('draw');
            break;
        case (userChoice === 'paper' && computerChoice === 'rock'):        
        case (userChoice === 'scissors' && computerChoice === 'paper'):
        case (userChoice === 'rock' && computerChoice === 'scissors'):
            console.log('Win');
            scoreCount++;
            score.innerHTML = 'Score: '+scoreCount;
            break;
        case (userChoice === 'rock' && computerChoice === 'paper'):
        case (userChoice === 'paper' && computerChoice === 'scissors'):
        case (userChoice === 'scissors' && computerChoice === 'rock'):
            console.log ('Lose');
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
3 Rounds
Play again option
show score */