# Status effects example

This example shows how to render player status effects (poison/venom) in a markdown card.

It's the blue section in the image
<img src="../../images/skill_status.jpg" alt="Prayer Tile Example" width="300px">

```jinja
{% for effect in state_attr('sensor.runelite_%username%_status_effects', 'current_status_effects') %}
- **{{ effect.name | capitalize }}**: {{ effect.number }} damage
{% endfor %}
```
