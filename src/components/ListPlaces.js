import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import ListPlacesItem from './ListPlacesItem';

function ListPlaces() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const axiosData = async () => {
            const result = await axios.get('http://localhost:8001/api/places')
            console.log('#1',result)
            console.log('#2', result.data);
            setList(result.data)
            
        }
        axiosData()
        
        
    }, [])
    
    return (
        <div>
            {
                list.map((place) => {
                    return (
                        <ListPlacesItem place={place} key={place.name} />
                    )
                })
            }
        </div>
    );
}

export default ListPlaces;