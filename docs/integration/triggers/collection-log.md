# Collection Log Notify

Event:

`runelite_collection_log_notify`

Triggered when a collection log slot is unlocked.

⚙️ Requires enabling in the RuneLite plugin settings.

---

## Attributes

- `item_name`: Name of the unlocked item

---

## Example automation

``` yaml
alias: Collection Log Notify
description: ""
triggers:
  - event_type: runelite_collection_log_notify
    trigger: event
actions:
  - action: notify.mobile_phone
    metadata: {}
    data:
      message: "{{ trigger.event.data.item_name }}"
      title: Collection log unlocked
```