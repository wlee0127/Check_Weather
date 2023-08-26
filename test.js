async function test(){

    const api_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
    const api_weather = "https://api.openweathermap.org/data/2.5/weather?q=";
    const api_key = "640535654e67f478602e4d33c98a6724";
    const location = "new york";
    
    let future = (api_forecast+location+"&appid="+api_key);
        let response01 = await fetch(future);
        var data01 = await response01.json();
        //console.log(data01);
        
        maxtempArray=[];
        maxtempResult=[];
       

        for (let i = 0; i <=39 ; i++) {
            maxtempArray[i]=data01.list[i].main.temp_max;
          } 
        console.log(maxtempArray);
    
            maxtempArray.splice(0,7);
         
          console.log(maxtempArray)

        for (let i=0; i<maxtempArray.length; i+=8){
                maxtempResult.push([maxtempArray[i],maxtempArray[i+1],maxtempArray[i+2],maxtempArray[i+3],maxtempArray[i+4],maxtempArray[i+5],maxtempArray[i+6],maxtempArray[i+7]]);
        }
        console.log(maxtempResult)
        
        
        const max = Math.max(...maxtempResult[0]);

        console.log(max)
       
}
test()