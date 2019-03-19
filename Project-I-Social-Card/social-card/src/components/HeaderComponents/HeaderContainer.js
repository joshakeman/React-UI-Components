import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent'
import HeaderTitle from './HeaderTitle'
import ImageThumbnail from './ImageThumbnail'


const HeaderContainer = () => {
    return (
        <div class="header-wrapper">
            <ImageThumbnail />
            <div class="header-content-wrapper">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderContainer;