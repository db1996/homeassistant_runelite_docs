# Skills

Each skill has its own sensor to track XP and level over time. There is also one for total XP.
These are automatically polled every 6 hours from the OSRS hiscores. In the future I might add a feature to update this live from the plugin.

## Entity ID

`runelite_%username_skill_%skillname`

## State

- Current XP

## Attributes

- `ID`: OSRS skill ID  
- `Name`: friendly name  
- `Rank`: highscores rank  
- `Level`: current level  
- `virtual_level`: includes boosts (from RuneLite plugin)  
- `Xp`: current XP  

## Updates

Skills update every 6 hours via OSRS highscores polling.

A service (action) is available to manually refresh.

👉 See example: [Full yaml](../examples/skills-overview.md)