# Dailies

---

## reset_all_dailies

Sets all daily activities to `0` (incomplete).
the value will be `-1` if runelite detects you are not eligible for this daily.

### Inputs

| Input    | Info     |
| -------- | -------- |
| Username | Optional |

---

## Daily task services

Each daily has its own services:

- `daily_done_%activity%`
- (implicitly also reset variants)

### Behavior

- `done` → sets state to `1`
- `reset` → sets state to `0`