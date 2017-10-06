
import React from 'react';
import PropTypes from 'prop-types';

import Link from 'react-router-dom/Link'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/more-vert';
import CatalogIcon from 'material-ui/svg-icons/action/shopping-cart';
import AddIcon from 'material-ui/svg-icons/content/add';

import Info from './Info.jsx';
import '../images/logo.png'

class Home extends React.Component {

    renderLeftElement = () => {
        return (
            <img src="img/logo.png" />
        );
    };

    renderRightElement = () => {
        const style = {
            textDecoration: 'none',
            color: 'inherit',
            display: 'block'
        };
        return (
            <IconMenu
                iconButtonElement={<IconButton><MenuIcon /></IconButton>}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem leftIcon={<CatalogIcon />}>
                    <Link to="/catalog" style={style}>Catalog</Link>
                </MenuItem>
                <MenuItem leftIcon={<AddIcon />}>
                    <Link to="/editor" style={style}>New product</Link>
                </MenuItem>
            </IconMenu>
        );
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Online shop"
                    iconElementLeft={this.renderLeftElement()}
                    iconElementRight={this.renderRightElement()}
                />
                <Info
                    catalog={this.props.catalog}
                    userName={this.props.userName}
                    isAdmin={this.props.isAdmin}
                    onDelete={this.props.onDelete}
                />
            </div>
        );
    }
}

Home.propTypes = {
    catalog:    PropTypes.array.isRequired,
    userName:   PropTypes.string.isRequired,
    isAdmin:    PropTypes.bool.isRequired,
    onDelete:   PropTypes.func
};

export default Home;
