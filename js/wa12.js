const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);

const questionTxt = document.querySelector('#js-quote-text');

async function getQuote() {
    try{
        const joke = fetch('https://icanhazdadjoke.com/',{
            headers: {
                "Accept": "application/json"
            }
        })
        const result = await joke.text();
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
}

