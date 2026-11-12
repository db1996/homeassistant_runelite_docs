# Events & Triggers

When playing with the RuneLite plugin active, it can send events to Home Assistant.

These events can be used as triggers in automations.

## Available events

- [Collection Log Notify](collection-log.md)
- [Achievement Diary Notify](achievement-diary.md)
- [Combat Task Notify](combat-task.md)
- [Quest Complete Notify](quest-complete.md)
- [Gem Crab Notify](gem-crab.md)
- [Varbit Change Notify](varbit-change.md)
- [Idle & Active Notify](idle.md)

Each event has its own page with:
- Attributes
- Configuration
- Example automations (YAML)

## Event entities

Every event is also shown as an event entity on the RuneLite device. This lets you pick them as a trigger in the automation editor without typing the event name, and shows when each one last fired.

| Entity            | Event types                  |
| ----------------- | ---------------------------- |
| Collection log    | `new_item`                   |
| Combat task       | `completed`                  |
| Achievement diary | `completed`                  |
| Quest             | `completed`                  |
| Varbit            | `changed`                    |
| Idle              | `idle`, `active`             |
| Gem crab          | `hp_threshold`, `can_mine`   |

The event entities carry the same attributes as the events.
