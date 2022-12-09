import React, { Component , useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';

const Search = (props) => {
    const [location, setLocation] = useState("");

    const FindWeatherClicked = () => props.searchClicked(location)
    

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
                                           value={location}
                                           onChange = {(e)=> setLocation(e.target.value)}
                                           required
                                           
                                           />
                                     
                                                    <Button variant="outline-success"
                                                     onClick={FindWeatherClicked}> Find Weather</Button>

                                    </div>

                                </form>
                             

                </div>

            </div>

        </div>

)

    
}

export default Search;
