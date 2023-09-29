const result = document.querySelector('.result')

const humanScore = document.querySelector('#human-score')

const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0

let machineScoreNumber = 0

/*

machineScoreNumber -> Camel Case
GAME_OPTIONS -> Snake case

*/
// ENUMS
const GAME_OPTIONS = {
    STONE: 'stone',
    PAPER: 'paper',
    SCISSORS: 'scissors'

}


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = [GAME_OPTIONS.STONE, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

    const randomNumber = Math.floor(Math.random() * 3) // criação aleatorio numeros(floor aredonda pr baixo)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {

        result.innerHTML = "Deu Empate!"

    } else if ((human === 'paper' && machine === 'stone') ||
        (human === 'stone' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        result.innerHTML = ' Você Ganhou!'

    } else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = ' Alexia Ganhou!'
    }



}