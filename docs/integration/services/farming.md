# Farming & Timers

Services related to farming timers, crop calculations, and birdhouses.

---

## set_farming_tick_offset

Sets the farming growth tick offset of your account.

This value determines exactly when crops complete. Without it, timing can be inaccurate.

### Inputs

| Input       | Info                                                       |
| ----------- | ---------------------------------------------------------- |
| Username    | Optional, only used if you have more than one device added |
| Tick Offset | Number between -30 and 30                                  |

---

## reset_birdhouses

Sets birdhouse completion to current time + 50 minutes.

### Inputs

| Input    | Info                                                       |
| -------- | ---------------------------------------------------------- |
| Username | Optional, only used if you have more than one device added |

---

## reset_big_compost

Sets compost bin completion to current time + 90 minutes.

### Inputs

| Input    | Info                                                       |
| -------- | ---------------------------------------------------------- |
| Username | Optional, only used if you have more than one device added |

---

## calculate_patch_or_crop

Core calculation service used by most all shortcut services.

Sets:
- Entity state → `in_progress`
- Completion time

### Inputs

| Input      | Info                                                                                                                                   |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Username   | Optional, only used if you have more than one device added                                                                             |
| Patch Type | `herb`, `hespori`, `tree`, `fruit_tree`,`cactus`, `hardwood`, `spirit_tree`, `allotment`,`bush`, `flower`, `mushroom`, `potato_cactus` |
| Crop Type  | If a crop type is provided for a different patch type than above, it overrides the patch type input                                    |

---

## calculate_farming_contract

Same as above, but targets the farming contract entity.

### Inputs

Same as `calculate_patch_or_crop`



## Example dashboard

[Here's a yaml example](../examples/calculator-patches.md)