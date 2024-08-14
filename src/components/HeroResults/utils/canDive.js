import damageHeroes from "../../../data/damage";
import supportHeroes from "../../../data/support";
import tanks from "../../../data/tanks";

const canDive = (selectedTeam) => {
  const tank = selectedTeam.find((hero) => hero.role === "Tank");
  const damage = selectedTeam.filter((hero) => hero.role === "Damage");
  const supports = selectedTeam.filter((hero) => hero.role === "Support");

  let missingRole = null;
  let recommendedHeroes = [];

  // Check if the tank is a Diver or if it's missing
  const tankIsDiver = tank ? tank.archetypes.includes("Diver") : false;
  if (!tank) {
    missingRole = "Tank";
    recommendedHeroes = tanks.filter((hero) =>
      hero.archetypes.includes("Diver")
    );
  } else if (!tankIsDiver) {
    return { canDive: false, recommendedHeroes: [], missingRole: null };
  }

  // Check if at least one damage hero is a Diver, the second can be Diver, Duelist, or Ranger
  const hasDiverDPS = damage.some((hero) => hero.archetypes.includes("Diver"));

  const hasValidDPS = damage.every((hero) =>
    ["Diver", "Duelist", "Ranger"].some((archetype) =>
      hero.archetypes.includes(archetype)
    )
  );

  if (damage.length < 2) {
    missingRole = "Damage";
    recommendedHeroes = damageHeroes.filter((hero) =>
      ["Diver", "Duelist", "Ranger"].some((archetype) =>
        hero.archetypes.includes(archetype)
      )
    );
  } else if (!hasDiverDPS || !hasValidDPS) {
    return { canDive: false, recommendedHeroes: [], missingRole: null };
  }

  // Check if at least one support is Diver or Ranger, the second can be Diver, Ranger, or Brawler
  const hasValidSupport = supports.some((hero) =>
    ["Diver", "Ranger"].some((archetype) => hero.archetypes.includes(archetype))
  );

  const canBothSupportsDive = supports.every((hero) =>
    ["Diver", "Ranger", "Brawler"].some((archetype) =>
      hero.archetypes.includes(archetype)
    )
  );

  if (supports.length < 2 && !missingRole) {
    missingRole = "Support";
    recommendedHeroes = supportHeroes.filter((hero) =>
      ["Diver", "Ranger", "Brawler"].some((archetype) =>
        hero.archetypes.includes(archetype)
      )
    );
  } else if (!hasValidSupport || !canBothSupportsDive) {
    return { canDive: false, recommendedHeroes: [], missingRole: null };
  }

  return {
    canDive: true,
    recommendedHeroes,
    missingRole,
  };
};

export default canDive;
