import { CoreModule } from '../framework'
import { appComponent } from './app.component';
import { appHeader } from './common/app.header';

class AppModule extends CoreModule {
  constructor(config){
    super(config)
  }
}

const appModule = new AppModule({
  components:[
     appHeader,
  ],
  bootstrap: appComponent
})

export { appModule }
