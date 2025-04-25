import {defineStore} from "pinia";
import {axiosWrapper} from "@/mixins";

export const useScheduleStore = defineStore({
    id: 'schedule',
    state: () => ({
        scheduleList: {},
        specificSchedule: {},
        pageInfo : {}
    }),
    actions: {
        async selectSchedule(params) {
            try {
                const response = await axiosWrapper.get('/game/schedule', {params});
                const { content, pageSize, total, page } = response.data
                this.scheduleList = content
                this.pageInfo = { pageSize, total, page }
            } catch (error) {
                console.log(error);
            }
        }
    }
})