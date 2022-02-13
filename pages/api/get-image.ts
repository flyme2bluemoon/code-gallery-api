import { NextApiRequest, NextApiResponse } from 'next';

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const api_res = await fetch(`https://github.com/${request.query.fullname}`)
        .then(data => data.text())
        .then(text => {
            const og_regex = new RegExp(`https:\/\/opengraph\.githubassets\.com\/.*\/${request.query.fullname}`);
            const matches = text.match(og_regex);
            return matches[0];
        });
    response.status(200).send(api_res);
}