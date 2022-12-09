// import React from 'react';
import './App.scss'
import Search from './components/search';
import Weather from './components/Weather';
import React, { useState ,useEffect } from 'react';

import { Fetch } from './utils/Fetch';

function App() {
  const [data_, setData_] = useState({});
  const [image, setImage] = useState("")
  const [bg, setBg] = useState("")
  const [name_ , setName_] = useState("")

  useEffect(() => {
    setImage('unknown');
    setBg('#B1B5D3');
  }, []);


  const searchClicked = async (location) => {

    const list = await Fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=8&units=metric&appid=529995e3c0aa4e4baefbb26284433d76`, "GET");
      if(list.status===200) {
        setData_(list?.data?.list);
        getWeather(list.data?.list[0]?.weather[0]?.id);
       
         setName_(list.data?.city?.name);
         console.log(list);
         console.log(list.data?.city?.name);
     
      }
      else {
        console.warn("Faild to load resources!");
        setData_([]); 
      }

  }
  function getWeather(id){
    if(id < 300){
        
        setImage("storm");
        setBg('#4C8EC1');


      }
    else if( id >= 300 && id <= 499){
      setImage("drizzle");
    setBg('#D2DBE3');

        }
    else if( id >= 500 && id <= 599)
    {
      setImage("rain");
      setBg('#559CB6');

        }
    else if( id >= 600 && id <= 699)
       {  
        setImage("snow");
        setBg('#A9DCEE');

        }
    else if( id >= 700 && id <= 799)
         {
          setImage("fog");

        }
    else if (id === 800) 
        {
          setImage("clear");
          setBg('#0048C7');
       
        }
    else if (id === 801)
        {
          setImage("partlycloudy");
          setBg('#C7E2EA');

           
        }
    else if (id > 801 && id <= 805)
         {
          setImage("mostlycloudy");
          setBg('#8EC5E6');

        
        }
    else 
        return {};
}

  return (
    <div className="app"  style={{backgroundColor: bg}}>

      <header className="app__header">
<Search  searchClicked={searchClicked} />
      </header>

      <main className="app__main">
      </main>
      <Weather currentWeather={data_[0]} image={image} name= {name_} />


    </div>
  );
}


export default App;
