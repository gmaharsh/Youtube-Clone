import { Avatar } from '@material-ui/core'
import React from 'react';
import './VideoCard.css';

function VideoCard({image, title, views, timestamp, channel, channelImage}) {
    return (
        <div className="VideoCard">
            <img src="" alt="" className="videoCard__thumbnail" />
            <div className="videoCard__info">
                <Avatar
                    className="videoCard__avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
