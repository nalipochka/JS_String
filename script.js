function stringLengthCompare(str1, str2) {
    if (str1.length > str2.length)
        return 1;
    else if (str1.length < str2.length)
        return -1;
    else
        return 0;
}

function toUpperFisrtSymbol(str) {
    newStr = "";
    for (let symb in str) {
        if (symb == 0)
            newStr += str[symb].toUpperCase();
        else
            newStr += str[symb];
    }
    return newStr;
}

function countVowels(str) {
    vowels = "eyuioa";
    count = 0;
    for (let symb of str) {
        for (let vow of vowels) {
            if (symb == vow)
                count++;
        }
    }
    return count;
}

function spamCheck(str) {
    spamWords = "100% безкоштовно,збільшення продажів,тільки сьогодні,не видаляйте,ххх";
    for (let word of spamWords.split(",")) {
        if (str.toLowerCase().indexOf(word) != -1)
            return true;
    }
    return false;
}

function truncateString(str, n) {
    newStr = "";
    for (let i = 0; i < n; i++) {
        newStr += str[i];
    }
    newStr += "...";
    return newStr;
}

function isPolindrom(str) {
    let len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++) {
        if (str[i].toLowerCase() != str[str.length - i - 1].toLowerCase())
            return false;
    }
    return true;
}

function countWordsInString(str) {
    tmp = str.split(" ");
    return tmp.length;
}

function longestWord(str) {
    tmp = str.split(" ");
    max = tmp[0];
    for (let word of tmp) {
        if (word.length > max.length)
            max = word;
    }
    return max;
}

function avgWordLength(str){
    sum = 0;
    tmp = str.split(" ");
    for(let word of tmp){
        sum +=word.length;
    }
    return sum / tmp.length;
}

function searchSymbol(str, s){
    pos = 0;
    buff = "";
    count = 0;
    while(true){
        let foundPos = str.indexOf(s, pos);
        if(foundPos == -1) {
            break;
        }

        buff +=`${foundPos}, `;
        count++;
        pos = foundPos + 1;
    }
    return `indices:${buff}. count: ${count}`;
}

// 1
document.write("<p>Example 1</p>");
document.write(`<p>${stringLengthCompare('qwerty', `zxcvbn`)}</p>`);
document.write(`<hr>`);
//2
document.write("<p>Example 2</p>");
document.write(`<p>before: qwerty ---> after ${toUpperFisrtSymbol("qwerty")}</p>`);
document.write(`<hr>`);
//3
document.write("<p>Example 3</p>");
str = "aaaqwertyuiopasdfghjklzxcvbnm"
document.write(`<p>count vowels in ${str}: ${countVowels(str)}</p>`);
document.write(`<hr>`);
//4
document.write("<p>Example 4</p>");
str = "Переходьте на наш сайт, ТіЛьКи СьогоДНі на вас чекає виграш 100 000 грн";
document.write(`<p>string: ${str} ---> spam check ${spamCheck(str)}</p>`);
document.write(`<hr>`);
//5
document.write("<p>Example 5</p>");
str = "Hello, world. I love programming";
document.write(`<p>string: ${str} ---> short string: "${truncateString(str, 12)}" </p>`);
document.write(`<hr>`);
//6
document.write("<p>Example 6</p>");
str = "заказ";
document.write(`<p>string: ${str} ---> is polindrom: "${isPolindrom(str)}" </p>`);
document.write(`<hr>`);
//7
document.write("<p>Example 7</p>");
str = "Hello, world. I love programming";
document.write(`<p>string: ${str} ---> count words: "${countWordsInString(str)}" </p>`);
document.write(`<hr>`);
//8
document.write("<p>Example 8</p>");
str = "Hello, world. I love programming";
document.write(`<p>string: ${str} ---> longest words: "${longestWord(str)}" </p>`);
document.write(`<hr>`);
//9
document.write("<p>Example 9</p>");
str = "Hello, world. I love programming";
document.write(`<p>string: ${str} ---> average word length: "${avgWordLength(str)}" symbols </p>`);
document.write(`<hr>`);
//10
document.write("<p>Example 10</p>");
str = "Hello, world. I love programming";
document.write(`<p>string: ${str} ---> ${searchSymbol(str, `o`)}</p>`);
document.write(`<hr>`);

