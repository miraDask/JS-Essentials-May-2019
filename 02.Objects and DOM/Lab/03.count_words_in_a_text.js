function solve(input) {
    let words = input[0]
        .split(/\W+/)
        .filter(x => x.length > 0);

    let wordsCounter = {};

    for (let word of words) {
        if (!wordsCounter.hasOwnProperty(word)) {
            wordsCounter[word] = 0;
        }

        wordsCounter[word]++;
    }

    console.log(JSON.stringify(wordsCounter));
}

solve(["Far too slow, you`re far too slow."])