import { CoreModule } from '../framework'
import { appComponent } from './app.component';

class AppModule extends CoreModule {
  constructor(config){
    super(config)
  }
}

const appModule = new AppModule({
  components:[appComponent]
})

export { appModule }
