import React from 'react';
import UserAvatar from './user-avatar';

const styles = {
    root: {
        backgroundColor: '#005bbb',
        color: '#ffffff',
        verticalAlign: 'middle',
        paddingBottom: '6px'
    },
    title: {
        float: 'left',
        verticalAlign: 'middle',
        padding: '20px'
    },
    brand: {
        float: 'none',
        verticalAlign: 'middle',
        padding: '20px'
    },
    logo: {
        src: 'img/ub_white.png',
        height: '24px',
        width: '24px'
    },
    avatar: {
        float: 'right',
        verticalAlign: 'middle',
        padding: '10px'
    }

};

class SiteHeader extends React.Component {
    render () {
        return (
        <div style={styles.root}>
            <div style={styles.avatar}>
                <UserAvatar />
            </div>
            <div style={styles.title}>Command Center</div>
            <div style={styles.brand}><img src={styles.logo.src} style={styles.logo} /> UB Linked</div>
        </div>
        );
    }
};

export default SiteHeader;