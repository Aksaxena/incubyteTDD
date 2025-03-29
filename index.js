function add(numbers) {
    //check numer is present or not
    if (!numbers) return 0;
    //define possible delimiter
    let delimiter = /,|\n/;
    //match delimiters in numbers
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
}