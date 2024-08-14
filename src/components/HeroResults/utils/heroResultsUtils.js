// src/components/utils/heroResultsUtils.js

import tanks from "../../../data/tanks";
import supports from "../../../data/support";
export const getFavoredSupportsForTank = (tank) => {
  return tank.favoredSupports.map((favoredSupport) => {
    // Find the corresponding support hero in the supports array
    const supportHero = supports.find(
      (hero) => hero.name === favoredSupport.name
    );

    if (supportHero) {
      // Combine the strategy from the tank's favoredSupports with the support hero data
      return {
        ...supportHero, // Spread in the full support hero details
        strategy: favoredSupport.strategy, // Add the strategy from the tank data
      };
    }

    // Return a default object if the support hero is not found (this shouldn't happen if the data is correct)
    return {
      name: favoredSupport.name,
      role: "Unknown Role",
      archetypes: ["Unknown Archetypes"],
      strategy: favoredSupport.strategy,
    };
  });
};
