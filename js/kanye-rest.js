const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data));
}

const displayQuotes = data => {
    const blockQuote = document.getElementById("blockqoute");
    blockQuote.innerText = data.quote;
}