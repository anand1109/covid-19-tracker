

 /* CovidAPI();*/

let countC = document.querySelector('.case');
let countA = document.querySelector('.active');
let countT = document.querySelector('.today');
let coronaD = document.querySelector('.death');
let recover = document.querySelector('.recovered');

// Create on AJAX Request
let xhr = new XMLHttpRequest();

// API FETCH
xhr.open('GET', "https://coronavirus-19-api.herokuapp.com/countries", true);

// http://covid19-india-adhikansh.herokuapp.com/states
// REQUEST SEND
xhr.send();

//RESPONSE REQUEST
deaths = undefined;
xhr.onload = () => {
    if (xhr.status === 200){
        let states = xhr.responseText;
        let indiaS = JSON.parse(states);
         let x = indiaS[2];
        console.log(x)
        countC.innerText = `${x.cases}`;
        countA.innerText = `${x.active}`;
        countT.innerText = `${x.todayCases}`;
        coronaD.innerText = `${x.deaths}`;
        recover.innerText = `${x.recovered}`;
    }};


















