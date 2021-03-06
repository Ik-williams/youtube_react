import React from 'react';
import './Video.scss';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export function Video(props) {
    if(!props.id) {
        return null;
    }

    const embedUrl = `${BASE_EMBED_URL}${props.id}`;

    return(
        <div className='video-container'>
            <div className='video'>
                <iframe width={'560'} height={'315'} src={embedUrl} frameborder='0'
                        allow='autoplay; encrypted-media' allowfullscreen title={'video'}/>
            </div>
        </div>

    )
}