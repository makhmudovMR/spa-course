import { CoreComponent } from '../framework'

class AppComponent extends CoreComponent {
  constructor(config) {
    super(config)
  }
}

const appComponent = new AppComponent({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="row">
      <div class="col s6 offset-s3" style="margin-top:40px">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Card Title</span>
            <p>No content</p>
          </div>
          <div class="card-action">
            <a href="#">Go to other link</a>
          </div>
        </div>
      </div>
    </div>
  `
})

export { appComponent }