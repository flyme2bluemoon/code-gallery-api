import { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const api_res = fs.readFileSync('sample.json', 'utf8');;
    response.status(200).json(api_res);
}