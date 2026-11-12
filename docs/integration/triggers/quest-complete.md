# Quest Complete Notify

Event:

`runelite_quest_complete_notify`

Triggered when a quest is completed.

⚙️ Requires **Quest complete events** in the RuneLite plugin settings.

---

## Attributes

- `quest`: name of the completed quest
- `quest_points`: your quest point total after completing it

---

## Example automation

``` yaml
alias: Quest complete
description: ""
triggers:
  - event_type: runelite_quest_complete_notify
    trigger: event
actions:
  - action: notify.mobile_phone
    metadata: {}
    data:
      title: Quest complete
      message: "{{ trigger.event.data.quest }} ({{ trigger.event.data.quest_points }} QP)"
```
