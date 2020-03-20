import React from 'react';
import {Card} from "react-bootstrap";

const DiaryEvents = (props) => {
    const daysList = props.days.map((day) => {
        return (<Card key={day.date}>
            <Card.Title>{day.date}</Card.Title>
            <Card.Body>{day.event}</Card.Body>
        </Card>)
    });
    return(
        <div>
            {daysList}
        </div>
    )
};

export default DiaryEvents;