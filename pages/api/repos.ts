import { NextApiRequest, NextApiResponse } from 'next';

export default async (request: NextApiRequest, response: NextApiResponse) => {
    let api_res = undefined;
    const headers = {
        "Authorization": `token ${process.env.GH_API_KEY}`
    }

    if (request.query.name) {
        api_res = await fetch("https://api.github.com/repos/flyme2bluemoon/Advent-of-Code-2021/languages", {
            method: "GET",
            headers: headers
        }).then(data => data.json());
    } else {
        api_res = await fetch("https://api.github.com/users/flyme2bluemoon/repos", {
            method: "GET",
            headers: headers
        }).then(data => data.json());
    }
    
    response.status(200).json(api_res);
}
