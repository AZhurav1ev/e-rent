import React from 'react';
import { Col } from 'react-bootstrap';

import { Image, RowContainer, ItemContainer } from './menu-item.styles';

const PreviewItem = ({ title, description, inverted }) => (
    <ItemContainer>
        <RowContainer>
            <Col sm={{ order: inverted ? 0 : 1 }} className="align-self-center">
                <h3 className="text-center text-uppercase">{title}</h3>
                <p className='text-dark font-weight-light text-justify'>{description}</p>
            </Col>
            <Col sm={{ order: inverted ? 1 : 0 }} className="text-center align-self-center">
                <Image src={`img/directory/${title}-directory.jpg`} className="img-fluid" />
            </Col>
        </RowContainer>
    </ItemContainer>
);

export default PreviewItem;