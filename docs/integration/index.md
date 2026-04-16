# Home Assistant integration

This section documents the homeassistant integration side of this.


## Installation

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

After following these steps, your directory structure should look like this:

```markdown
custom_components/
runelite/
__init__.py
config_flow.py
manifest.json
sensor.py
services.py
...
```

## Configuration

### Add Integration

1. Go to the **Settings** → **Devices & Services** page in Home Assistant.
2. Click **Add Integration** and search for `runelite`.
3. Follow the on-screen instructions to complete the setup.
    - Provide your OSRS username
    - You can provide your farming tick offset, this can be found in the timers plugin in runelite.
        Set this to 0 if you can't find it.
    - You can create entities for multiple usernames.

After completing the config flow, the integration will automatically create sensors under a hub for all the timers. And one for the farming tick offset, you can change the sensor's value to change it. 


### Accompanying runelite plugin

I have built a custom runelite plugin to automatically update these entities. It will also automatically set the correct farming tick offset.

It can be found on the plugin hub named "Homeassistant", or check the [repository](https://github.com/db1996/homeassistant).

Find docs about configuration options [here](/runelite-plugin/index)

