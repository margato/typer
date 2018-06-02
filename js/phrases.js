var phrases = [
    'Paes é o prefeito mais feliz do mundo, que dirige a cidade mais importante do mundo e da galáxia. Por que da galáxia? Porque a galáxia é o Rio de Janeiro. A via Láctea é fichinha perto da galáxia que o nosso querido Eduardo Paes tem a honra de ser prefeito',
    'Comprar alimento. É, ué!',
    'Faz tempo. É, ué. Não, por causo de ser ator e ser acusado e ser acusado pelos pensamentos que se fala as perguntas erradas.',
    'Quero dizer para vocês que, de fato, Roraima é a capital mais distante de Brasília, mas eu garanto para vocês que essa distância, para nós do Governo Federal, só existe no mapa. E aí eu me considero hoje uma roraimada, roraimada, no que prova que eu estou bem perto de vocês.',
    'Imagina um cara sendo acusado de suicídio, e não tinha sido ele o assassino, o que a família do moço quer? Que ele seja morto!',
    'Mas é tudo criptografado, com... 526 terabytes de encription, pá ninguém entender o que é trivial',
    'SWAT, Los Angeles, Estados Unidos.',
    'Fiz um baguncinha dentro da California, mandei quass mil bandido pro caixão.'
];


var author = [
    '- Rousseff, Dilma',
    '- Cego, Galo',
    '- Cego, Galo',
    '- Rousseff, Dilma',
    '- da Silva, Lula',
    '- Gomes, Ciro',
    '- da SWAT, Mike',
    '- da SWAT, Mike'
];

var randomIndex = Math.floor(Math.random() * phrases.length);

function setPhrase(){
    $('cite').text(author[randomIndex]);
    $('#type').text(phrases[randomIndex]);
}
