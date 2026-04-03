import {NextRequest, NextResponse} from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const {url, alias} = await request.json();

        if (!url || !alias) {
            return NextResponse.json({error: 'Missing required fields: name and email are required'}, {status: 400});
        }

        if (!URL.canParse(url)) {
            return NextResponse.json({error: 'Invalid URL'}, {status: 400});
        }

        const client = clientPromise;
        const db = client.db("aliases");
        const aliasCollection = db.collection("aliases");
        const existingAlias = await aliasCollection.findOne({alias});

        if (existingAlias) {
            return NextResponse.json({error: 'A URL with this alias already exists'}, {status: 409});
        }

        const newAlias = {
            alias,
            url,
        };

        const result = await aliasCollection.insertOne(newAlias);
        return NextResponse.json({
            message: "Alias created successfully",
            alias: {_id: result.insertedId, ...newAlias},
        });
    } catch (error) {
        console.error("Error creating alias:", error);
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
}