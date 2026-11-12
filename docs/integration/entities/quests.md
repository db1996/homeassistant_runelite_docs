# Quests

Tracks the quest you are working on.

⚙️ Requires **Quest progress** in the RuneLite plugin settings. For an event when a quest is completed, see [Quest Complete Notify](/integration/triggers/quest-complete).

## Entity ID

`sensor.runelite_%username_last_quest`

## State

- The name of the last quest that made progress, or `None`

## Attributes

- `quest`: quest name
- `state`: `NOT_STARTED`, `IN_PROGRESS`, `FINISHED` or `NONE`
- `stage`: progress step within the quest
- `quest_points`: your total quest points
- `completed`: number of quests completed
- `total`: total number of quests
