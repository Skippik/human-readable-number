module.exports = function toReadable(numbers) {
    var ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    var numString = numbers.toString();

    if (numbers === 0) return "zero";

    if (numbers < 20) {
        return ones[numbers].trim();
    }

    if (numString.length === 2) {
        if (numString[1] === "0") return `${tens[numString[0]]}`;
        return `${tens[numString[0]]} ${ones[numString[1]]}`;
    }

    if (numString.length === 3) {
        if (numString[1] === "0" && numString[2] === "0")
            return `${ones[numString[0]].trim()} hundred`;
        else
            return `${ones[numString[0]].trim()} hundred ${toReadable(
                +(numString[1] + numString[2])
            ).trim()}`;
    }
};

