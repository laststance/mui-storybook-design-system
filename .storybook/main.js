const ts = require('typescript')
const ReactDocgenTypescriptPlugin = require('react-docgen-typescript-plugin').default

module.exports = {
  'stories': [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../mui/**/*.stories.@(js|jsx|ts|tsx)',
    '../docs/**/*.stories.mdx'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': 'storybook-builder-vite'
  },
  'plugin': [new ReactDocgenTypescriptPlugin()]
}
