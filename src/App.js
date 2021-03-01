import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import Header from "./Components/Header/Header";
import PlayersList from "./Components/PlayersList/PlayersList";
import TakenPlayers from "./Components/TakenPlayers/TakenPlayers";

function App() {
  const MAX_BUDGET = 2_00_00_000;
  const [totalSpent, setTotalSpent] = useState(0);
  const [playerList, setPlayerList] = useState({});
  const [selectedPlayerIds, setSelectedPlayerIds] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        const playersHash = data.reduce(
          (acc, pl) => ({ ...acc, [pl.id]: pl }),
          {}
        );
        setPlayerList(playersHash);
      })
      .catch((err) => {
        console.error(err);
        setPlayerList({});
      });
  }, []);

  const playerSelection = {
    get selected() {
      return selectedPlayerIds.map(id => playerList[id]);
    },
    add(playerInfo) {
      const finalSpent = playerInfo?.salary + totalSpent;
      if (finalSpent <= MAX_BUDGET) {
        setSelectedPlayerIds((ids) => ids.concat(playerInfo.id));
        setTotalSpent(finalSpent);
      } else {
        window.alert(
          "You can not select this player, this will go over your max budget."
        );
      }
    },
    remove(playerInfo) {
      setSelectedPlayerIds((ids) => ids.filter((id) => id !== playerInfo.id));
      setTotalSpent(ts => ts - (playerInfo?.salary || 0));
    },
    isSelected(id) {
      return selectedPlayerIds.includes(id);
    },
  };

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col sm={9}>
            <PlayersList
              playerSelection={playerSelection}
              playerList={playerList}
            />
          </Col>
          <Col sm={3}>
            <TakenPlayers
              playerSelection={playerSelection}
              playerList={playerList}
              maxBudget={MAX_BUDGET}
              totalSpent={totalSpent}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
