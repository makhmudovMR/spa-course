import { CoreComponent } from 'framework'

class AppHeader extends CoreComponent {
  constructor(config) {
    super(config)
  }
}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
    <nav class='indigo'>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo" style="margin-left: 20px">Native Framework</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li><a href="#tabs">Tabs</a></li>
        </ul>
      </div>
    </nav>
  `,
});
