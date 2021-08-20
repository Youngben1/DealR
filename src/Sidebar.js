import React from 'react';
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="data:image/jpeg;base64,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" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar_statNumber">
                        1,514
                    </p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on Posts</p>
                    <p className="sidebar_statNumber">
                        2,120
                    </p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("Tech Companies")}
                {recentItem("ReactJS")}
                {recentItem("Softwares")}
                {recentItem("Oil Companies")}
                {recentItem("Nasa")}
            </div>
        </div>
    );
}

export default Sidebar;
