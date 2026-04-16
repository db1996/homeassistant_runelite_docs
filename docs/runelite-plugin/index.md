# RuneLite plugin

This section documents the RuneLite plugin: installation, configuration options, and how the plugin maps to Home Assistant services and events.

The plugin source lives in the workspace at `C:\Users\dylan\IdeaProjects\homeassistant`.

## Installation

1. Install the plugin from the RuneLite Plugin Hub.
2. Create a Long-Lived Access Token in Home Assistant (Profile → Long-Lived Access Tokens).
3. Open the plugin's settings in RuneLite and set:
   - **Home Assistant Base URL** (e.g. `http://homeassistant.local:8123`)
   - **Home Assistant token** (long-lived access token)
4. Enable the events / entities you want the plugin to send (see the plugin Options page).

## Plugin Options

See the [Options](/runelite-plugin/options) page for all available plugin settings

## Events & Services

The plugin emits events and batches entity updates which the integration consumes.

See the [integration](/integration/index) docs for more information about how to use these events/entities.
