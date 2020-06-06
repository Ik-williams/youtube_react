import React from 'react';
import './Watch.scss';
import {Video} from '../../components/Video/Video';
//import VideoPreview from '../../components/VideoPreview/VideoPreview';
import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';
import {VideoMetadata} from '../../components/VideoMetadata/VideoMetadata';
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox';

class Watch extends React.Component{
    render() {
        return(
            <div className='watch-grid'>
                <Video className='video' id='-7fuHEEmEjs' />
                <VideoMetadata className='metadata' viewCount={1000} />
                <VideoInfoBox className='video-info-box' />
                <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>Comments</div>
                <RelatedVideos className='relatedVideos' />
            </div>
        );
    }
}

export default Watch;