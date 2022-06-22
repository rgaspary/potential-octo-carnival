import { Home, Calendar, Map } from './pages'

export const urls = {
  Home: () => '/',
  Calendar: () => '/calendar',
  Map: () => '/map',
}

export const routes = [
  {
    name: 'Home',
    path: urls.Home(),
    Component: Home,
  },
  {
    name: 'Calendar',
    path: urls.Calendar(),
    Component: Calendar,
  },
  {
    name: 'Map',
    path: urls.Map(),
    Component: Map,
  },
]
