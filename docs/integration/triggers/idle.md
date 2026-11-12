# Idle & Active Notify

Events:

- `runelite_idle_notify`: the player has been idle for the configured number of ticks
- `runelite_active_notify`: the player is active again after being idle

⚙️ Requires **Idle events** in the RuneLite plugin settings. **Idle delay (ticks)** sets how long you have to be idle.

---

## Attributes

- `idle_ticks`: how many game ticks the player has been idle (or was idle, for the active event)

---

## Example automation


``` yaml
alias: Idle notify
description: ""
triggers:
  - event_type: runelite_idle_notify
    trigger: event
actions:
  - action: notify.mobile_phone
    metadata: {}
    data:
      title: You've gone idle!
```
