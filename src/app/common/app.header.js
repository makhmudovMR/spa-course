import { CoreComponent } from '../../framework'

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
      <a href="#" class="brand-logo" style="margin-left: 20px">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Native Framework</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  `,
});
