let quoteButton = document.getElementById("quote-button");

quoteButton.addEventListener("click", () => {
    let stoicQuoteURL = "https://stoicquotesapi.com/v1/api/quotes/random";
    
    fetch(stoicQuoteURL)
        .then((response => response.json()))
        .then((data) => {
            console.log(data)
            document.getElementById("quote-text").innerHTML = data.body
            document.getElementById("quote-author").innerHTML = data.author
        })
})