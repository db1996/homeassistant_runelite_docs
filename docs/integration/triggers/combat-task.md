# Combat Task Notify

Event:

`runelite_combat_task_notify`

Triggered when a combat achievement is completed. 

⚙️ Requires enabling in the RuneLite plugin settings.

---

## Attributes

- `task_name`: Task name
- `tier`: Task tier

---

## Example automation


``` yaml
alias: Combat task notify
description: ""
triggers:
  - event_type: runelite_combat_task_notify
    trigger: event
actions:
  - action: notify.mobile_phone
    metadata: {}
    data:
      message: "{{ trigger.event.data.tier }} - {{ trigger.event.data.task_name }}"
      title: Combat task unlocked
```
