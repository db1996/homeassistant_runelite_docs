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

## trigger_quest_complete_notify

Service: `runelite.trigger_quest_complete_notify`

### Inputs

| Input        | Info                                            |
| ------------ | ----------------------------------------------- |
| quest        | Name of the completed quest                     |
| quest_points | Optional, quest point total after completing it |

---

## trigger_gem_crab_hp_notify

Service: `runelite.trigger_gem_crab_hp_notify`

### Inputs

| Input      | Info                                     |
| ---------- | ---------------------------------------- |
| hp_percent | Optional, the crab's HP percentage       |
| threshold  | Optional, the configured threshold       |
| world      | Optional, the world the crab is on       |

---

## trigger_gem_crab_can_mine_notify

Service: `runelite.trigger_gem_crab_can_mine_notify`

### Inputs

| Input | Info                               |
| ----- | ---------------------------------- |
| world | Optional, the world the crab is on |

---

## trigger_idle_notify

Service: `runelite.trigger_idle_notify`

### Inputs

| Input      | Info                                      |
| ---------- | ----------------------------------------- |
| idle_ticks | Optional, how many ticks you've been idle |

---

## trigger_active_notify

Service: `runelite.trigger_active_notify`

### Inputs

| Input      | Info                                                  |
| ---------- | ----------------------------------------------------- |
| idle_ticks | Optional, how many ticks you were idle before this    |

---

## trigger_varbit_change_notify

Service: `runelite.trigger_varbit_change_notify`

### Inputs

| Input     | Info      |
| --------- | --------- |
| varbit_id | Varbit ID |
| new_value | New value |
| old_value | Old value |
