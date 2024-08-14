import React from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";
import { handleSelectChange, isOptionDisabled } from "../utils/utils"; // Import utilities

const HeroSelects = ({
  tank,
  setTank,
  damage1,
  setDamage1,
  damage2,
  setDamage2,
  support1,
  setSupport1,
  support2,
  setSupport2,
  selectedNames,
  tanks,
  damage,
  support,
}) => {
  // Function to check if 4 heroes are selected
  const numberOfSelectedHeroes = selectedNames.filter(
    (name) => name !== ""
  ).length;
  const isMaxSelected = numberOfSelectedHeroes >= 4;

  // Updated handleSelectChange to allow "None" and to disable the fifth select
  const handleHeroSelectChange = (event, setState, data) => {
    const selectedName = event.target.value;

    if (selectedName === "None") {
      setState({ name: "", archetypes: [] });
    } else {
      const selectedHero = data.find((hero) => hero.name === selectedName);
      setState(selectedHero || { name: "", archetypes: [] });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        width: "100%",
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Select Tank</InputLabel>
        <Select
          value={tank.name}
          onChange={(e) => handleHeroSelectChange(e, setTank, tanks)}
          disabled={isMaxSelected && tank.name === ""}
        >
          <MenuItem value="None">None</MenuItem>
          {tanks.map((tank) => (
            <MenuItem
              key={tank.name}
              value={tank.name}
              disabled={isOptionDisabled(tank.name, selectedNames)}
            >
              {tank.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Select Damage 1</InputLabel>
        <Select
          value={damage1.name}
          onChange={(e) => handleHeroSelectChange(e, setDamage1, damage)}
          disabled={isMaxSelected && damage1.name === ""}
        >
          <MenuItem value="None">None</MenuItem>
          {damage.map((damageHero) => (
            <MenuItem
              key={damageHero.name}
              value={damageHero.name}
              disabled={isOptionDisabled(damageHero.name, selectedNames)}
            >
              {damageHero.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Select Damage 2</InputLabel>
        <Select
          value={damage2.name}
          onChange={(e) => handleHeroSelectChange(e, setDamage2, damage)}
          disabled={isMaxSelected && damage2.name === ""}
        >
          <MenuItem value="None">None</MenuItem>
          {damage.map((damageHero) => (
            <MenuItem
              key={damageHero.name}
              value={damageHero.name}
              disabled={isOptionDisabled(damageHero.name, selectedNames)}
            >
              {damageHero.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Select Support 1</InputLabel>
        <Select
          value={support1.name}
          onChange={(e) => handleHeroSelectChange(e, setSupport1, support)}
          disabled={isMaxSelected && support1.name === ""}
        >
          <MenuItem value="None">None</MenuItem>
          {support.map((supportHero) => (
            <MenuItem
              key={supportHero.name}
              value={supportHero.name}
              disabled={isOptionDisabled(supportHero.name, selectedNames)}
            >
              {supportHero.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Select Support 2</InputLabel>
        <Select
          value={support2.name}
          onChange={(e) => handleHeroSelectChange(e, setSupport2, support)}
          disabled={isMaxSelected && support2.name === ""}
        >
          <MenuItem value="None">None</MenuItem>
          {support.map((supportHero) => (
            <MenuItem
              key={supportHero.name}
              value={supportHero.name}
              disabled={isOptionDisabled(supportHero.name, selectedNames)}
            >
              {supportHero.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default HeroSelects;
