import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';

export function PlayerCard({ playerInfo, isSelected = false, onSelect }) {
  const handleClick = (evt) => {
    evt.preventDefault();
    onSelect(playerInfo);
  };

  return (
    <Col xs={12} sm={6} md={4}>
      <Card className="my-2">
        <Card.Img variant="top" src={playerInfo.img} />
        <Card.Body>
          <Card.Title>{playerInfo.name}</Card.Title>
          <Card.Text>Salary: ${playerInfo.salary.toLocaleString()}</Card.Text>
          <Button
            variant={!isSelected ? "primary" : "danger"}
            onClick={handleClick}
          >
            {!isSelected ? <FaPlusCircle /> : <FaMinusCircle />}
            {' '}
            {isSelected ? "Remove" : "Select"} Player
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
