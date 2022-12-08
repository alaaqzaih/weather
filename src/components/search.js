import React, { Component , useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';

const Search = () => {
    const [search, setSearch] = useState("london");
    const [data, setData] = useState([]);
    const [input, setInput] =useState("");
    let componentMounted = true;

    useEffect(()=> {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=529995e3c0aa4e4baefbb26284433d76
            `);
            if(componentMounted){
                setData(await response.json());
                console.log(data)
            }
            return () => {
                componentMounted = false;
            }
        }
        fetchWeather();
    }, [search]);

return(

     <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
              
                                <form >
                                    <div class="input-group  w-300 mx-auto">
                                        <input type="search" 
                                        class="form-control"
                                         placeholder="Search City"
                                          aria-label="Search City"
                                           aria-describedby="basic-addon2"
                                           name='search'
                                           value={input}
                                           onChange = {(e)=> setInput(e.target.value)}
                                           required
                                           
                                           />
                                        {/* <button type='submit' class="input-group-text" id="basic-addon2">
                                           <h1> Find weather</h1>
                                        </button> */}
                                                    <Button variant="outline-success">Find Weather</Button>

                                    </div>

                                </form>
                             

                </div>

            </div>

        </div>

)

    
}

export default Search;
