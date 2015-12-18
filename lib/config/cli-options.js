export default [
  { name: 'help', type: Boolean, group: "options", description: 'help' },
  {
    name       : 'html',
    type       : String,
    group      : "options",
    description: 'set the default html templates'
  },
  {
    name       : 'style',
    type       : String,
    group      : "options",
    description: 'set the default style file'
  },
  { name: 'pipe', alias: 'p', type: String, group: "options", description: 'generate Angular 2 pipe' },
  { name: 'spipe', alias: 's', type: String, group: "options", description: 'generate Angular 2 stateful pipe' },
  { name: 'sdirective', type: String, group: "options", description: 'generate Angular 2 stractural directive' },
  { name: 'directive', alias: 'd', type: String, group: "options", description: 'generate Angular 2 directive' },
  {
    name         : 'component',
    alias        : 'c',
    type         : String,
    group        : "options",
    description  : 'generate Angular 2 component',
    defaultOption: true
  }

]