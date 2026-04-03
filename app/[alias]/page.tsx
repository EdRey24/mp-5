import {redirect} from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function AliasPage({params}: {params: Promise<{ alias: string }> }) {
    const { alias } = await params;

    const db = clientPromise.db("aliases");
    const aliasCollection = db.collection("aliases");
    const redirectUrl = await aliasCollection.findOne(
        { alias },
        { projection: { url: 1, _id: 0 } }
    );

    if (!redirectUrl?.url) {
        redirect("/");
    }

    redirect(redirectUrl.url);
}