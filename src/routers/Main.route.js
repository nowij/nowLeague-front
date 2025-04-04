import {Layout, MainPage} from "@/views/main";

export default {
    path: '/',
    component: Layout,
    children: [
        { path: '', component: MainPage}
    ]
}