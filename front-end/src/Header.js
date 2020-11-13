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
                <Avatar />
            </div>
        </div>
    )
}

export default Header
