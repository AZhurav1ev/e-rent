import React from 'react';
import {Button} from 'react-bootstrap';

import MenuItem from '../menu-item/menu-item.component';

import { DIRECTORY_DATA } from './directory.data';
import { DirectoryContainer } from './directory.styles';

class Directory extends React.Component {
    state = {
        sections: DIRECTORY_DATA
    }

    render() {
        return (
            <div>
                {this.state.sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}

export default Directory;