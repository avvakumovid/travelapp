
import { places } from './index';
import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places.find(p => p.slug === req.query.slug))
}