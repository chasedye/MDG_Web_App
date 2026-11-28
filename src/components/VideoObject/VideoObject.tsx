import style from "./VideoObject.module.css";
import VideoPlayerObject from "../VideoPlayer/VideoPlayer"
import Logo from './../../assets/sampleMDG.png'

export type videoProps = {
        vid_name: string;
        vid_description: string;
        upload_date:    string;
    }

export const VideoObject = (props: videoProps) => {
    return (
        <div className={`${style.videoObject}`}>
            <div className={`${style.image}`}>
                <img src={Logo} />
            </div>
            <div className={`${style.nameText}`}>
                <label>Name: {props.vid_name}</label>
            </div>
            <div className={`${style.descText}`}>
                <label>Description: {props.vid_description}</label>
            </div>
            <div className={`${style.dateTextText}`}>
                <label>Upload Date: {props.upload_date}</label>
            </div>
        </div>
    )
};

export default VideoObject;