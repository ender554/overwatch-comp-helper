const tanks = [
  {
    name: "Reinhardt",
    role: "Tank",
    archetypes: ["Brawler", "Sentinel"],
    favoredSupports: [
      {
        name: "Lucio",
        strategy:
          "Play as a Brawler. Stay close to Reinhardt, enabling him to close the gap with speed boosts and providing AOE healing during brawls.",
      },
      {
        name: "Brigitte",
        strategy:
          "Play as a Brawler/Sentinel. Stick near Reinhardt, providing armor packs and using your shield to protect him while he advances.",
      },
      {
        name: "Ana",
        strategy:
          "Play as a Sentinel. Position yourself at the backline, healing Reinhardt and using your Biotic Grenade to boost his survivability in close quarters.",
      },
      {
        name: "Baptiste",
        strategy:
          "Play as a Sentinel. Use your Immortality Field to protect Reinhardt in critical moments, and provide sustained healing and damage from a distance.",
      },
    ],
  },
  {
    name: "Winston",
    role: "Tank",
    archetypes: ["Diver", "Brawler"],
    favoredSupports: [
      {
        name: "Mercy",
        strategy:
          "Play as a Ranger. Stay mobile and be ready to Guardian Angel to Winston when he dives, providing consistent healing or damage boost.",
      },
      {
        name: "Kiriko",
        strategy:
          "Play as a Diver. Use your mobility to follow Winston during dives, providing healing and using Protection Suzu to keep him alive.",
      },
      {
        name: "Ana",
        strategy:
          "Play as a Sentinel. Position yourself safely and provide healing to Winston from a distance, using Sleep Dart and Biotic Grenade to support his dives.",
      },
      {
        name: "Brigitte",
        strategy:
          "Play as a Brawler. Stick with Winston and provide close-range healing and armor while disrupting enemies that threaten him.",
      },
    ],
  },
  {
    name: "Zarya",
    role: "Tank",
    archetypes: ["Brawler", "Sentinel"],
    favoredSupports: [
      {
        name: "Ana",
        strategy:
          "Play as a Sentinel. Provide healing from the backline and use your Biotic Grenade to enhance Zarya's sustainability during fights.",
      },
      {
        name: "Baptiste",
        strategy:
          "Play as a Sentinel. Stay mid-range to provide healing and use your Immortality Field to protect Zarya during aggressive plays.",
      },
      {
        name: "Zenyatta",
        strategy:
          "Play as a Ranger. Use your Orb of Harmony to sustain Zarya from a distance, and apply Discord Orb to amplify her damage.",
      },
    ],
  },
  {
    name: "D.Va",
    role: "Tank",
    archetypes: ["Diver", "Brawler"],
    favoredSupports: [
      {
        name: "Mercy",
        strategy:
          "Play as a Ranger. Stay mobile, ready to follow D.Va during her dives, and provide healing or damage boost as needed.",
      },
      {
        name: "Ana",
        strategy:
          "Play as a Sentinel. Position yourself safely and provide healing to D.Va, using your Biotic Grenade and Sleep Dart to support her dives.",
      },
      {
        name: "Zenyatta",
        strategy:
          "Play as a Ranger. Use Discord Orb to amplify D.Va's damage during dives and provide healing with Orb of Harmony from a distance.",
      },
    ],
  },
  {
    name: "Orisa",
    role: "Tank",
    archetypes: ["Sentinel", "Brawler"],
    favoredSupports: [
      {
        name: "Baptiste",
        strategy:
          "Play as a Sentinel. Stay mid-range and provide healing to Orisa while using your Immortality Field and Amplification Matrix to support her stronghold.",
      },
      {
        name: "Ana",
        strategy:
          "Play as a Sentinel. Position yourself safely and provide healing from the backline, using your Biotic Grenade to enhance Orisa's durability.",
      },
      {
        name: "Zenyatta",
        strategy:
          "Play as a Ranger. Use your Orb of Harmony to sustain Orisa and apply Discord Orb to targets she’s focusing on.",
      },
    ],
  },
  {
    name: "Roadhog",
    role: "Tank",
    archetypes: ["Brawler", "Duelist"],
    favoredSupports: [
      {
        name: "Ana",
        strategy:
          "Play as a Sentinel. Position yourself safely to provide healing to Roadhog, using Sleep Dart and Biotic Grenade to support his flanks.",
      },
      {
        name: "Kiriko",
        strategy:
          "Play as a Duelist. Follow Roadhog during his aggressive plays, using Protection Suzu and Swift Step to keep him alive during his engagements.",
      },
      {
        name: "Zenyatta",
        strategy:
          "Play as a Ranger. Use your Orb of Harmony to sustain Roadhog during his duels and apply Discord Orb to amplify his damage.",
      },
    ],
  },
  {
    name: "Sigma",
    role: "Tank",
    archetypes: ["Sentinel", "Ranger"],
    favoredSupports: [
      {
        name: "Baptiste",
        strategy:
          "Play as a Sentinel. Position yourself at mid-range to provide healing and use your Immortality Field to protect Sigma during critical moments.",
      },
      {
        name: "Moira",
        strategy:
          "Play as a Brawler. Stay near Sigma to provide close-range healing and damage, using Fade to reposition if needed.",
      },
      {
        name: "Zenyatta",
        strategy:
          "Play as a Ranger. Use your Orb of Harmony to sustain Sigma from a distance and apply Discord Orb to amplify his damage.",
      },
    ],
  },
  {
    name: "Wrecking Ball",
    role: "Tank",
    archetypes: ["Diver", "Brawler"],
    favoredSupports: [
      {
        name: "Lucio",
        strategy:
          "Play as a Diver. Use your speed and mobility to follow Wrecking Ball during his engagements, providing healing and disruption.",
      },
      {
        name: "Ana",
        strategy:
          "Play as a Sentinel. Position yourself safely and provide healing to Wrecking Ball, using Sleep Dart and Biotic Grenade to support his dives.",
      },
      {
        name: "Mercy",
        strategy:
          "Play as a Ranger. Stay mobile, ready to Guardian Angel to Wrecking Ball when he dives, providing consistent healing.",
      },
    ],
  },
  {
    name: "Ramattra",
    role: "Tank",
    archetypes: ["Brawler", "Sentinel"],
    favoredSupports: [
      {
        name: "Baptiste",
        strategy:
          "Play as a Sentinel. Provide healing and support to Ramattra during his Nemesis Form, using Immortality Field to protect him when necessary.",
      },
      {
        name: "Ana",
        strategy:
          "Play as a Sentinel. Position yourself safely and provide healing from the backline, using Biotic Grenade to enhance his durability during brawls.",
      },
      {
        name: "Lifeweaver",
        strategy:
          "Play as a Ranger. Use your Petal Platform to reposition Ramattra and provide healing from a distance, using Life Grip to save him when needed.",
      },
    ],
  },
  {
    name: "Mauga",
    role: "Tank",
    archetypes: ["Brawler", "Sentinel"],
    favoredSupports: [
      {
        name: "Baptiste",
        strategy:
          "Play as a Sentinel. Provide healing and use your Immortality Field to protect Mauga during his aggressive plays, positioning yourself to provide maximum support.",
      },
      {
        name: "Lucio",
        strategy:
          "Play as a Brawler. Stick close to Mauga, providing speed boosts and healing as he engages the enemy team.",
      },
    ],
  },
  {
    name: "Junker Queen",
    role: "Tank",
    archetypes: ["Brawler", "Duelist"],
    favoredSupports: [
      {
        name: "Lucio",
        strategy:
          "Play as a Brawler. Stick close to Junker Queen, providing speed boosts and healing as she engages the enemy team in close quarters.",
      },
      {
        name: "Brigitte",
        strategy:
          "Play as a Brawler. Stay near Junker Queen, providing armor packs and healing while helping to disrupt the enemy team.",
      },
      {
        name: "Baptiste",
        strategy:
          "Play as a Sentinel. Position yourself to provide healing and support, using your Immortality Field to protect Junker Queen during her aggressive plays.",
      },
      {
        name: "Lifeweaver",
        strategy:
          "Play as a Ranger. Use your Petal Platform to reposition Junker Queen and provide healing from a distance, using Life Grip to save her when necessary.",
      },
    ],
  },
  {
    name: "Doomfist",
    role: "Tank",
    archetypes: ["Diver", "Brawler"],
    favoredSupports: [
      {
        name: "Lucio",
        strategy:
          "Play as a Diver. Use your speed and mobility to follow Doomfist during his engagements, providing healing and disruption.",
      },
      {
        name: "Mercy",
        strategy:
          "Play as a Ranger. Stay mobile, ready to Guardian Angel to Doomfist when he dives, providing consistent healing.",
      },
      {
        name: "Kiriko",
        strategy:
          "Play as a Diver. Use your mobility to follow Doomfist during dives, providing healing and using Protection Suzu to keep him alive during critical moments.",
      },
    ],
  },
];

export default tanks;
