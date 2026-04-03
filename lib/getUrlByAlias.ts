import getCollection, {POSTS_COLLECTION} from "@/lib/mongoDB";

export default async function getUrlByAlias(alias: string): Promise<string|null>{
    const aliasCollection = await getCollection(POSTS_COLLECTION);
    const data = await aliasCollection.findOne({alias: alias}, {projection: {url: 1}});

    if(data == null){
        return null;
    }

    return data.url;
}