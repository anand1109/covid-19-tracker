// INDIA API FETCH
/*async function CovidAPI() {


    try {
        const api_url = 'https://coronavirus-19-api.herokuapp/countries';
        const response = await fetch(api_url);
        if (response.status !== 200) {
            console.log(`Status Code: ${response.status}`);
            return;
        }
        const data = await response.json();
        const {
            cases,
            active,
            deaths,
            recovered
        } = data.find(covid => covid.country === 'India');*/

       /* document.getElementById('count-1').textContent = cases;
        document.getElementById('count-2').textContent = active;
        document.getElementById('count-3').textContent = deaths;
        document.getElementById('count-4').textContent = recovered;*/
   /* } catch (err) {
        console.log(`Fetch Error: ${err}`);
    }
};

CovidAPI();*/

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
         let x = indiaS[7];
        console.log(x)
        countC.innerText = `${x.cases}`;
        countA.innerText = `${x.active}`;
        countT.innerText = `${x.todayCases}`;
        coronaD.innerText = `${x.deaths}`;
        recover.innerText = `${x.recovered}`;
    }};


















