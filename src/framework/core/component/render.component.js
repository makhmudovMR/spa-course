export function renderComponent(c) {
  c.onInit && c.onInit()
  c.render();
  c.afterInit && c.afterInit()
}
