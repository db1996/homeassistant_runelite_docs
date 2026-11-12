# Skills

Each skill has its own sensor to track XP and level over time. There is also one for total XP.

## Entity ID

`sensor.runelite_%username_skill_%skillname`

## State

- Current XP

## Attributes

- `id`: OSRS skill ID
- `name`: friendly name
- `rank`: hiscores rank
- `level`: current level
- `virtual_level`: boosted level, including potions and debuffs (needs **Skill boosts** in the RuneLite plugin)
- `xp`: current XP

## Updates

- Every 6 hours from the OSRS hiscores. The `fetch_osrs_highscores` service refreshes them right away, see [Entity data services](/integration/services/entity-data).
- Live while you play, with **Skill XP** enabled in the RuneLite plugin. XP never goes back down when the hiscores lag behind.
- `virtual_level` updates live with **Skill boosts** enabled.

👉 See example: [Full yaml](../examples/skills-overview.md)
