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
    //convert string numbers in number
    let numArray = numbers.split(delimiter).map(Number);
    //find negativer numbers 
    let negatives = numArray.filter(num => num < 0);
    //if found negative numbers then throw a error msg
    if (negatives.length) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    //findally return sum of numbers here
    return numArray.reduce((sum, num) => sum + num, 0);
}

try {
    //call the function here with different params
    let str = "";
    str = "1";
    //str = "1,5";
    //str = "1\n2,3";
    //str = "//;\n1;2";
    //str = "1,-2,3,-4";
    console.log(add(str));
} catch (e) {
    console.error(e.message);
}