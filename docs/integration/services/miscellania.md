# Kingdom of Miscellania

Set the [Miscellania sensors](/integration/entities/miscellania) from Home Assistant, for example when you played without RuneLite. The sensors recalculate their threshold and empty times from the new values. The next time RuneLite sees the kingdom, its values replace these.

---

## miscellania_visited

Marks that you visited the kingdom now. The kingdom stops spending coins after 30 days without a visit, so this restarts that countdown (`spending_paused_time`).

The coffer carries on from today's estimate. If spending had already paused, it isn't drained for the days it was paused.

### Inputs

| Input    | Info                                                       |
| -------- | ---------------------------------------------------------- |
| Username | Optional, only used if you have more than one device added |

---

## miscellania_set_coffer

Sets the coins in the coffer as of now.

### Inputs

| Input         | Info                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| Username      | Optional, only used if you have more than one device added                                              |
| Coffer        | Required, coins in the coffer right now                                                                 |
| Threshold     | Optional, coffer amount to warn at. `0` picks the optimal amount (500k, or 750k after Royal Trouble). Empty keeps the current threshold |
| Royal Trouble | Optional, whether you completed Royal Trouble. Applies to both Miscellania sensors                     |

---

## miscellania_set_approval

Sets the approval rating as of now.

### Inputs

| Input         | Info                                                                               |
| ------------- | ---------------------------------------------------------------------------------- |
| Username      | Optional, only used if you have more than one device added                         |
| Approval      | Required, approval percentage right now                                            |
| Threshold     | Optional, approval percentage to warn at (25-100). Empty keeps the current threshold |
| Royal Trouble | Optional, whether you completed Royal Trouble. Applies to both Miscellania sensors |
