var phrase;
var words;



function countWords(){
    var word;
    phrase = $('#type').text();
    words = phrase.split(" ");

    if (getTotalWords() === 1)
        word = "palavra";
    else
        word = "palavras";
    $('#words').text(words.length + " " + word);
}

function getTotalWords(){
    return words.length;
}
