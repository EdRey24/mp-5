import {redirect} from "next/navigation";
import aliasAvailable from "@/lib/aliasAvailable";
import getUrlByAlias from "@/lib/getUrlByAlias";

export default async function AliasPage({params}: {params: Promise<{ alias: string }> }) {
    const { alias } = await params;

    if (await aliasAvailable(alias)) {
        redirect("/");
    }

    let url: string | null = null;

    try{
        url = await getUrlByAlias(alias);
        if(url === null){
            return redirect(`/error`);
        }
    } catch(error){
        console.error("Unexpected error:", error);
        return redirect(`/error`);
    }

    redirect(url);
}