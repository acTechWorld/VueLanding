import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3';
import '../src/assets/tailwind.css'

import VueSafeHTML from 'vue-safe-html';
import FontAwesomePlugin from '../src/plugins/fontawesome'


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
      expanded: true
    },
  }
}
setup((app) => {
  app.use(VueSafeHTML)
  app.use(FontAwesomePlugin)
})

export default preview
