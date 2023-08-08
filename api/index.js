import axios from "axios";

export const getPlacesData = async () => {
    try{
        const {data : {data}} = await axios.get(
            `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
            //The params should be inside an object
            {
                params: {
                    bl_latitude: '35.86672489145732',
                    tr_latitude: '36.13692893995489',
                    bl_longitude: '-79.00764996066233',
                    tr_longitude: '-78.76217196923287',
                    restaurant_tagcategory_standalone: '10591',
                    restaurant_tagcategory: '10591',
                    limit: '30',
                    currency: 'USD',
                    open_now: 'false',
                    lunit: 'km',
                    lang: 'en_US'
                },
                headers: {
                    'X-RapidAPI-Key': '4e9a740819msh52914434c7afc4bp19f060jsn50d97f0b9916',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                },
            }
        );
        return data;
    }
    catch (error) {
        return null
    }
}