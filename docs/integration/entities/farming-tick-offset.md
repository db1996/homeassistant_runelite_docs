# Farming tick offset

At the initialization of your device a farming tick offset will be asked (optional). 
This is an account specific tick offset (-30 - +30). Don't worry if you don't know this for your account, the runelite plugin will automatically update it.

But if you don't plan on using the runelite plugin, and you just want to use this to track farming while playing on your phone, this setting has to be correct otherwise calculating patches can be way off.

## Entity ID:

`sensor.runelite_%username_farming_tick_offset`

## Attributes

The main state is the offset. Minimim -30 max 30.