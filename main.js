
const randNum = () => Math.floor(Math.random() * 5) + 1;
console.log(randNum());

//generate the words to be used in the sentences
const getWords = () => {
    const group1 = ['Silence', 'Courage', 'Time', 'Fear', 'Hope']
    const group2 = ['the unknown', 'the end', 'the horizon', 'the darkness', 'the truth'];

    let wordOne = group1[randNum() - 1];
    let wordTwo = group2[randNum() - 1];

    return [wordOne, wordTwo];
}

const result = getWords();
const wordOne = result[0];
const wordTwo = result[1];


//returns a sentence based on the random number
const getSentence = (num) => {
    switch (num) {
        case 1:
            return `Between ${wordOne} and ${wordTwo}, there is a choice only you can make.`;
            break;
        case 2:
            return `${wordOne} is what remains when you face ${wordTwo}.`;
            break;
        case 3:
            return `Sometimes, ${wordOne} appears just before ${wordTwo}.`;
            break;
        case 4:
            return `Without ${wordOne}, no step leads to ${wordTwo}.`
            break;
        case 5:
            return `${wordOne} doesn’t stop ${wordTwo}, but it changes how you reach it.`
            break;
        default:
            break;    
    }
}
console.log(getSentence(randNum()));
