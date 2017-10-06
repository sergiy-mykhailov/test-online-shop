
import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/content/clear';
import Chip from 'material-ui/Chip';
import { lightGreenA100 } from 'material-ui/styles/colors';

import './Content.css';
import '../images/noimage.png'

class Catalog extends React.Component {

    renderRightButton = (id) => {
        if (this.props.isAdmin) {
            return (
                <IconButton onClick={this.props.onDelete.bind(null, id)}>
                    <DeleteIcon />
                </IconButton>
            );
        }
    };

    renderPrimaryText = (item) => {
        const style = { marginLeft: 10, display: 'inline' };
        return (
            <span>
                {item.title}
                <Chip style={style} backgroundColor={lightGreenA100}>
                    Price: <span>{item.price.toFixed(2)}</span>
                </Chip>
            </span>
        );
    };

    render() {
        const innerDivStyle = { paddingLeft: 112 };
        return (
            <div className="container">
                <div className="content">
                    <h3>Catalog</h3>
                    <Paper zDepth={1} >
                        <List>
                            {this.props.catalog.map( (item) => {
                                //import(`../images/${item.img}`);
                                return (
                                    <ListItem
                                        key={item.id}
                                        innerDivStyle={innerDivStyle}
                                        leftAvatar={<Avatar src={`img/${item.img}`} size={80}/>}
                                        rightIconButton={this.renderRightButton(item.id)}
                                        primaryText={this.renderPrimaryText(item)}
                                        secondaryText={ <p>{item.description}</p> }
                                        secondaryTextLines={2}
                                    />
                                );
                            })}
                        </List>
                    </Paper>
                </div>
            </div>
        );
    }
}

Catalog.propTypes = {
    catalog:    PropTypes.array.isRequired,
    onDelete:   PropTypes.func,
    isAdmin:    PropTypes.bool.isRequired
};

export default Catalog;