export const homeObjOne = {
    id: 'about', /*about section*/
    lightBg: false, 
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headLine: 'My name is Carlson Dultra.',
    description: 'I graduated Ryerson University in 2021, with a Bachelors degree in Computer Science.',
    buttonLabel: 'Inside Button',
    imgStart: false, /*changing which side image is on, left or right*/
    img: require('../../images/svg1.svg').default,
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
    description: 'Click the button below to see my completed projects.',
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
    description: 'Linkedin' +  '\n' + ' Hello',
    buttonLabel: 'Contact Me',
    imgStart: false, /*changing which side image is on, left or right*/
    img: require('../../images/svg1.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
}