import React from 'react';
import { Row } from 'react-bootstrap';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName }) => (
    <CollectionPreviewContainer >
        <h2 className="display-4 text-dark">{title}</h2>
        <Row className="p-1 sm-p-3">
            {
                items
                    .filter((elem, idx) => idx < 4)
                    .map(({ id, ...otherProps }) => <CollectionItem key={id} routeName={routeName} {...otherProps} />)
            }
        </Row>
    </CollectionPreviewContainer>
);

export default CollectionPreview;



