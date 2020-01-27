import React from 'react';

import { RENT_PAGE_DATA } from './rentpage.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class RentPage extends React.Component {
    state = {
        collections: RENT_PAGE_DATA
    }

    render() {
        return (
            <>
                {this.state.collections.map(({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps} />)}
            </>
        )
    }
}

export default RentPage;

