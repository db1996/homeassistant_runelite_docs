# Homeassistant Runelite

Welcome — this site documents both the RuneLite plugin and the Home Assistant integration that work together to sync OSRS data to Home Assistant.

- Home Assistant integration: 
  - Docs: [/integration](/integration)
  - Repository: [https://github.com/db1996/homeassistant_runelite](https://github.com/db1996/homeassistant_runelite)
- RuneLite plugin:
  - Docs: [/runelite-plugin](/runelite-plugin)
  - Repository: [https://github.com/db1996/homeassistant](https://github.com/db1996/homeassistant)

## Install RuneLite plugin

1. Install the plugin from the RuneLite Plugin Hub.
2. Create a Long-Lived Access Token in Home Assistant (Profile → Long-Lived Access Tokens).
3. Open the plugin's settings in RuneLite and set:
   - **Home Assistant Base URL** (e.g. `http://homeassistant.local:8123`)
   - **Home Assistant token** (long-lived access token)
4. Enable the events / entities you want the plugin to send (see the plugin Options page).

## Install Home Assistant integration

### Via HACS

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=db1996&repository=homeassistant_runelite&category=integration)

1. Ensure HACS is installed in your Home Assistant setup. If not, follow
   the [HACS installation guide](https://hacs.xyz/docs/setup/download).
2. Open the HACS panel in Home Assistant.
3. Click on the `Frontend` or `Integrations` tab.
4. Click the `+` button and search for `Runelite`.
5. Click `Install` to add the component to your Home Assistant setup.
6. Restart Home Assistant after the installation completes.

### Manual Installation

1. Navigate to your Home Assistant configuration directory (where your `configuration.yaml` is located).
2. Create a folder named `custom_components` if it doesn't exist.
3. Inside the `custom_components` folder, create another folder named `runelite`.
4. Clone this repository or download the source code and copy all files from the `custom_components/runelite/` from the [repository](https://github.com/db1996/homeassistant_runelite)
   directory to the newly created `runelite` folder.
5. Restart Home Assistant to load the custom component.
