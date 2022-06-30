import { renderComponent } from './component/render.component';
import { RoutingModule } from '../routing/routing.module'

export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
    this.routes = config.routes;
    this.routingModule = new RoutingModule(config);
  }

  start() {
    this._initComponents();
    if(this.routes) this.routingModule.init();
  }

  _initComponents() {
    this.bootstrapComponent.render()
    this.components.forEach(renderComponent)
  }
}

