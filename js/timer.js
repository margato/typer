var hasTyped = false;
var time = $('#time');
var input = $('#typing');
var speedLabel = $('#speed');
var speedWords, speedChars, misses = 0;

if (!hasTyped) {
    time.text("Comece a digitar para iniciarmos o cronômetro");
}

var seconds = 0;
var counting;

input.keyup(function (e){
    checkInput(e);
    if (input.val().toLowerCase() === phrases[randomIndex].toLowerCase()) {
        stopTimer(true);
    }
    if (!hasTyped) {
        time.text("Tempo: " + seconds + "s");
        counting =
            setInterval(function () {
                seconds += 0.01;
                time.text("Tempo: " + seconds.toFixed(2) + "s");
                speedWords = getTotalWords(input.val()) / seconds;
                speedChars = getTotalChars(input.val()) / seconds;
                speedLabel.html("Velocidade média: <br>" + speedWords.toFixed(2) + " palavras/s e " + speedChars.toFixed(2) + " caractere/s");
            }, 10);
    }
    hasTyped = true;
});

function checkInput(e){
    var typed = input.val().toLowerCase();
    var textToCompare = phrases[randomIndex].toLowerCase();
    if (typed == ''){
        input.removeClass("doingFine");
        input.removeClass("wrong");
    }
    if (textToCompare.startsWith(typed) && typed != ''){
        input.addClass("doingFine");
        input.removeClass("wrong");
    }
    if (!textToCompare.startsWith(typed) && typed != ''){
        //if(e.keyCode != 8)
        //    misses++;
        input.addClass("wrong");
        input.removeClass("doingFine");
        $('#misses-qnt').text(misses);
    }
}


function stopTimer(finish){
    clearInterval(counting);
    if (finish) {
        time.css('color', '#1af274');
        input.addClass('complete');
        $('#clear').addClass('complete-btn').prop('disabled', true);
        $('#restart').addClass('complete-btn');
        input.prop('disabled', true);
        input.removeClass("doingFine");
        input.removeClass("wrong");
    }
}