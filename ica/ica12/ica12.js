const newBtn = document.querySelector('#js-new-quote').
addEventListener('click', getQuote);

// const answerBtn = document.querySelector('js-tweet').
// addEventListener('click', getQuote);

// let answer = document.querySelector
// ('js-answer-text');

const questionText = document.querySelector
('#js-quote-text');

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote(){
    //console.log('Test');

    try{
        const response = await fetch(endpoint);
        if (!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        // console.log(json);
        displayQuote(json['question']);
    }
    catch(err){
        console.log(err)
        alert('Failed to fetch new quote');
    }
    function displayQuote(question){
        const questionText= document.querySelector
        ('#js-quote-text');
        questionText.textContent = question;
    }
    function displayAnswer(answer){
        const answerText= document.querySelector
        ('#js-answer-text');
        answerText.textContent = answer;
    }
    
}


getQuote();