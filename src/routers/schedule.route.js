import {Layout, Schedule} from "@/views/shedule";

export default {
    path: '/schedule',
    component: Layout,
    children: [
        { path: '', component: Schedule}
    ]
}