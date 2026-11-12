# Gem Crab Notify

Events for the Gemstone Crab.

---

## runelite_gem_crab_hp_notify

Triggered when the gem crab's HP drops below the threshold. Its health bar works as a timer, so this is a warning that it is about to burrow.

⚙️ Requires **Gem crab HP threshold event** in the RuneLite plugin settings. **HP threshold %** sets the threshold.

### Attributes

- `hp_percent`: the crab's HP percentage when the event fired
- `threshold`: the configured threshold
- `world`: the world the crab is on

---

## runelite_gem_crab_can_mine_notify

Triggered when you did enough damage to mine the crab's shell.

⚙️ Requires **Gem crab can mine event** in the RuneLite plugin settings.

### Attributes

- `world`: the world the crab is on

---

## Example automation

``` yaml
alias: Gem crab about to burrow
description: ""
triggers:
  - event_type: runelite_gem_crab_hp_notify
    trigger: event
actions:
  - action: notify.mobile_phone
    metadata: {}
    data:
      title: Gem crab
      message: "At {{ trigger.event.data.hp_percent }}% on world {{ trigger.event.data.world }}"
```
