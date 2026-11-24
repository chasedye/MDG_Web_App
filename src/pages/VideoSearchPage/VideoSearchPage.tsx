import type {videoProps} from "../../components/VideoObject/VideoObject"
import VideoSearchResults from "../../components/VideoSearchResults/VideoSearchResults";
import SearchBar, { type Query } from "../../components/VideoSearchBar/VideoSearchBar"
import "./VideoSearchPage.modules.css"
import { useState } from "react";


export default function VideoSearchPage() {
    const [results, setResults] = useState<videoProps[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    function handleQuery(query: Query): void{
        /*
        This is where we will handle a resource query
        */
        setLoading(true);
        setError(null);
        let haveData = query ? true : false;
        let temp: videoProps[] = []
        if (!haveData){
            temp = [
                {vid_name:"Temp", vid_description:"Temp Desc", upload_date:"November 1 2026"},
                {vid_name:"Temp 2", vid_description:"Temp Desc 2", upload_date:"November 11 2026"}
            ]
        } 
        else {
            temp = [
                {vid_name:"Temp", vid_description:"Temp Desc", upload_date:"November 1 2026"},
                {vid_name:"Temp 2", vid_description:"Temp Desc 2", upload_date:"November 11 2026"}
            ]
        }
        setResults(temp);
        setLoading(false);
    }

    return(
        <section className="page">
            <SearchBar onSearch={handleQuery} />
            <VideoSearchResults searchResults={results}/>
        </section>
    );
}