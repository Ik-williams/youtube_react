import React from 'react';
import './Watch.scss';
import {Video} from '../../components/Video/Video';
import VideoPreview from '../../components/VideoPreview/VideoPreview';
import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';

class Watch extends React.Component{
    render() {
        return(
            <RelatedVideos />
        );
    }
}

export default Watch;