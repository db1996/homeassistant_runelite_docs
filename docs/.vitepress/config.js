export default {
  title: 'Homeassistant Runelite',
  description: 'Docs for the RuneLite plugin and Home Assistant integration',
  base: '/homeassistant_runelite_docs/',
  themeConfig: {
    nav: [
      { text: 'Introduction', link: '/' },
      { text: 'Integration', link: '/integration/' },
      { text: 'RuneLite plugin', link: '/runelite-plugin/' }
    ],

    sidebar: {
      '/integration/': [
        { text: 'Integration', link: '/integration/' },
        {
          text: 'Entities',
          items: [
            { text: 'Overview', link: '/integration/entities/' },
            {
              text: 'Farming & Birdhouses',
              link: '/integration/entities/farming'
            },
            {
              text: 'Farming tick offset',
              link: '/integration/entities/farming-tick-offset'
            },
            { text: 'Skills', link: '/integration/entities/skills' },
            { text: 'Activities', link: '/integration/entities/activities' },
            {
              text: 'Current Activity',
              link: '/integration/entities/current-activity'
            },
            { text: 'Dailies', link: '/integration/entities/dailies' },
            {
              text: 'Player Status',
              link: '/integration/entities/player-status'
            },
            {
              text: 'Status Effects',
              link: '/integration/entities/status-effects'
            },
            {
              text: 'Aggression Timer',
              link: '/integration/entities/aggression'
            },
            { text: 'Slayer Task', link: '/integration/entities/slayer-task' },
            { text: 'Quests', link: '/integration/entities/quests' },
            {
              text: 'Inventory & Equipment',
              link: '/integration/entities/inventory'
            },
            {
              text: 'Kingdom of Miscellania',
              link: '/integration/entities/miscellania'
            }
          ]
        },
        {
          text: 'Events',
          items: [
            { text: 'Overview', link: '/integration/triggers/' },
            {
              text: 'Collection Log',
              link: '/integration/triggers/collection-log'
            },
            {
              text: 'Achievement Diary',
              link: '/integration/triggers/achievement-diary'
            },
            { text: 'Combat Task', link: '/integration/triggers/combat-task' },
            {
              text: 'Quest Complete',
              link: '/integration/triggers/quest-complete'
            },
            { text: 'Gem Crab', link: '/integration/triggers/gem-crab' },
            {
              text: 'Varbit Change',
              link: '/integration/triggers/varbit-change'
            },
            { text: 'Idle & Active', link: '/integration/triggers/idle' }
          ]
        },
        {
          text: 'Services',
          items: [
            { text: 'Overview', link: '/integration/services/' },
            { text: 'Farming & Timers', link: '/integration/services/farming' },
            {
              text: 'Shortcut Services',
              link: '/integration/services/shortcut-services'
            },
            { text: 'Dailies', link: '/integration/services/dailies' },
            {
              text: 'Kingdom of Miscellania',
              link: '/integration/services/miscellania'
            },
            { text: 'Entity Data', link: '/integration/services/entity-data' },
            {
              text: 'Test Event Triggers',
              link: '/integration/services/test-event-triggers'
            }
          ]
        },
        {
          text: 'Examples',
          items: [
            {
              text: 'Farming patch calculator dashboard card',
              link: '/integration/examples/calculator-patches'
            },
            {
              text: 'Simple farming timer dashboard card',
              link: '/integration/examples/farming-overview'
            },
            {
              text: 'Player status dashboard card',
              link: '/integration/examples/player-status'
            },
            {
              text: 'Skills overview dashboard card',
              link: '/integration/examples/skills-overview'
            },
            {
              text: 'Status effects dashboard card',
              link: '/integration/examples/status-effects'
            }
          ]
        }
      ],

      '/runelite-plugin/': [
        { text: 'RuneLite plugin', link: '/runelite-plugin/' },
        { text: 'Options', link: '/runelite-plugin/options' }
      ]
    }
  }
}
