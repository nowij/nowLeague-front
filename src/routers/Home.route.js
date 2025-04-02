import {Layout, Home} from "@/views/Home";

export default {
    path: '/',
    component: Layout,
    children: [
        { path: '', component: Home}
    ]
}