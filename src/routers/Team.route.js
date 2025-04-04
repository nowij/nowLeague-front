import {Layout, TeamPage } from "@/views/team";

export default {
    path: '/team',
    component: Layout,
    children: [
        { path: '', component: TeamPage}
    ]
}