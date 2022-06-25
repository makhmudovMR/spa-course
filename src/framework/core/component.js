export class Component {
  constructor(config) {
    this.template = config.template
    this.selector = config.selector
    this.el = null;
  }

  render() {
    this.el = document.querySelector(this.selector)
    if(!this.el) {
      throw new Error(`Component with ${this.selector} selector not found`);
    }
    document.querySelector(this.selector).innerHTML = this.template
  }
}
