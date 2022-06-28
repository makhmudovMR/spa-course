import { homePageComponent } from './pages/homepage.component';
import { tabsPageComponent } from './pages/tabspage.component';
import { notFoundPageComponent } from './pages/notfoundpage.component'

const appRoutes = [
  { path: '', component: homePageComponent },
  { path: 'tabs', component: tabsPageComponent },
  { path: '**', component: notFoundPageComponent }
]

export { appRoutes }
