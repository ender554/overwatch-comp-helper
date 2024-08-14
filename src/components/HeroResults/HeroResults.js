import React from "react";
import { Box, Typography } from "@mui/material";
import { getFavoredSupportsForTank } from "./utils/heroResultsUtils";
import canDive from "./utils/canDive"; // Import canDive function

const HeroResults = ({ selectedTeam }) => {
  const tank = selectedTeam.find((hero) => hero.role === "Tank");
  const favoredSupports = tank ? getFavoredSupportsForTank(tank) : [];

  // Use the canDive function to analyze the selected team
  const diveAnalysis = canDive(selectedTeam);
  const {
    canDive: divePossible,
    recommendedHeroes,
    missingRole,
  } = diveAnalysis;

  return (
    <Box mt={4}>
      {favoredSupports.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6">
            Favored Supports for {tank?.name || "Unknown Tank"}:
          </Typography>
          {favoredSupports.map((support, index) => (
            <Box key={index} mb={2}>
              <Typography>
                <strong>Role:</strong> {support?.role || "Unknown Role"}
              </Typography>
              <Typography>
                <strong>Hero:</strong> {support?.name || "Unknown Hero"}
              </Typography>
              <Typography>
                <strong>Archetypes:</strong>{" "}
                {support?.archetypes?.join(", ") || "No Archetypes Available"}
              </Typography>
              <Typography>
                <strong>Strategy:</strong>{" "}
                {support?.strategy || "No Strategy Provided"}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      <Box mt={4}>
        <Typography variant="h6">Can this team Dive?</Typography>
        <Typography>{divePossible ? "Yes" : "No"}</Typography>

        {recommendedHeroes.length > 0 && (
          <Box mt={2}>
            <Typography variant="h6">
              To complete a Dive composition, consider selecting a {missingRole}
              :
            </Typography>
            {recommendedHeroes.map((hero, index) => (
              <Box key={index} mb={2}>
                <Typography>
                  <strong>Role:</strong> {hero.role}
                </Typography>
                <Typography>
                  <strong>Hero:</strong> {hero.name}
                </Typography>
                <Typography>
                  <strong>Archetypes:</strong>{" "}
                  {hero.archetypes?.join(", ") || "No Archetypes Available"}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HeroResults;
