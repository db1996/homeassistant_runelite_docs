# Slayer Task

Tracks your current slayer task.

⚙️ Requires **Slayer task** in the RuneLite plugin settings, and RuneLite's own Slayer plugin to be enabled. The task is read from that plugin.

## Entity ID

`sensor.runelite_%username_slayer_task`

## State

- The task name, or `None` when you have no task

## Attributes

- `task`: task name
- `remaining_amount`: kills left
- `initial_amount`: kills assigned
- `task_location`: location, for tasks that have one
- `streak`: task streak
- `points`: slayer points
