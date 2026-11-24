import type {videoProps} from "../VideoObject/VideoObject"
import VideoSearchResults from "../VideoSearchResults/VideoSearchResults";
import SearchBar, { type Query } from "../VideoSearchBar/VideoSearchBar";
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
        <div className="searchPage">
            <SearchBar onSearch={handleQuery}/>
            <VideoSearchResults searchResults={results}/>
        </div>
    );
}