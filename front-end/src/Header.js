import React from 'react';
import './Header.css';
import Menu from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/SearchOutlined';
import VideoIcon from '@material-ui/icons/VideoCall';
import AppIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="Header">
            <div className="header__left">
                <Menu />
                <img
                    className="header__logo"
                    src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_dark.svg?cache=bb9b9c6"
                    alt="" />
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" />
                <Search className="header__inputButton" />
            </div>
            <div className="header__right">
                <VideoIcon className="header__icon" />
                <AppIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/123109990_3504954519581445_1959295702777307552_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=z9wfSOVBcDQAX8VqbWk&_nc_ht=scontent.ford4-1.fna&oh=90d6d837acd05fbdf5e7297142a76d3b&oe=5FD8F502" />
            </div>
        </div>
    )
}

export default Header
