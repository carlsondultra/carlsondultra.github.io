import { Button } from '../ButtonElements';

export const homeObjOne = {
    id: 'about', /*about section*/
    lightBg: false, 
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headLine: 'My name is Carlson Dultra.',
    description: 'I graduated Ryerson University in 2021, with a Bachelors degree in Computer Science. I love programming and love listening to music.',
    buttonLabel: 'Inside Button',
    imgStart: false, /*changing which side image is on, left or right*/
    img: require('../../images/about.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'portfolio', /*portfolio section*/
    lightBg: true, 
    lightText: false,
    lightTextDesc: false,
    topLine: 'My Portfolio',
    headLine: 'Projects',
    description: <div> Throughout my career, i've completed various projects. <br></br><br></br>
    <Button to='Card' smooth={true}
    duration={500}
    spy={true}
    exact="true"
    offset={-80}>Click here to see my completed projects.</Button> 
    </div>,
    buttonLabel: 'My Projects',
    imgStart: true, /*changing which side image is on, left or right*/
    img: require('../../images/svg1.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'contact', /*contact section*/
    lightBg: true, 
    lightText: false,
    lightTextDesc: false,
    topLine: 'Contact me',
    headLine: 'Talk to me!',
    description: <div>
        <a href="https://www.linkedin.com/in/carlsondultra/">LinkedIn</a> <br></br>
        <a href="https://github.com/carlsondultra">Github</a> <br></br>
        <a href="mailto:carlson.dultra@ryerson.ca">Email</a> 
        </div>,
    buttonLabel: 'Contact Me',
    imgStart: false, /*changing which side image is on, left or right*/
    img: require('../../images/email.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
}