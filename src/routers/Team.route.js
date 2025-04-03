import {Layout, Team} from "@/views/team";

export default {
    path: '/team',
    component: Layout,
    children: [
        { path: '', component: Team}
    ]
}