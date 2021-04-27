import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
	Button,
	Icon,
	Search,
	Toast,
	Loading,
	Swipe,
	SwipeItem,
	Col,
	Row,
	List,
	Cell,
	Lazyload,
	Empty,
	Grid,
	GridItem,
	Overlay,
	Form,
	Field,
	Notify,
} from 'vant'
import { DropdownMenu, DropdownItem } from 'vant'
import { PullRefresh } from 'vant'
import { Sticky } from 'vant'
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
	.use(DropdownMenu)
	.use(DropdownItem)
	.use(PullRefresh)
	.use(Sticky)
	.use(Lazyload)
	.use(Empty)
	.use(Grid)
	.use(GridItem)
	.use(Overlay)
	.use(Form)
	.use(Field)
	.use(Notify)
app.use(store).use(router).use(Toast).mount('#app')
