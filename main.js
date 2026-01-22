

const randNum = () => Math.floor(Math.random() * 5) + 1;
console.log(randNum());


//returns a sentence based on the random number
const getSentence = (num) => {
    switch (num) {
        case 1:
            return `${wordOne} base sentence 1 ${wordTwo}!`;
            break;
        case 2:
            return `${wordOne} base sentence 2 ${wordTwo}!`;
            break;
        case 3:
            return `${wordOne} base sentence 3 ${wordTwo}!`;
            break;
        case 4:
            return `${wordOne} base sentence 4 ${wordTwo}!`
            break;
        case 5:
            return `${wordOne} base sentence 5 ${wordTwo}!`
            break;
        default:
            break;    
    }
}
console.log(getSentence(randNum()));
