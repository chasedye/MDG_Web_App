import "./VideoObject.modules.css";
import VideoPlayerObject from "../VideoPlayer/VideoPlayer"

export type videoProps = {
        vid_name: string;
        vid_description: string;
        upload_date:    string;
    }

export const VideoObject = (props: videoProps) => {
    return (
        <div className="videoObject">
            <div className="videoImage">

            </div>
            <div className="videoDetails">
                <div className="name">{props.vid_name}</div>
                <div className="desc">{props.vid_description}</div>
                <div className="date">{props.upload_date}</div>
            </div>
        </div>
    )
};

export default VideoObject;