import {Layout, ResultPage } from "@/views/result";

export default {
    path: '/result',
    component: Layout,
    children: [
        { path: '', component: ResultPage}
    ]
}