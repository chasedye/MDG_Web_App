import videoProps from "./VideoSearchResults/VideoObject/VideoObject"
import VideoSearchResults from "./VideoSearchResults/VideoSearchResults";
import SearchBar from "./SearchBar";


export default function VideoSearchPage() {
    return(
        <div className="searchPage">
            <SearchBar />
            <VideoSearchResults ></VideoSearchResults>
            

        </div>
    );
}