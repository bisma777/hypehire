// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  username: string;
}

const users: User[] = [
  { id: 1, username: 'jsmith' },
  { id: 2, username: 'adoe' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      // Get all users
      res.status(200).json(users);
      break;
      
    case 'POST':
      const { username, password } = req.body;
      const user = users.find((user) => user.username === username);
      if (user && password === 'password123') {
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
      break;
    case 'DELETE':
      res.status(200).json({ message: 'Logout successful' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
