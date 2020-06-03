import React from 'react';
//import VideoPreview from '../../components/VideoPreview/VideoPreview';
import {VideoGrid} from '../../components/VideoGrid/VideoGrid';
import SideBar from '../SideBar/SideBar';
import './Home.scss';

class Home extends React.Component {
    render() {
        return(
            <React.Fragment>
                <SideBar />
                <div className='home'>
                    <div className='responsive-video-grid-container'>
                        <VideoGrid title='Trending' />
                        <VideoGrid title='Autos & Vehicles' hideDivider={true} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export  default Home;