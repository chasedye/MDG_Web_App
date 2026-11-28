import type { videoProps } from "../VideoObject/VideoObject"
import VideoObject from "../VideoObject/VideoObject"
import styles from './VideoSearchResults.module.css'


export type VideoResultsProps = {
    searchResults: videoProps[];
}

export default function VideoSearchResults({searchResults}: VideoResultsProps){
    if (searchResults.length == 0){
        return(
            <section className={`${styles.resultsSection}`}>
                <div className={`${styles.noResults}`}>
                    <div className="emptyResultsMessage">No Results</div>
                </div>
            </section>
        );
    }
    
    return (
        <section className={`${styles.resultsSection}`}>
            < div className={`${styles.results}`}>
                {searchResults.map(
                    (item, i) => (
                        <VideoObject key={i} {...item} />
                    ))}
            </div>
        </section>
    );
}