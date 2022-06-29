import { router } from '../tools/router';

export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
    this.routes = config.routes;
  }

  start() {
    this.initComponents();
    if(this.routes) this.initRoutes();
  }

  initRoutes() {
    window.addEventListener('hashchange', () => {
      this.renderRoute()
    })
    this.renderRoute()
  }

  initComponents() {
    this.bootstrapComponent.render()
    this.components.forEach(c => c.render())
  }

  renderRoute() {
    let url = router.getUrl()
    let route = this.routes.find(r => r.path === url)

    if (!route) {
      route = this.routes.find(r => r.path === '**')
    }

    document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
    this.renderComponent(route.component)
  }

  renderComponent(c) {
    c.onInit && c.onInit()
    c.render();
    c.afterInit && c.afterInit()

  }
}

