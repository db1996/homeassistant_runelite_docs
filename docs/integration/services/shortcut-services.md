# Shortcut Services

Shortcut services exist to simplify dashboard creation.

---

## Patch services

Each patch type has its own service.

Example:

- `herb_patch`
- `tree_patch`
- etc.

### Behavior

- Calculates completion time
- Updates corresponding entity

### Inputs

| Input     | Info                                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| username  | Optional, only used if you have more than one device added                                                                                         |
| crop_type | Only if applicable for certain crops. If the service does not have a crop type that means all crops of this patch type have the same growth times. |

---

## Farming contract shortcuts

Each crop type has its own service.

Example:

- `farming_contract_herb`

Same inputs and behavior as patch services.