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
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8001/api/places')
            // const jsonResponse = await result.json()
            console.log(result)

            setList(result.data)
        }
        fetchData()
        // ListPlaces()
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