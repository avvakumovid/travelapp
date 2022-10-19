import { IPlace } from '../../app/types/plcae';
import japanImg from '../../assets/images/japan.jpg'
import mapImg from '../../assets/images/map.png'
import { NextApiRequest, NextApiResponse } from 'next';

const places: IPlace[] = [{
    slug: 'tokyo',
    description: 'lorem',
    distance: 10,
    imagePath: japanImg.src,
    duration: '10',
    googleMapLink: 'link',
    location: 'Japan, Tokyo',
    mapImage: mapImg.src,
    raiting: 10
}]


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}