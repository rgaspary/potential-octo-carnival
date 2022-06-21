import { Calendar } from './pages'

export const urls = {
  Calendar: () => '/calendar',
}

export const routes = [
  {
    name: 'Calendar',
    path: urls.Calendar(),
    Component: Calendar,
  },
]
