# Player Status

Tracks whether you are online, and player stats like health, prayer, run energy, and special attack.

## Entity IDs

- `sensor.runelite_%username_player_status`
- `sensor.runelite_%username_health`
- `sensor.runelite_%username_prayer`
- `sensor.runelite_%username_run_energy`
- `sensor.runelite_%username_special_attack`

## Online status

Requires **Player online status** in the RuneLite plugin settings.

State: `true` while you are logged in. It switches to `false` when RuneLite hasn't sent an update for 2 minutes, so it also goes offline when the client is closed.

Attributes:

- `is_online`: same as the state
- `world`: the world you are on, `N/A` when offline
- `last_ping_time`: when RuneLite last sent an update

## Notes

- Health and prayer mirror skill virtual levels
- Run energy can generate many updates (use throttling)

## Attributes

The stat entities include:

- `current_health`
- `current_prayer`
- `current_run_energy`
- `current_special_attack`


## Example dashboard card

👉 See example: [Full yaml](../examples/player-status.md)
