import Vue from 'vue'
import './element-variables.scss'

// prettier-ignore
import {
  Message,
  MessageBox,
  Input,
  Button
} from 'element-ui'

Vue.use(Input)
Vue.use(Button)

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message
