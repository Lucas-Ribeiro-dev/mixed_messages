

const randNum = () => Math.floor(Math.random() * 5) + 1;
console.log(randNum());


//returns a sentence based on the random number
const getSentence = (num) => {
    switch (num) {
        case 1:
            return `Between ${wordOne} and the ${wordTwo}, there is a choice only you can make.`;
            break;
        case 2:
            return `${wordOne} is what remains when you face the ${wordTwo}.`;
            break;
        case 3:
            return `Sometimes, ${wordOne} appears just before the ${wordTwo}.`;
            break;
        case 4:
            return `Without ${wordOne}, no step leads to the ${wordTwo}.`
            break;
        case 5:
            return `${wordOne} doesn’t stop the ${wordTwo}, but it changes how you reach it.`
            break;
        default:
            break;    
    }
}
console.log(getSentence(randNum()));
