import React from "react";
import classes from "./Layout.module.css"
import MenuToggle from "../Navigations/MenuToggle";
import Drawer from "../Navigations/Drawer";


class Layout extends React.Component {
    state = {
        menu: false
    }

    onToggle = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render () {
        return (
            <div className= {classes.inner}>
                <Drawer isOpen={this.state.menu}
                onClose={this.menuCloseHandler}/>
               <MenuToggle onToggle={this.onToggle}
               isOpen={this.state.menu}/>
                <div className ={classes.main}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Layout;