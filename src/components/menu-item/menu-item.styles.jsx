import styled from 'styled-components';
import { Row, Container } from 'react-bootstrap';

export const ItemContainer = styled(Container)`
    padding: 10px;
    background-color: #fff;
    margin: 15px auto;
    border: .5px solid lightgray;
`;

export const RowContainer = styled(Row)`
    cursor: 'pointer';
    margin: '15px auto';
`;

export const Image = styled.img`
    max-height: 330px;
`;