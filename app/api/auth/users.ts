// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  username: string;
}

// Mock user data for demonstration
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
      // Simulate user login
      const { username, password } = req.body;

      // Simple validation (for demonstration purposes)
      const user = users.find((user) => user.username === username);

      if (user && password === 'password123') {
        // In a real app, you'd want to return a JWT or similar token
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
      break;
    case 'DELETE':
      // Simulate user logout (just for demonstration)
      res.status(200).json({ message: 'Logout successful' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
