import React from 'react';
import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { Image, RowContainer, ItemContainer } from './menu-item.styles';

const PreviewItem = ({ title, description, inverted, history, route, match }) => (
    <ItemContainer>
        <RowContainer onClick={() => history.push(`${match.url}${route}`)}>
            <Col sm={{ order: Number(!inverted) }} className="align-self-center">
                <h3 className="text-center text-uppercase">{title}</h3>
                <p className='text-dark font-weight-light text-justify'>{description}</p>
            </Col>
            <Col sm={{ order: Number(inverted) }} className="text-center align-self-center">
                <Image src={`img/directory/${title}-directory.jpg`} className="img-fluid" />
            </Col>
        </RowContainer>
    </ItemContainer>
);


export default withRouter(PreviewItem);