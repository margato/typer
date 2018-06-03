var phrases = [
    'Paes é o prefeito mais feliz do mundo, que dirige a cidade mais importante do mundo e da galáxia. Por que da galáxia? Porque a galáxia é o Rio de Janeiro. A via Láctea é fichinha perto da galáxia que o nosso querido Eduardo Paes tem a honra de ser prefeito.',
    'Comprar alimento. É, ué!',
    'Faz tempo. É, ué. Não, por causo de ser ator e ser acusado e ser acusado pelos pensamentos que se fala as perguntas erradas.',
    'Eu sobrevivo assim... Por mal de se trazer as maldições... Dos próprios que se merecem, pensar o próprio mau para ele...',
    'Quero dizer para vocês que, de fato, Roraima é a capital mais distante de Brasília, mas eu garanto para vocês que essa distância, para nós do Governo Federal, só existe no mapa. E aí eu me considero hoje uma roraimada, roraimada, no que prova que eu estou bem perto de vocês.',
    'Imagina um cara sendo acusado de suicídio, e não tinha sido ele o assassino, o que a família do moço quer? Que ele seja morto!',
    'Mas é tudo criptografado, com... 526 terabytes de encription, pá ninguém entender o que é trivial',
    'SWAT, Los Angeles, Estados Unidos.',
    'Fiz uma baguncinha dentro da Califórnia, mandei quass mil bandido pro caixão.',
    'Eu estou saudando a mandioca!',
    'Não renunciarei!',
    'Se cria vergonha na sua cara, se toma um decumento. Se cria vergonha na sua cara, e vai se procurar trabalhar.',
    'A única coisa boa do Maranhão é o presídio de Pedrinhas.',
    'Eu não sou preconceituoso!',
    'Mas... 4 pra 13 dá sete... pagam... quanto é que paga? Depois do furacão... Aliás 4 pra 13 dá 9... eu tô pensando no furacão Ka... o furacão não... em Fugujima... Como é que chama... no Japão... O tsunami...'
];


var author = [
    '- Rousseff, Dilma',
    '- Cego, Galo',
    '- Cego, Galo',
    '- Cego, Galo',
    '- Rousseff, Dilma',
    '- da Silva, Lula',
    '- Gomes, Ciro',
    '- da SWAT, Mike',
    '- da SWAT, Mike',
    '- Rousseff, Dilma',
    '- Temer, Michel',
    '- Cego, Galo',
    '- Bolsonaro, Jair',
    '- Bolsonaro, Jair',
    '- Rousseff, Dilma'
];
var tip = $('#tip');
var tips = [
    'A cor do texto indica se você está digitando corretamente!',
    'Não se preocupe com letras maiúsculas/minúsculas, apenas com os sinais de pontuação e acentuação!',
    'Recomende novas utilidades neste <a href="https://github.com/Margato/typer">repositório</a>!'
];

setTip();

function setTip(){
    var i = Math.floor(Math.random() * tips.length);
    tip.html(tips[i]);
    setInterval(function(){
        i++;
        if (i == tips.length)
            i = 0;
        tip.html(tips[i]);
    }, 10000);
}

var randomIndex = Math.floor(Math.random() * phrases.length);
var left = $('#left');
var right = $('#right');

function setPhrase(){
    $('cite').text(author[randomIndex]);
    $('#type').text(phrases[randomIndex]);
    $('#typing').attr("placeholder", phrases[randomIndex]);
}

right.click(function(){
    if (randomIndex === phrases.length - 1)
        randomIndex = 0;
    else
        randomIndex += 1;
    restartGame();
    setPhrase();
    countWords();
});

left.click(function(){
    if (randomIndex === 0)
        randomIndex = phrases.length - 1;
    else
        randomIndex -= 1;
    restartGame();
    setPhrase();
    countWords();
});
