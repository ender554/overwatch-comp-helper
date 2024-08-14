// src/utils/utils.js
import tanks from "../data/tanks"; // Import the tanks array

export const handleSelectChange = (event, setState, data) => {
  const selectedName = event.target.value;

  if (selectedName === "None") {
    setState({ name: "", archetypes: [] }); // Reset the state when "None" is selected
  } else {
    const selectedHero = data.find((hero) => hero.name === selectedName);
    setState(selectedHero || { name: "", archetypes: [] });
  }
};

export const isOptionDisabled = (name, selectedNames) =>
  selectedNames.includes(name);

export const setSelectedHeroesForTank = (selectedTank) => {
  const tankData = tanks.find((t) => t.name === selectedTank.name);
  if (tankData) {
    return tankData.favoredSupports;
  }
  return [];
};
