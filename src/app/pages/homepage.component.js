import { CoreComponent } from '../../framework'

class HomePageComponent extends CoreComponent {
  constructor(config) {
    super(config)
  }
}

const homePageComponent = new HomePageComponent({
  selector: 'app-home-page',
  template: `
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

export { homePageComponent }
