import React from 'react'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/email.svg'
import Icon3 from '../../images/email.svg'
import Icon4 from '../../images/snake.PNG'
import Icon5 from '../../images/tictactoe.png'
import { CardContainer, CardH1, CardWrapper, CardCard, CardIcon, CardH2, CardP } from './CardElements'

const Card = () => {
    return (
        <>
            <CardContainer id="Card">
                <CardH1>My Projects</CardH1>
                <CardWrapper>
                    <CardCard>
                        <CardIcon src={Icon4}/>
                        <CardH2>Snake Game</CardH2>
                        <CardP>A simple snake game created using HTML and JavaScript.<br></br><br></br><a href="https://github.com/carlsondultra/Snake">Source Code</a> <br></br>
                        {/*a href="https://carlsondultra.github.io/Snake/index.html"> Click here to play!</a>*/} </CardP>
                    </CardCard>
                    <CardCard>
                        <CardIcon src={Icon5}/>
                        <CardH2>Tic Tac Toe </CardH2>
                        <CardP>A simple tic-tac-toe game created using HTML, CSS, and JavaScript.
                        <br></br><br></br><a href="https://github.com/carlsondultra/Tic-Tac-Toe">Source Code</a> <br></br>
                        {/*<a href="https://carlsondultra.github.io/TicTacToe/index.html"> Click here to play!</a>*/} </CardP>
                    </CardCard>
                    <CardCard>
                        <CardIcon src={Icon3}/>
                        <CardH2>Matching Game</CardH2>
                        <CardP>A simple matching game created using HTML, CSS, and JavaScript.
                        <br></br><br></br><a href="https://github.com/carlsondultra/Memory">Source Code</a> <br></br>
                        </CardP>
                    </CardCard>
                    <CardCard>
                        <CardIcon src={Icon3}/>
                        <CardH2>Portfolio Website</CardH2>
                        <CardP>This portfolio website is created using React.js, HTML, and CSS.
                        <br></br><br></br><a href="https://github.com/carlsondultra/carlsondultra.github.io">Source Code</a> <br></br>
                        </CardP>
                        
                    </CardCard>
                </CardWrapper>
            </CardContainer>
        </>
    )
}

export default Card
