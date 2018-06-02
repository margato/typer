var phrase = $('#type').text();
var words = phrase.split(" ");

function getTotalWords(){
    return words.length;
}

function countWords(){
    var word;
    if (getTotalWords() === 1)
        word = "palavra";
    else
        word = "palavras";
    $('#words').text(words.length + " " + word);
}
