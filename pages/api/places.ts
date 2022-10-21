import { IPlace } from '../../app/types/plcae';
import mapImg from '../../assets/images/map.png'
import { NextApiRequest, NextApiResponse } from 'next';

const places: IPlace[] = [{
    slug: 'tokyo',
    description: 'lorem',
    distance: 10123,
    imagePath: 'http://localhost:3000/images/places/japan.jpeg',
    duration: '10',
    googleMapLink: 'link',
    location: {
        city: 'Japan',
        country: 'Tokyo'
    },
    mapImage: mapImg.src,
    raiting: 10
},
{
    slug: 'rome',
    description: 'lorem',
    distance: 7842,
    imagePath: 'http://localhost:3000/images/places/italy.jpg',
    duration: '8',
    googleMapLink: 'link',
    location: {
        city: 'Rome',
        country: 'Italy'
    },
    mapImage: mapImg.src,
    raiting: 7
}
]


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}