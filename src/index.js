import { bootstrap, utils } from './framework'
import { appModule } from './app/app.module';
import 'materialize-css/dist/css/materialize.min.css'

utils.delay(2000).then(() => {
  bootstrap(appModule)
})