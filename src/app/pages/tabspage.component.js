import { CoreComponent } from '../../framework'

class TabsPageComponent extends CoreComponent {
  constructor(config) {
    super(config)
  }
}

const tabsPageComponent = new TabsPageComponent({
  selector: 'app-home-page',
  template: '<h1>Tabs page</h1>'
})

export { tabsPageComponent }
