import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Icon, Search, Toast, Loading, Swipe, SwipeItem, Col, Row, List, Cell } from 'vant'

import 'normalize.css'

const app = createApp(App)

app.use(Button)
	.use(Icon)
	.use(Search)
	.use(Loading)
	.use(Swipe)
	.use(SwipeItem)
	.use(Col)
	.use(Row)
	.use(List)
	.use(Cell)

app.use(store).use(router).use(Toast).mount('#app')
