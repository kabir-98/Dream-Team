import React from "react";
import { Container, Row } from "react-bootstrap";
import { PlayerCard } from "../PlayerCard/PlayerCard";

const PlayersList = ({ playerSelection, playerList }) => {
  return (
    <Container>
      <Row>
        {Object.values(playerList).map((playerInfo) => {
          const playerIsSelected = playerSelection.isSelected(playerInfo.id);
          return (
            <PlayerCard
              playerInfo={playerInfo}
              isSelected={playerIsSelected}
              onSelect={
                playerIsSelected ? playerSelection.remove : playerSelection.add
              }
              key={playerInfo.id}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default PlayersList;
