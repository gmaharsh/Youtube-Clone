import React from 'react'

function VideoCard({image, title, channel, views, timestamp}) {
    return (
        <div className="VideoCard">
            <img src={image} alt="" />
            <div className="video__info">
                
            </div>
        </div>
    )
}

export default VideoCard
