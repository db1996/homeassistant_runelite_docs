# Inventory & Equipment

Tracks what is in your inventory and what you are wearing.

⚙️ Requires **Inventory** and/or **Equipment** in the RuneLite plugin settings.

## Entity IDs

- `sensor.runelite_%username_inventory`
- `sensor.runelite_%username_equipment`

## Inventory

State: number of used slots (0-28).

Attributes:

- `items`: list of items, each with `id`, `name`, `quantity`, `noted` and `slot`
- `used_slots`: used slots
- `free_slots`: free slots
- `total_slots`: always 28
- `full`: `true` when all 28 slots are used

## Equipment

State: the name of your weapon, or `None`.

Attributes:

- `worn`: items per equipment slot (`head`, `cape`, `amulet`, `weapon`, `body`, `shield`, `legs`, `gloves`, `boots`, `ring`, `ammo`), each with `id`, `name`, `quantity` and `noted`
- `count`: number of slots with an item
