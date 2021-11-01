import React from "react";
import styled from 'styled-components';

const TicketWrapper = styled.div`
    background-color: darkGray;
    padding: 15px;
    border-radius: 15px;

    &:not(:last-child) {
        margin-bottom: 5%;
    }
    box-shadow: 0px 0px 5px 2px #0000007d;
`;

const Title = styled.h3`
    width: 100%;
    margin: 0px;
`;


const Body = styled.p`
    width: 100%;
`;

const Ticket = ({ticket}) => (
    <TicketWrapper>
        <Title>{ticket.title}</Title>
        <Body>{ticket.body}</Body>
    </TicketWrapper>
)

export default Ticket;