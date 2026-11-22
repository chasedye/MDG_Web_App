import type { CSSProperties } from 'react';
import '@videojs/react/video/skin.css';
import { VideoPlayer, VideoSkin, Video } from '@videojs/react/video';


export default function VideoPlayerObject() {
  <VideoPlayer>
        <VideoSkin style={{ width: '100%', aspectRatio: '16 / 9', '--media-controls-before-start': 'visible' } as CSSProperties}>
        <Video src={""} playsInline />
        </VideoSkin>
    </VideoPlayer>
}