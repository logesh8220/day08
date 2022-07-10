//Print the following details name, capital, flag using forEach function
var request2=new XMLHttpRequest();
request2.open('GET','https://restcountries.com/v3.1/all');
request2.send();
request2.onload= function print() {
    var countryData2=JSON.parse(this.responseText);
    console.log(countryData2);
    let forE = countryData2.forEach(function(data){
        console.log(data.flags)
        console.log(data.name)
        console.log(data.capital)
    })
        
   
 }



//Get all the countries with a population of less than 2 lakhs using Filter function
var request2=new XMLHttpRequest();
request2.open('GET','https://restcountries.com/v3.1/all');
request2.send();
request2.onload= function print() {
    var countryData2=JSON.parse(this.responseText);
    console.log(countryData2);
   let filter = countryData2.filter(function(data){
      if(data.population < 200000){
        console.log(data.population)
      }
   })
        
   
}


//Get all the countries from Asia continent /region using Filter function
var request2=new XMLHttpRequest();
request2.open('GET','https://restcountries.com/v3.1/all');
request2.send();
request2.onload= function print() {
    var countryData2=JSON.parse(this.responseText);
    console.log(countryData2);
   let filter = countryData2.filter(function(data){
            
           if(data.continents =="Asia"){
            console.log(data)
           }
            
   }) 
}



//Print the total population of countries using reduce function
var request1=new XMLHttpRequest();
request1.open('GET', 'https://restcountries.com/v3.1/all');
request1.send();
request1.onload= function print() {
    var countryData2=JSON.parse(this.responseText);
    var filterdArray=countryData2.reduce((a,b)=>{
               return a+b.population
    },0)
     console.log(filterdArray);   
    
}



//Print the country which uses US Dollars as currency.
var request1=new XMLHttpRequest();
request1.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request1.send();
request1.onload= function print() {
    var countryData2=JSON.parse(this.responseText);
    var filterdArray=countryData2.filter((ele)=>{
        return ele.currencies[0].code==="USD";
    })
    console.log(filterdArray);
 
}

