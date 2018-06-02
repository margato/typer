$(document).ready(function() {
    $(function() {
        $.getScript('js/phrases.js', function() {
            logModule('phrases.js');
            setPhrase();
        });

        $.getScript('js/timer.js', function() {
            logModule('timer.js');
        });

        $.getScript('js/countWords.js', function() {
            logModule('countWords.js');
            countWords();
        });

        $.getScript('js/tools.js', function() {
            logModule('tools.js');
        });
    });

    $('[data-toggle="tooltip"]').tooltip();

});

function logModule(module){
    console.log("Module '" + module + "' loaded");
}