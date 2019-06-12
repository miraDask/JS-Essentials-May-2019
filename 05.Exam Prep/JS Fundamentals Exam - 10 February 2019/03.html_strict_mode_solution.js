function solve(input) {
    let text = [];
    let validatingPattern = /^(<([\d\w]+)>).+(<\/\2>)$/;
    let secondaryValidation = /.*?(<([\d\w]+)>).+(<\/\2>).*/;

    const removeTags = function (line, match) {
        return line.replace(match[1], '')
                   .replace(match[3], '');
    };

    input.forEach(line => {
        let match = line.match(validatingPattern);
        if (match) {
            line = removeTags(line, match);
            match = secondaryValidation.exec(line);

            while (match) {
                line = removeTags(line, match);
                match = secondaryValidation.exec(line);
            }
            text.push(line);
        }
    });

    console.log(text.join(" "));
}
