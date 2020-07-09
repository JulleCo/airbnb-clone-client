import React, {
    useState,
    useEffect
} from 'react';
import '../App.css';
import axios from 'axios';
import PlaceListItem from './PlaceListItem';

function ListPlaces() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const axiosData = async () => {
            const result = await axios.get('http://localhost:8001/api/places')
            console.log('#1',result)

            setList(result.data)
            
        }
        axiosData()
        console.log('#2', setList);
        
    }, [])
    
    return (
        <div>
            {
                list.map((place) => {
                    return (
                        <PlaceListItem place={place} key={place.name} />
                    )
                })
            }
        </div>
    );
}

export default ListPlaces;