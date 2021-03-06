import React, {Fragment} from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ( props ) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className="LogoSideDrawer">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;