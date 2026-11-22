import type { videoProps } from "./VideoObject/VideoObject"
import VideoObject from "./VideoObject/VideoObject"


export default function VideoSearchResults(searchResults: videoProps[]) {
    if (searchResults.length == 0){
        return(
            <div className="emptyResults">
                <div className="emptyResultsMessage">
                    <div className="emptyResultsMessage">No Results</div>
                </div>
            </div>
        );
    }
    const video_list = searchResults.map(
        (item) => 
           VideoObject(item)
        ).join("");
    
    return (
        <div className="videoSearchResultsBase">
            < div className="list">{video_list}</div>
        </div>
    );
}