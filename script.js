let xHRequest = new XMLHttpRequest();
xHRequest.open("GET", "https://restcountries.com/v3.1/all");
xHRequest.send();
xHRequest.onload = function () {
  let getData = JSON.parse(xHRequest.response);
  getAsiaCountries(getData);
  getPopulationLess(getData);
  printDetails(getData);
  totalPopulation(getData);
  usdCurrencyCountries(getData);
}


function getAsiaCountries(data)
{
  console.log("--- Asia Countries -------");
  const countriesData = data.filter((val)=>{
    return (val.region === "Asia")
  });

  countriesData.map((val)=>{
    console.log(val.name.common);
  })
}


function getPopulationLess(data)
{
  console.log("--- population less than 2 lakhs -------");
  const countriesData = data.filter((val)=>{
    return (val.population < 200000)
  });

  countriesData.map((val)=>{
    console.log(val.name.common);
  })
}

function printDetails(data)
{
  console.log("--- name, capital, flag -------");
  data.forEach((val)=>{
    console.log(`
    ${val.name.common} 
    ${val.capital}
    ${val.flag}
    `);
  });
}

function totalPopulation(data)
{
  console.log("--- totalPopulation -------");
  const population = data.reduce((acc,val,index,accArr)=>{
   acc.totalPopulation = acc.totalPopulation + val.population;
   return acc;
  },{totalPopulation:0});
  console.log(population.totalPopulation);
}

function usdCurrencyCountries(data)
{
  console.log("---Countries uses USD Currencies  -------");
  const countriesData = data.filter((val)=>{
    let getCurrency = val.currencies;
    return (getCurrency != undefined && val.currencies.USD!=undefined && val.currencies.USD.name == "United States dollar")
  });
  countriesData.map((val)=>{
    console.log(val.name.common);
  })
}


