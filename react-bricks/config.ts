import Router from 'next/router'
import { types } from 'react-bricks/frontend'

import bricks from './bricks'
import pageTypes from './pageTypes'
import NextLink from './NextLink'

const config: types.ReactBricksConfig = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
  apiKey: process.env.API_KEY,
  pageTypes,
  bricks,
  logo: '/logo.svg',
  previewPath: '/preview',
  loginUI: {
   sideImage: '/aimbots/Vidya2.1.png',
   logo: '/logo.svg',
   welcomeText: 'Welcome editor',
  },
  contentClassName: 'bricks-content', // Defined dynamically
  // isDarkColorMode: ...,        // in _app.tsx
  // toggleColorMode: ...,        // to manage Dark Mode
  renderLocalLink: NextLink,
  navigate: (path: string) => Router.push(path),
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: '#__next',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  customFields: [
    {
      name: 'label',
      label: 'Label',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'category',
      label: 'Category',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '', label: 'None' },
          { value: 'announcement', label: 'Announcement' },
          { value: 'devupdate', label: 'Dev Update' },
          { value: 'event', label: 'Event' },
        ]
      }
    }
  ],
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: 'Smartphone'}],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
}

export default config
