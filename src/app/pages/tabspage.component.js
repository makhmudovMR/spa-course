import { CoreComponent } from 'framework'

class TabsPageComponent extends CoreComponent {

  constructor(config) {
    super(config)
  }

  events() {
    return {
      'click .collapsible': 'onTabClick'
    }
  }

  onTabClick({target}) {
    if (!target.classList.contains('collapsible-header')) return
    this.el.querySelectorAll('.js-tab').forEach(e => e.classList.remove('active'))

    target.parentNode.classList.add('active')
  }
}

const tabsPageComponent = new TabsPageComponent({
  selector: 'app-home-page',
  template: `
    <ul class="collapsible collapsible-accordion" style="width: 50%; margin: 10px auto">
      <li class="js-tab">
        <div class="collapsible-header" tabindex="0">First</div>
        <div class="collapsible-body" style="">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
      </li>
      <li class="js-tab">
        <div class="collapsible-header" tabindex="0">Second</div>
        <div class="collapsible-body" style="">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</span>
        </div>
      </li>
      <li class="js-tab">
        <div class="collapsible-header" tabindex="0">Third</div>
        <div class="collapsible-body" style="">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</span>
        </div>
      </li>
    </ul>
  `
})

export { tabsPageComponent }
