import { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
    const [hotelImages, setHotelImages] = useState([]);

    useEffect(() => {
        const fetchHotelImages = async () => {
        try {
            const response = await axios.get('https://api.pexels.com/v1/search', {
            headers: {
                Authorization: 'YOUR_PEXELS_API_KEY',
            },
            params: {
                query: 'hotel',
                per_page: 12,
            },
            });
            setHotelImages(response.data.photos);
        } catch (error) {
            console.error('Error fetching hotel images:', error);
        }
        };

        fetchHotelImages();
    }, []);

    return (
        <div>
        {hotelImages.map((image) => (
            <img key={image.id} src={image.src.medium} alt={image.photographer} />
        ))}
        </div>
    );
    };

export default Test;
