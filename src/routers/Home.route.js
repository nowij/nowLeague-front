import {Layout, Home} from "@/views/home";

export default {
    path: '/',
    component: Layout,
    children: [
        { path: '', component: Home}
    ]
}