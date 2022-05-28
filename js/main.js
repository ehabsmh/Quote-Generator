var quoteElement = document.getElementById("quoteElement");
var authorElement = document.getElementById("authorElement");

var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“Without music, life would be a mistake.”",
    author: "― Friedrich Nietzsche, Twilight of the Idols",
  },
  {
    quote: "“It does not do to dwell on dreams and forget to live.”",
    author: "― J.K. Rowling, Harry Potter and the Sorcerer's Stone",
  },
  {
    quote:
      "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    author: "― Mark Twain",
  },
  {
    quote:
      "“We are all in the gutter, but some of us are looking at the stars.”",
    author: "― Lady Windermere's Fan",
  },
  {
    quote:
      "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
    author: "― William Shakespeare, As You Like It",
  },
];

function changeQuote() {
  var randomQuotes = Math.floor(Math.random() * quotes.length);

  quoteElement.innerHTML = quotes[randomQuotes].quote;
  authorElement.innerHTML = quotes[randomQuotes].author;
}
