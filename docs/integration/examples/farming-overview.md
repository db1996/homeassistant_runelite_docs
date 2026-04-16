# Farming overview example

A simple dashboard showing selected farming patches and ETA.

```yaml
# Farming overview snippet

type: entities
entities:
  - entity: sensor.runelite_%username_hespori_patch
    type: custom:secondaryinfo-entity-row
    name: Hespori status
    secondary_info: >
      {% set sen = 'sensor.runelite_%username_hespori_patch' %}  {% if
      is_state(sen, 'in_progress') %}
        {% set ts_obj = state_attr(sen, 'completion_time') %}
        {% if ts_obj %}
           {{ "ETA: " + ts_obj.astimezone().strftime('%H:%M %d-%m') }}
        {% endif %}
      {% endif %}
  - entity: sensor.runelite_%username_farming_contract
    type: custom:secondaryinfo-entity-row
    name: Farming contract status
    secondary_info: >
      {% set sen = 'sensor.runelite_%username_farming_contract' %}  {% if
      is_state(sen, 'in_progress') %}
        {% set ts_obj = state_attr(sen, 'completion_time') %}
        {% if ts_obj %}
           {{ "ETA: " + ts_obj.astimezone().strftime('%H:%M %d-%m') }}
        {% endif %}
      {% endif %}
```
