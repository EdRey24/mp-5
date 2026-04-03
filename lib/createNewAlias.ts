"use server"

import {AliasProps} from "@/interfaces/AliasProps";
import getCollection, {POSTS_COLLECTION} from "@/lib/mongoDB";

export default async function createNewAlias(alias: string, url: string): Promise<AliasProps | null>{
    const newAlias = {
        alias: alias,
        url: url,
    }

    const aliasCollection = await getCollection(POSTS_COLLECTION);
    const result = await aliasCollection.insertOne(newAlias);
    
    if(!result.acknowledged){
        return null;
    }

    return {...newAlias, _id: result.insertedId.toHexString()};
}