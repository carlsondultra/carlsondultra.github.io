import React from 'react'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg1.svg'
import Icon3 from '../../images/svg1.svg'
import { CardContainer, CardH1, CardWrapper, CardCard, CardIcon, CardH2, CardP } from './CardElements'

const Card = () => {
    return (
        <>
            <CardContainer id="Card">
                <CardH1>My Projects</CardH1>
                <CardWrapper>
                    <CardCard>
                        <CardIcon src={Icon1}/>
                        <CardH2>Snake Game</CardH2>
                        <CardP>Text Text</CardP>
                    </CardCard>
                    <CardCard>
                        <CardIcon src={Icon2}/>
                        <CardH2>Tic Tac Toe </CardH2>
                        <CardP>Text Text</CardP>
                    </CardCard>
                    <CardCard>
                        <CardIcon src={Icon3}/>
                        <CardH2>Matching Game</CardH2>
                        <CardP>Text Text</CardP>
                    </CardCard>
                </CardWrapper>
            </CardContainer>
        </>
    )
}

export default Card
