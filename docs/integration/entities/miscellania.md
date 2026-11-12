# Kingdom of Miscellania

Tracks the coins in your Miscellania coffer and your approval rating.

RuneLite can only read these while you are in the kingdom, so the plugin sends the last values it saw when you visit. Between visits, the sensors apply the daily upkeep themselves at midnight UTC, so the state is an estimate of what is in the kingdom right now. The next visit replaces the estimate with the real values.

The daily upkeep, as described on the [wiki](https://oldschool.runescape.wiki/w/Managing_Miscellania):

- **Coffer**: 10% of the coffer, capped at 50,000 coins (75,000 after Royal Trouble).
- **Approval**: drops 2.5% (1% after Royal Trouble), down to a minimum of 25%.
- **Spending pause**: if you haven't visited the islands for 30 days, the kingdom stops spending coins until you visit again.

You can also set the values yourself with the [Miscellania services](/integration/services/miscellania).

## Entity IDs

| **Entity ID**                                 |
| --------------------------------------------- |
| sensor.runelite_%username_miscellania_coffer   |
| sensor.runelite_%username_miscellania_approval |

## Coffer attributes

The state is the estimated number of coins in the coffer.

- `coffer`: coins in the coffer when you last visited
- `last_updated`: when that value was read
- `last_visit`: when you were last in the kingdom
- `royal_trouble`: whether Royal Trouble is completed, which changes the daily cap
- `threshold`: the coffer threshold from the plugin settings
- `threshold_time`: the midnight the coffer drops below the threshold
- `empty_time`: the midnight the coffer is empty (below 10 coins, where the 10% upkeep rounds down to nothing)
- `spending_paused_time`: when spending pauses because you haven't visited for 30 days

`threshold_time` and `empty_time` assume you keep visiting the kingdom. If the coffer was already below the value when it was read, they are set to `last_updated`.

### Why a threshold

While the coffer holds at least ten days of the maximum upkeep (500,000 coins, or 750,000 after Royal Trouble), the kingdom spends the full amount each day and you get the most resources. Below that, it only spends 10% of what is left and the yield drops with it. Leave the threshold setting at `0` to use this amount automatically.

## Approval attributes

The state is the estimated approval percentage.

- `approval`: approval percentage when you last visited
- `last_updated`: when that value was read
- `royal_trouble`: whether Royal Trouble is completed, which changes the daily decay
- `threshold`: the approval threshold from the plugin settings
- `threshold_time`: the midnight approval drops below the threshold
