var quotes = [
    {quote: "“Be yourself; everyone else is already taken.”", qName: "― Oscar Wilde"},
    {quote: "“So many books, so little time.”", qName: "― Frank Zappa"},
    {quote: "“You only live once, but if you do it right, once is enough.”", qName: "― Mae West"},
    {quote: "“Be the change that you wish to see in the world.”", qName: "― Mahatma Gandhi"},
    {quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", qName: "― Albert Einstein"},
    {quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", qName: "― Dr. Seuss"},
    {quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", qName: "― Dr. Seuss"},
    {quote: "“If you tell the truth, you don't have to remember anything.”", qName: "― Mark Twain"},
    {quote: "“A friend is someone who knows all about you and still loves you.”", qName: "― 20th Century Fox"},
    {quote: "“A room without books is like a body without a soul.”", qName: "― 20th Century Fox"},
    {quote: "“A friend is someone who knows all about you and still loves you.”", qName: "― Elbert Hubbard"}  
];

var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
var removed
console.log(randomQuote.quote);
console.log(randomQuote.qName);
function generateQuote() {
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    var displayQuote = `<p class="pb-3">${randomQuote.quote}</p>
      <p>${randomQuote.qName}</p>`;
      document.getElementById("data").innerHTML = displayQuote;
        removeQuote();
}
function removeQuote() {
        removed = quotes.pop(randomQuote);
        console.log(removed);
}