
const message = () => {
    let number = Math.floor(Math.random()* 5);
    switch (number) {
        case 0:
            return 'Hello world';
            break;
        case 1:
            return 'The life is beautiful';
            break;
        case 2:
            return 'We are going step to step';
            break;
        case 3:
            return 'Never give up';
            break;
        default:
            return 'The family is first';
            break;

    }
}

console.log(message());

