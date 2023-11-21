import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    // title: 'Home',
    title: 'Dashboard',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'messages',
    title: 'Messages',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'file',
    url: 'messages',
  }
]
