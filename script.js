const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button"),
    authorName = document.querySelector(".name"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter")


function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerHTML = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerHTML = result.content;
        authorName.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quote";
        quoteBtn.classList.remove("loading");
    })
}

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerHTML);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML} - ${authorName.innerHTML}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 2000);
}


function getData() {
    url = "https://api.github.com/users";

    fetch(url).then(res => res.json()).then(result => {
        console.log(result);
    })
}

getData();

function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"Akshay123","salary":"123","age":"23"}'
    params = {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    }

    fetch(url, params).then(res => res.json()).then(result => {
        console.log(result);
    })
}

postData();