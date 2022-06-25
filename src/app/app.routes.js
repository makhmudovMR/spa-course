import { homePageComponent } from './pages/homepage.component';
import { tabsPageComponent } from './pages/tabspage.component';


const appRoutes = [
  {path: '', component: homePageComponent},
  {path: 'tabs', component: tabsPageComponent},
]

export { appRoutes }
