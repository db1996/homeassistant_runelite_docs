# Player Status

Tracks player stats like health, prayer, run energy, and special attack.

## Entity IDs

- `sensor.runelite_%username_health`
- `sensor.runelite_%username_prayer`
- `sensor.runelite_%username_run_energy`
- `sensor.runelite_%username_special_attack`

## Notes

- Health and prayer mirror skill virtual levels  
- Run energy can generate many updates (use throttling)

## Attributes

Each entity includes:

- `current_health`
- `current_prayer`
- `current_run_energy`
- `current_special_attack`


## Example dashboard card

👉 See example: [Full yaml](../examples/player-status.md)