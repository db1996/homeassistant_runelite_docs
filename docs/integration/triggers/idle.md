# Idle Notify

Event:

`runelite_idle_notify`

Triggered when the player is idle for a configurable time.

---

## Attributes

None

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