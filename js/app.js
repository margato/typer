var modules = [
    'js/phrases.js',
    'js/timer.js',
    'js/countWords.js',
    'js/tools.js'
];

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $.when(
        $.getScript(modules[0], function (e) {
            setPhrase();
            logModule(modules[0].replace('.js', '').replace('js/', ''));
        })
    ).done(function(){
        var i;
        for (i = 1; i < modules.length; i++){
            $.getScript(modules[i]);
            logModule(modules[i].replace('.js', '').replace('js/', ''));
        }
    });
});

function logModule(module){
    console.log("Module '" + module + "' loaded");
}