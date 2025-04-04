import {Layout, SchedulePage} from "@/views/shedule";

export default {
    path: '/schedule',
    component: Layout,
    children: [
        { path: '', component: SchedulePage}
    ]
}