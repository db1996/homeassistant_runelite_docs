# Current Activity

Shows which skill you are training right now, read from your character's animation.

⚙️ Requires **Activity** in the RuneLite plugin settings.

## Entity ID

`sensor.runelite_%username_activity`

## State

The skill in lowercase, for example `mining`, `fishing`, `woodcutting` or `cooking`. It is `combat` while fighting and `none` when you aren't doing anything.

The activity holds for a few ticks after the last animation, so it doesn't flicker to `none` between actions.
