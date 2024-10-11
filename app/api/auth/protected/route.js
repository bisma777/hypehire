import { getSession } from 'next-auth/react';

export async function GET(req) {
    const session = await getSession({ req });

    if (session) {
        return Response.json({ protected: true });
    } else {
        return Response.json({ protected: false });
    }
}