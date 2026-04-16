# Varbit Change Notify

Event:

`runelite_varbit_change_notify`

Allows reacting to changes in OSRS internal variables (VarBits).

⚙️ Requires enabling in the RuneLite plugin settings.

---

## Configuration

In the RuneLite plugin settings:

- Field: **Watch VarBit ID**
- Enter IDs separated by commas

Example:

Watching `276` (AUTOCAST_SPELL) triggers this event when autocast changes.

---

## Attributes

- `varbit_id`
- `old_value`
- `new_value`

---

## Example automation



``` yaml
alias: Varbit change notify
description: ""
triggers:
  - event_type: runelite_varbit_change_notify
    trigger: event
actions:
  - action: notify.mobile_phone
    metadata: {}
    data:
      message: "Varbit {{ trigger.event.data.varbit_id }} has changed from {{ trigger.event.data.old_value }} to {{ trigger.event.data.new_value }}"
      title: Varbit has changed!
```