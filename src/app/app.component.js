import { CoreComponent } from '../framework'

class AppComponent extends CoreComponent {
  constructor(config) {
    super(config)
  }
}

const appComponent = new AppComponent({
  selector: 'app-root',
  template: `
    <div>
      <h1>App components works</h1>
      <h6>ASD</h6>
    </div>
  `
})

export { appComponent }