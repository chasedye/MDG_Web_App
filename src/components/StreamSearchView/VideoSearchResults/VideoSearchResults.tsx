import type { videoProps } from "./VideoObject/VideoObject"
import VideoObject from "./VideoObject/VideoObject"

export type VideoResultsProps = {
    searchResults: videoProps[];
}

export default function VideoSearchResults({searchResults}: VideoResultsProps){
    if (searchResults.length == 0){
        return(
            <div className="emptyResults">
                <div className="emptyResultsMessage">
                    <div className="emptyResultsMessage">No Results</div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="videoSearchResultsBase">
            < div className="list">
                {searchResults.map(
                    (item, i) => (
                        <VideoObject key={i} {...item} />
                    ))}
            </div>
        </div>
    );
}