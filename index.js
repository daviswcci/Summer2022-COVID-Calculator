// start by initializing all variables / objects we need
let infected = 0;
let infectedRate = 0;
let interactions = 0;

// then, create functions based on what we need to achieve

// I put all the DOM manipulation into a single function. 
function Setup(){
    let infectedDe = document.getElementById("infectedDe");
    infectedDe.addEventListener("click", DecreaseInfected); // adding event listeners one at a time

    let infectedIn = document.getElementById("infectedIn");
    infectedIn.addEventListener("click", IncreaseInfected); // rinse repeat

    let rateDe = document.getElementById("rateDe");
    rateDe.addEventListener("click", DecreaseRate);

    let rateIn = document.getElementById("rateIn");
    rateIn.addEventListener("click", IncreaseRate);

    let interactionsDe = document.getElementById("interactionsDe");
    interactionsDe.addEventListener("click", DecreaseInteractions);

    let interactionsIn = document.getElementById("interactionsIn");
    interactionsIn.addEventListener("click", IncreaseInteractions);

    let runBtn = document.getElementById("graphBtn");
    runBtn.addEventListener("click", RunFiveWeeks); 
}
Setup(); // calling the function

// DisplayText is useful because it handles updating all of the text elements once, and I can call it every time I want to update text.
function DisplayText(){
    let initText = document.getElementById("initText");
    initText.innerText = "Initial Infected: " + infected;
    let rateText = document.getElementById("rateText");
    rateText.innerText = "Infection Rate: " + infectedRate + "%";
    let interactionsText = document.getElementById("interactionsText");
    interactionsText.innerText = "Interactions Per Week: " + interactions;
}   

// functions for changing our values
function IncreaseInfected(){
    infected++;
    DisplayText();
}

function DecreaseInfected(){
    if(infected > 0){
        infected--;
        DisplayText();
    }
}

function IncreaseRate(){
    if(infectedRate < 100){ //we can only increase when the rate is less than 100
        infectedRate++;
        DisplayText();
    }
}

function DecreaseRate(){
    if(infectedRate > 0){
        infectedRate--;
        DisplayText();
    }

}

function IncreaseInteractions(){
    interactions++;
    DisplayText();
}

function DecreaseInteractions(){
    if(interactions > 0){
        interactions--;
        DisplayText();
    }
}

//calculates the number infected after a number of weeks
function CalculateInfected(weeks){
    let inf = infected; // initialize a new, temporary variable
    let i = 0;
    do{
        inf = inf + Math.ceil(inf * interactions * (infectedRate / 100));
        i++ // fancy math
    }
    while(i < weeks); // ensuring we only run as many times as we need to for a given week
    return inf; // return number infected
}

// this will create a summary after each week for 5 weeks, and append them to the document.
function RunFiveWeeks(){
    let graphContainer = document.getElementById("graph");
    graphContainer.innerHTML = ""; // this clears all previous children elements
    for(let i = 1; i <= 5; i++){
        let inf = CalculateInfected(i);
        let pElement = document.createElement("p"); // creates a new paragraph element
        pElement.innerText = "After " + i + " Weeks:" + "\n" + inf + " infected"; //adds text
        graphContainer.append(pElement); // adds it to the document
    }
}