import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import ListPlacesItem from './ListPlacesItem';
import SearchBar from '../components/SearchBar';
import MsgComponent from '../components/MsgComponent';
import Footer from '../components/Footer';


function ListPlaces() {
    const [list, setList] = useState([]);

    const [cityName, setCityName] = useState('');

    useEffect(() => {
        const axiosData = async () => {
            const result = await axios.get(`http://localhost:8001/api/places?city=${cityName}`)
            console.log('#1',result)
            console.log('#2', result.data);
            setList(result.data)
            
        }
        axiosData()
        
        
    }, [])

    return (
        <div className ="placeList">
            <SearchBar setCityName={setCityName} />
            <div className ="placeList_appart">
                <h2 className="placeList_appart_titre">Inutile de s'éloigner loin pour trouver ce qui compte</h2>
                <div className="placeList_appart_item">{
                    list.map((place) => {
                        return (
                            <ListPlacesItem place={place} key={place.name}/>
                        )
                    })
                }</div>
            </div>
            <MsgComponent />
            <Footer />
        </div>
    );
}
    
   

export default ListPlaces;