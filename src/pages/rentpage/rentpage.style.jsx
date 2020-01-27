import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const RentPageContainer = styled(Container)`
    padding: 10px;
    background-color: #fafafa;
    margin: 15px auto;
    border: .5px solid lightgray;
    &:hover{
        cursor:pointer;
    }
`;