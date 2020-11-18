import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebar__row">
                <div className="sidebar__icons active">
                    <HomeIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Home</h2>
                </div>
                <div className="sidebar__icons">
                    <WhatshotIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Trending</h2>
                </div>
                <div className="sidebar__icons">
                    <SubscriptionsIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Subscriptions</h2>
                </div>
            </div>
            <div className="sidebar__row">
                <div className="sidebar__icons ">
                    <VideoLibraryIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Library</h2>
                </div>
                <div className="sidebar__icons">
                    <HistoryIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">History</h2>
                </div>
                <div className="sidebar__icons">
                    <OndemandVideoIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Your Videos</h2>
                </div>
                <div className="sidebar__icons">
                    <WatchLaterIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Watch Later</h2>
                </div>
                <div className="sidebar__icons">
                    <HistoryIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Liked videos</h2>
                </div>
                <div className="sidebar__icons">
                    <ExpandMoreIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Show More</h2>
                </div>
            </div>
            <div className="sidebar__row">
                <h2 className="sidebar_subscription">SUBSCRIPTIONS</h2>
                <div className="sidebar__icons">
                    <Avatar className="sidebar__avatar" src="https://yt3.ggpht.com/ytc/AAUvwnjKYUZPkZADrFGPyUzo7dyQEUkZouMWRrcUTYCTsw=s88-c-k-c0x00ffffff-no-rj" />
                    <h2 className="sidebar__title">Mumbiker Nikhil</h2>
                </div>
                <div className="sidebar__icons">
                    <Avatar className="sidebar__icon" src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj" />
                    <h2 className="sidebar__title">Clever Programmer</h2>
                </div>
                <div className="sidebar__icons">
                    <Avatar className="sidebar__icon" src="https://yt3.ggpht.com/ytc/AAUvwnieuvP6a5txQEtUn8KVMV6WztorHL8HOqAESknDvA=s176-c-k-c0x00ffffff-no-rj-mo" />
                    <h2 className="sidebar__title">Trending</h2>
                </div>
                <div className="sidebar__icons">
                    <ExpandMoreIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Show 100 More</h2>
                </div>
            </div>
            <div className="sidebar__row">
                <div className="sidebar__icons">
                    <YouTubeIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Youtube Premium</h2>
                </div>
                <div className="sidebar__icons">
                    <TheatersIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Movies & Shows</h2>
                </div>
                <div className="sidebar__icons">
                    <SubscriptionsIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Gaming</h2>
                </div>
                <div className="sidebar__icons">
                    <HomeIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Live</h2>
                </div>
                <div className="sidebar__icons">
                    <WhatshotIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Fashion & Beauty</h2>
                </div>
                <div className="sidebar__icons">
                    <SubscriptionsIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Learning</h2>
                </div>
            </div>
            <div className="sidebar__row">
                <div className="sidebar__icons">
                    <HomeIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Settings</h2>
                </div>
                <div className="sidebar__icons">
                    <WhatshotIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Report history</h2>
                </div>
                <div className="sidebar__icons">
                    <SubscriptionsIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Help</h2>
                </div>
                <div className="sidebar__icons">
                    <HomeIcon className="sidebar__icon" />
                    <h2 className="sidebar__title">Send Feedback</h2>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

