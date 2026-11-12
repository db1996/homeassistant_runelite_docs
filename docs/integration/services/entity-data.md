# Entity Data Services

General services for updating entities. The RuneLite plugin uses `set_multi_entity_data` to send all its updates, but you can call these yourself too.

---

## set_entity_data

Service: `runelite.set_entity_data`

Sets data on one entity of this integration. Only the fields you pass are changed.

### Inputs

| Input     | Info                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| entity_id | Required, the entity to update                                                               |
| ...       | Any of the entity's attributes, for example `completion_time` and `status` for a farming patch |

---

## set_multi_entity_data

Service: `runelite.set_multi_entity_data`

Same as `set_entity_data`, for several entities in one call.

### Inputs

| Input    | Info                                                                  |
| -------- | --------------------------------------------------------------------- |
| entities | Required, a list of objects, each with an `entity_id` and its fields |

### Example

``` yaml
action: runelite.set_multi_entity_data
data:
  entities:
    - entity_id: sensor.runelite_username_tree_patch
      status: ready
    - entity_id: sensor.runelite_username_birdhouses
      status: in_progress
      completion_time: "2026-11-12T20:00:00+00:00"
```

---

## fetch_osrs_highscores

Service: `runelite.fetch_osrs_highscores`

Fetches the [skill](/integration/entities/skills) and [activity](/integration/entities/activities) sensors from the OSRS hiscores now, instead of waiting for the 6-hourly update.

### Inputs

| Input    | Info                                                       |
| -------- | ---------------------------------------------------------- |
| Username | Optional, only used if you have more than one device added |
