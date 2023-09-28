const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
const toggle=document.querySelector(".toggle");
var fahren=1;
var cel=1;
var check1=1;


        async function checkweather(cityval){
            const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=938932f0aae41b052713d9a2d3a2ae84`);
            //error occured
            if(res.status==404)
            {
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
                document.querySelector(".toggle").style.display="none";
            }
            else{
                var data=await res.json();
            document.querySelector(".city").innerHTML=data.name;
            fahren=  Math.round(1.8*data.main.temp +32)+"°F";
            cel=Math.round(data.main.temp)+"°C";
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
            document.querySelector(".description").innerHTML=data.weather[0].description;

            if(data.weather[0].main=="Clouds")
            {
                weathericon.src="images/clouds.png";
            }
            else  if(data.weather[0].main=="Rain")
            {
                weathericon.src="images/rain.png";
            }
            else  if(data.weather[0].main=="Clear")
            {
                weathericon.src="images/clear.png";
            }
            else  if(data.weather[0].main=="Drizzle")
            {
                weathericon.src="images/dizzle.png";
            }
            else  if(data.weather[0].main=="Mist")
            {
                weathericon.src="images/mist.png";
            }
            
            document.querySelector('.weather').style.display="block";
            document.querySelector(".error").style.display="none";
            document.querySelector(".toggle").style.display="block";

        }
       
            }
            searchbtn.addEventListener("click",()=>{
      //calling function
     checkweather(searchbox.value);
     
        })
        //for togglr
        toggle.addEventListener("click",()=>{
            //calling function
          
             if(check1==1)
             { check1=0;
                document.querySelector(".temp").innerHTML=fahren;
             }
             else
             {
                check1=1;
                document.querySelector(".temp").innerHTML=cel;  
             }
           
              })

   