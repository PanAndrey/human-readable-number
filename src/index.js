module.exports = function toReadable(nmb) {
    let arr = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        15: "fifteen",
        18: "eighteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        80: "eighty",
        100: "hundred"
    }

    let nmbArr = nmb.toString().split("");
    if (nmb < 100) {
        return aboveHundred(nmb);
    } else {
        if (nmbArr[1] == 0 && nmbArr[2] == 0) {
            return arr[nmbArr[0]] + " hundred"
        } else {
            return arr[nmbArr[0]] + " hundred " + aboveHundred(nmbArr.splice(1, 2).join(""));
        }
    }

    function aboveHundred(number) {
        let n = number.toString().split("");
        if (n[0] == 0) {
            if (n.length == 1) {
                return arr[n[0]];
            } else {
                n.splice(0, 1);
                number = n[0];
            }
        }
        if (number <= 13 || number == 15 || number == 18) {
            return arr[number];
        } else if (number > 13 && number < 20) {
            return arr[n[1]] + "teen";
        } else if (number >= 20 && number < 100) {

            if (n[0] == 2 || n[0] == 3 || n[0] == 4 || n[0] == 5 || n[0] == 8) {
                if (n[1] == 0) {
                    return arr[n[0] + "0"];
                } else {
                    return arr[n[0] + "0"] + " " + arr[n[1]];
                }
            } else if (n[1] == 0) {
                return arr[n[0]] + "ty";
            } else {
                return arr[n[0]] + "ty " + arr[n[1]];
            }
        } else if (number >= 100 && number <= 999) {
            return arr[n[0]] + "hundred";
        }
    }
}
