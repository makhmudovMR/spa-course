import { renderComponent } from '../core/component/render.component'
import { router } from '../tools/router';


export class RoutingModule {
  constructor(config) {
    this.routes = config.routes
  }

  init() {
    window.addEventListener('hashchange', () => {
      this.renderRoute()
    })
    this.renderRoute()
  }

  renderRoute() {
    let url = router.getUrl()
    let route = this.routes.find(r => r.path === url)

    if (!route) {
      route = this.routes.find(r => r.path === '**')
    }

    document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
    renderComponent(route.component)
  }
}
