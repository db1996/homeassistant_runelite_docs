# RuneLite plugin configuration options

## Homeassistant

| Name                          | Type    | Default | Description                                 |
| ----------------------------- | ------- | ------- | ------------------------------------------- |
| Homeassistant Base URL        | String  | `""`    | Example: http://homeassistant.local:8123    |
| Homeassistant Access token    | String  | `""`    | Your Home Assistant long-lived access token |
| Validate Home Assistant Token | boolean | `false` | Validate setup and show debug info in-game  |


## Entities

| Name                    | Type    | Default | Description                            | Related docs                                                                 |
| ----------------------- | ------- | ------- | -------------------------------------- | ---------------------------------------------------------------------------- |
| Farming patches         | boolean | `true`  | Updates farming patch entities         | [/integration/entities/farming](/integration/entities/farming)               |
| Farming contract        | boolean | `true`  | Updates farming contract entity        | [/integration/entities/farming](/integration/entities/farming)               |
| Bird houses             | boolean | `true`  | Updates birdhouse timers               | [/integration/entities/farming](/integration/entities/farming)               |
| Dailies                 | boolean | `true`  | Updates daily activity entities        | [/integration/entities/dailies](/integration/entities/dailies)               |
| Player online status    | boolean | `false` | Updates player online status and world | [/integration/entities/player-status](/integration/entities/player-status)   |
| Player health           | boolean | `false` | Updates player health (high frequency) | [/integration/entities/player-status](/integration/entities/player-status)   |
| Player prayer           | boolean | `false` | Updates player prayer (high frequency) | [/integration/entities/player-status](/integration/entities/player-status)   |
| Player special attack % | boolean | `false` | Updates special attack                 | [/integration/entities/player-status](/integration/entities/player-status)   |
| Player run energy %     | boolean | `false` | Updates run energy (high frequency)    | [/integration/entities/player-status](/integration/entities/player-status)   |
| Player status effects   | boolean | `false` | Tracks poison/venom and future effects | [/integration/entities/status-effects](/integration/entities/status-effects) |
| Aggression timer        | boolean | `false` | Updates aggression timer               | [/integration/entities/aggression](/integration/entities/aggression)         |
| Skill Boosts            | boolean | `false` | Updates skill boosts                   | [/integration/entities/skills](/integration/entities/skills)                 |


## Events

| Name                     | Type    | Default | Description                         | Related docs                                                                   |
| ------------------------ | ------- | ------- | ----------------------------------- | ------------------------------------------------------------------------------ |
| Collection log events    | boolean | `true`  | Sends collection log events         | [/integration/events/collection-log](/integration/events/collection-log)       |
| Combat task events       | boolean | `true`  | Sends combat task events            | [/integration/events/combat-task](/integration/events/combat-task)             |
| Achievement diary events | boolean | `true`  | Sends achievement diary events      | [/integration/events/achievement-diary](/integration/events/achievement-diary) |
| Idle events              | boolean | `true`  | Sends idle events                   | [/integration/events/idle](/integration/events/idle)                           |
| Idle delay (ticks)       | int     | `50`    | Delay before idle triggers          | [/integration/events/idle](/integration/events/idle)                           |
| Watch VarBit ID          | String  | `""`    | Comma-separated VarBit IDs to watch | [/integration/events/varbit-change](/integration/events/varbit-change)         |

## Miscellaneous

| Name                   | Type    | Default | Description                                                            | Related docs                                                         |
| ---------------------- | ------- | ------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Ignore Farming Guild   | boolean | `false` | Ignore Farming Guild patches                                           | [/integration/entities/farming](/integration/entities/farming)       |
| Farming tick offset    | boolean | `true`  | Automatically updates farming tick offset                              | [/integration/services/farming](/integration/services/farming)       |
| Aggression timer delay | int     | `50`    | Delay between aggression updates                                       | [/integration/entities/aggression](/integration/entities/aggression) |
| Global tick throttle   | int     | `0`     | Update every X ticks to homeassistant to reduce calls (0 = every tick) | -                                                                    |


## Debug

| Name                           | Type    | Default | Description                     | Related docs                                                         |
| ------------------------------ | ------- | ------- | ------------------------------- | -------------------------------------------------------------------- |
| Test clog event                | boolean | `false` | Sends test collection log event | [/integration/services/triggers](/integration/services/triggers)     |
| Test combat task event         | boolean | `false` | Sends test combat task event    | [/integration/services/triggers](/integration/services/triggers)     |
| Test achievement diary event   | boolean | `false` | Sends test diary event          | [/integration/services/triggers](/integration/services/triggers)     |
| Show aggression area and timer | boolean | `false` | Shows aggression tiles overlay  | [/integration/entities/aggression](/integration/entities/aggression) |