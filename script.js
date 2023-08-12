

async function weatherData(){

    //const api_geo = "http://api.openweathermap.org/geo/1.0/direct?q=";
    const api_weather = "https://api.openweathermap.org/data/2.5/weather?q=";
    const api_key = "640535654e67f478602e4d33c98a6724";
    const divElement01 = document.querySelector('.container02');
    
        let location = document.getElementById("inputlocation").value;
        let test = (api_weather+location+"&appid="+api_key);
        let response = await fetch(test);
        var data = await response.json();
        let icon01 = data.weather[0]?.icon;
        console.log(data)
        let current01src="https://openweathermap.org/img/wn/"+icon01+"@2x.png";
        
        divElement01.classList.toggle('background');
        document.getElementById("citylocation").innerHTML = data.name;
        document.getElementById("country").innerHTML = ", "+data.sys.country;
        document.getElementById("currenttemp").innerHTML = "Current Temp:"+((((data.main.temp)-273.15)*(9/5)+32).toFixed(0))+" \xB0F";
        document.getElementById("current01").src= current01src;
        document.getElementById("current01description").innerHTML = data.weather[0]?.description;
      
    }

    document.addEventListener('keydown',function(event){
        //event.preventDefault();
        const pressedKey=event.key;
    
        if (pressedKey==='Enter'){
            console.log("enter pressed");
            weatherData();
        }

    });