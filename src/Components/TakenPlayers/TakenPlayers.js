import React from "react";

const TakenPlayers = ({ playerSelection, totalSpent, maxBudget }) => {
  return (
    <div className="text-success">
      <h2>Player selected for team</h2>
      <h4>Total Spent: {totalSpent.toLocaleString()}</h4>
      <h4>Remaining Budget: {(maxBudget - totalSpent).toLocaleString()}</h4>
      <p>
        <h4>Selected Players</h4>
        <ul>
          {playerSelection.selected.map((playerInfo) => (
            <li key={playerInfo.id} className="my-1">
              {playerInfo.name}{" "}
              <button className="btn btn-danger" onClick={() => playerSelection.remove(playerInfo)}>Remove</button>
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default TakenPlayers;
