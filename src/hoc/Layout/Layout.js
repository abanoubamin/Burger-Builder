import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  // state = {
  //   showSideDrawer: false,
  // };
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    // this.setState({ showSideDrawer: false });
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    // this.setState((prevState) => {
    //   return { showSideDrawer: !prevState.showSideDrawer };
    // });
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <Fragment>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        // open={this.state.showSideDrawer}
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      />
      <main className="Content">{props.children}</main>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
