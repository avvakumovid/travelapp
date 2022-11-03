import { IPlace } from 'types/plcae';
import mapImg from '@/assets/images/map.png'
import { NextApiRequest, NextApiResponse } from 'next';

export const places: IPlace[] = [{
    _id: 'asd',
    slug: 'tokyo',
    description: 'Tokyo, officially the Tokyo Metropolis (東京都, Tōkyō-to), is the capital and largest city of Japan. Formerly known as Edo, its metropolitan area (spanning 13,452 square kilometres or 5,194 square miles) is the most populous in the world...',
    distance: 10123,
    imagePath: 'http://localhost:3000/images/places/japan.jpeg',
    duration: '10',
    location: {
        city: 'Tokyo',
        country: 'Japan',
    },
    raiting: 10
},
{
    _id: 'aqww1321d',
    slug: 'rome',
    description: 'Rome (Italian and Latin: Roma) is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale.',
    distance: 7842,
    imagePath: 'http://localhost:3000/images/places/italy.jpg',
    duration: '8',
    location: {
        city: 'Rome',
        country: 'Italy',
    },
    raiting: 7
}
]


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}