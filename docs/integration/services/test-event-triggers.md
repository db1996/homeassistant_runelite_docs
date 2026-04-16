# Test Event Triggers

These services simulate events normally triggered by the RuneLite plugin.

Useful for:
- Testing automations
- Debugging

---

## trigger_collection_log_notify

Service: `runelite.trigger_collection_log_notify`

### Inputs

| Input     | Info                                |
| --------- | ----------------------------------- |
| item_name | Collection log item you've unlocked |

---

## trigger_achievement_diary_notify

Service: `runelite.trigger_achievement_diary_notify`

### Inputs

| Input     | Info   |
| --------- | ------ |
| task_name | Region |
| tier      | Tier   |

---

## trigger_combat_task_notify

Service: `runelite.trigger_combat_task_notify`

### Inputs

| Input     | Info      |
| --------- | --------- |
| task_name | Task name |
| tier      | Tier      |

---

## trigger_idle_notify

Service: `runelite.trigger_idle_notify`

**No inputs**

---

## trigger_varbit_change_notify

Service: `runelite.trigger_varbit_change_notify`

### Inputs

| Input     | Info      |
| --------- | --------- |
| varbit_id | Varbit ID |
| new_value | New value |
| old_value | Old value |