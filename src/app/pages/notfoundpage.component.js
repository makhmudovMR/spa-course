import { CoreComponent } from 'framework'

class NotFoundPageComponent extends CoreComponent {
  constructor(config) {
    super(config)
  }
}

const notFoundPageComponent = new NotFoundPageComponent({
  selector: 'app-notfound-page',
  template: `
    <div style="display:flex; align-items: center; justify-content:center; flex-direction: column">
      <h2>404 Not Found</h2>
      <a href="#">Перейти на главную </a>
    </div>
  `
})

export { notFoundPageComponent }
