"use server"

import getCollection, {POSTS_COLLECTION} from "@/lib/mongoDB";

export default async function aliasAvailable(alias: string): Promise<boolean>{
    const aliasCollection = await getCollection(POSTS_COLLECTION);
    const data = await aliasCollection.findOne({alias});

    return data == null;
}