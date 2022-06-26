import {
  Home,
  Calendar,
  Map,
  LogInPage,
  MoreInformationPage,
  SignUpPage,
} from './pages'

export const urls = {
  Home: () => '/',
  Calendar: () => '/calendar',
  Map: () => '/map',
  LogInPage: () => '/login',
  MoreInformation: () => '/more-information',
  SignUpPage: () => '/signup',
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
  {
    name: 'LogInPage',
    path: urls.LogInPage(),
    Component: LogInPage,
  },
  {
    name: 'MoreInformation',
    path: urls.MoreInformation(),
    Component: MoreInformationPage,
  },
  {
    name: 'SignUpPage',
    path: urls.SignUpPage(),
    Component: SignUpPage,
  },
]
