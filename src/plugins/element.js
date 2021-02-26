import Vue from 'vue'
import { 
    Input,
    Button,
    Dialog,
    Form,
    FormItem,
    Radio,
    RadioGroup,
    Select,
    Option,
    DatePicker,
    Upload,
    Popover,
    Tooltip,
    Dropdown,
    DropdownMenu,
    DropdownItem, 
    Menu,
    Card,
    Tabs,
    TabPane,
    Timeline,
    TimelineItem,
    Loading,
    MessageBox,
    Message,
    Table,
    TableColumn,
} from 'element-ui'

Vue.use(Input)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Upload)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Table)
Vue.use(TableColumn)

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;