# ROCK-PAPER-SCISSORS-GAME
## Author
[Preston-Too](https://github.com/Preston-Too)

## Description
**Rock Paper Scissors** is a game, build using a Javascript framework ReactJs

## Installation / Setup instruction
- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Functionality Instructions

- When you click on the **Rules** button, it should trigger a popup, and rules image should be displayed
- Initially, the score displayed should be `0`
- It consists of `choicesList`. It consists of a list of choice objects

- When any of the three buttons (i.e Rock, Paper, Scissors) is clicked, then a view should be displayed
- In the Game Results View, the computer choice should be generated randomly among these three buttons (i.e Rock, Paper, Scissors)
- When the **Rock** button is clicked, then the rock image should be displayed as your choice
- When the **Paper** button is clicked, then the paper image should be displayed as your choice
- When the **Scissors** button is clicked, then the scissors image should be displayed as your choice

  #### Game Results
    - When your choice is **paper** and the computer choice is **rock**, then the result will be `YOU WON`
    - When your choice is **scissors** and the computer choice is **rock**, then the result will be `YOU LOSE`
    - When your choice is **rock** and the computer choice is **paper**, then the result will be `YOU LOSE`
    - When your choice is **scissors** and the computer choice is **paper**, then the result will be `YOU WON`
    - When your choice is **rock** and the computer choice is **scissors**, then the result will be `YOU WON`
    - When your choice is **paper** and the computer choice is **scissors**, then the result will be `YOU LOSE`
    - When your choice and the computer choice match, then the result will be `IT IS DRAW`


- When the result is `YOU WON`, then the score should be incremented by one
- When the result is `IT IS DRAW`, then there shouldn't be any change in the score
- When the result is `YOU LOSE`, then the score should be decremented by one
- Click **PLAY AGAIN** button to continue playing the game
