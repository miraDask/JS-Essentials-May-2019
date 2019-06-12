function solve(text) {
    let spitedText = text.split((/\W+/));
    let textToUppercaseWords = spitedText
        .filter(x => x !== '')
        .map(x => x.toUpperCase());

    console.log(textToUppercaseWords.join(', '));
}
solve('hello')