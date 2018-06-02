var hasTyped = false;
var time = $('#time');
var input = $('#typing');
var speedLabel = $('#speed');
var speed;

if (!hasTyped) {
    time.text("Comece a digitar para iniciarmos o cronômetro");
}

var seconds = 0;
var counting;

input.keyup(function (e){
    if (input.val().toLowerCase() === phrases[randomIndex].toLowerCase()) {
        stopTimer(true);
    }
    if (!hasTyped) {
        time.text("Tempo: " + seconds + "s");
        counting =
            setInterval(function () {
                seconds += 0.01;
                time.text("Tempo: " + seconds.toFixed(2) + "s");
                speed = getTotalWords() / seconds;
            }, 10);
    }
    hasTyped = true;
});

function stopTimer(finish){
    clearInterval(counting);
    if (finish) {
        time.css('color', '#1af274');
        input.addClass('complete');
        $('#clear').addClass('complete-btn').prop('disabled', true);
        $('#restart').addClass('complete-btn');
        input.prop('disabled', true);
        speedLabel.text("Velocidade média: " + speed.toFixed(2) + " palavras/s");
    }
}