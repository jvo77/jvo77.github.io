const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
let change = document.getElementById("ptag");
const questionTxt = document.querySelector('#js-quote-text');

async function getQuote() {
    try{
        const joke = await fetch('https://icanhazdadjoke.com/',{
            headers: {
                "Accept": "application/json"
            }
        })
        const result = await joke.json();
        displayQuote(result);
        displayQuote(result['joke']);

        let color = myFunc();
        changeColor(color);

    }
    catch(err) {
        console.log(err);
    }
}

function displayQuote(question) {
    questionTxt.textContent = question;
}

function changeColor(color) {
    document.body.style.background = color;
}

function myFunc() {
    let colorChange = ['cadetblue', 'khaki', 'seagreen','pink'];
    return colorChange[Math.floor(Math.random() * 4)];
} 


getQuote();