var input = $('#typing');
var clear = $('#clear');
var restart = $('#restart');
var time = $('#time');

clear.click(function(){
    input.val("");
});

restart.click(function(){
    input.val("");
    seconds = 0;
    console.log('game restarted');
    stopTimer(false);
    time.text("Comece a digitar para iniciarmos o cronômetro");
    time.css('color', 'white');
    input.removeClass('complete');
    restart.removeClass('complete-btn');
    clear.removeClass('complete-btn');
    clear.prop('disabled', false);
    input.prop('disabled', false);
    hasTyped = false;
});