import { NextApiRequest, NextApiResponse } from 'next';

export default async (request: NextApiRequest,response: NextApiResponse) => {
    const res = await fetch("https://api.github.com/users/flyme2bluemoon/repos", {
        method: "GET",
        headers: {
            "Authorization": `token ${process.env.GH_API_KEY}`
        }
    }).then(data => data.json());
    response.status(200).json(res);
}