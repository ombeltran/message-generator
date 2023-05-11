
const message = (name) => {
    let number = Math.floor(Math.random()* 5);
    switch (number) {
        case 0:
            return name + ', you are wonderful';
            break;
        case 1:
            return name + 'remenber always that the life is beautiful';
            break;
        case 2:
            return `Each project must be developed step by step, ${name} be pacient.` ;
            break;
        case 3:
            return `${name} never give up`;
            break;
        default:
            return `${name} keep in mind that the family is first`;
            break;

    }
}

console.log(message('Oscar'));

