
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
    this.el.innerHTML = this.template
    this._initEvents()
  }

  _initEvents() {
    if(this.events === undefined) return
    const events = this.events()
    Object.keys(events).forEach((key) => {
      let listener = key.split(' ')
      this.el.querySelector(listener[1]).addEventListener(listener[0], this[events[key]].bind(this))
    })
  }
}
