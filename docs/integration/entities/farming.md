# Farming & Birdhouses

These entities track status, crop, and completion times for farming patches, farming contracts, and birdhouses.

## Entity IDs

| **Entity ID**                                 |
| --------------------------------------------- |
| sensor.runelite_%username_farming_contract    |
| sensor.runelite_%username_birdhouses          |
| sensor.runelite_%username_seaweed_patch       |
| sensor.runelite_%username_herb_patch          |
| sensor.runelite_%username_tree_patch          |
| sensor.runelite_%username_fruit_tree_patch    |
| sensor.runelite_%username_flower_patch        |
| sensor.runelite_%username_allotment_patch     |
| sensor.runelite_%username_bush_patch          |
| sensor.runelite_%username_mushroom_patch      |
| sensor.runelite_%username_cactus_patch        |
| sensor.runelite_%username_potato_cactus_patch |
| sensor.runelite_%username_spirit_tree_patch   |
| sensor.runelite_%username_hardwood_patch      |
| sensor.runelite_%username_redwood_patch       |
| sensor.runelite_%username_hespori_patch       |

## Attributes

All sensors have:

- `status`: ready, in_progress, other, not_planted  
- `completion_time`: next completion time (timezone aware)  
- `crop_type`: only set for patches with varying growth times  
- `patch_type`: always set for easier dashboard usage  