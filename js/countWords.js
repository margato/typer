var phrase = $('#type');



function countWords(){
    var word;
    if (getTotalWords(phrase.text()) === 1)
        word = "palavra";
    else
        word = "palavras";
    $('#words').text(getTotalWords(phrase.text()) + " " + word + " e " + getTotalChars(phrase.text()) + " caracteres");
}


function getTotalWords(input){
    var words = input.split(" ");
    return words.length;
}

function getTotalChars(input){
    for (var i = 0; i < input.length; i++) {
    }
    return i;
}
