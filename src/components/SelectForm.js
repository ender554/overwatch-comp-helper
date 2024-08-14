import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import tanks from "../data/tanks";
import damage from "../data/damage";
import support from "../data/support";
import HeroSelects from "./HeroSelects";
import HeroResults from "./HeroResults/HeroResults"; // Import the new component

const SelectForm = () => {
  const [tank, setTank] = useState({ name: "", archetypes: [] });
  const [damage1, setDamage1] = useState({ name: "", archetypes: [] });
  const [damage2, setDamage2] = useState({ name: "", archetypes: [] });
  const [support1, setSupport1] = useState({ name: "", archetypes: [] });
  const [support2, setSupport2] = useState({ name: "", archetypes: [] });

  const [selectedTeam, setSelectedTeam] = useState([]);

  const selectedNames = [
    tank.name,
    damage1.name,
    damage2.name,
    support1.name,
    support2.name,
  ];

  const numberOfSelectedHeroes = selectedNames.filter(
    (name) => name !== ""
  ).length;

  const handleSubmit = () => {
    const selectedHeroes = [tank, damage1, damage2, support1, support2];
    setSelectedTeam(selectedHeroes.filter((hero) => hero.name !== "")); // Store the selected team in state
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        margin: "2rem",
      }}
    >
      <HeroSelects
        tank={tank}
        setTank={setTank}
        damage1={damage1}
        setDamage1={setDamage1}
        damage2={damage2}
        setDamage2={setDamage2}
        support1={support1}
        setSupport1={setSupport1}
        support2={support2}
        setSupport2={setSupport2}
        selectedNames={selectedNames}
        tanks={tanks}
        damage={damage}
        support={support}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={numberOfSelectedHeroes < 4} // Disable if fewer than 4 heroes are selected
      >
        Submit
      </Button>

      {selectedTeam.length > 0 && <HeroResults selectedTeam={selectedTeam} />}
    </Box>
  );
};

export default SelectForm;
