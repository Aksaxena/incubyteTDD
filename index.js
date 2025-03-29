function add(numbers) {
    //check numer is present or not
    if (!numbers) return 0;
    //define possible delimiter
    let delimiter = /,|\n/;
    //match delimiters in numbers
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    //check delimeters found or not. if found then find the delimiter and numbers
    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        numbers = numbers.slice(customDelimiterMatch[0].length);
    }
}