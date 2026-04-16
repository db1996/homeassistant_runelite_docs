# Achievement Diary Notify

Event:

`runelite_achievement_diary_notify`

Triggered when an achievement diary task is completed.

⚙️ Requires enabling in the RuneLite plugin settings.

---

## Attributes

- `task_name`: Region name
- `tier`: Diary tier

---

## Example automation

``` yaml
alias: Achievement diary notify
description: ""
triggers:
  - event_type: runelite_achievement_diary_notify
    trigger: event
actions:
  - action: notify.mobile_phone
    metadata: {}
    data:
      message: "{{ trigger.event.data.task_name }} - {{ trigger.event.data.tier }}"
      title: Collection log unlocked
```
