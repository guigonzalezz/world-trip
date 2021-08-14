import { NextApiRequest, NextApiResponse } from "next";
import info from './paises.json'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json(info);
  } else {
    res.status(404).end('Not found')
  }
}