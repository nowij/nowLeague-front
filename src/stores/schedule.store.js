import {defineStore} from "pinia";
import {axiosWrapper} from "@/mixins";

export const useScheduleStore = defineStore({
    id: 'schedule',
    state: () => ({
        scheduleList: {},
        specificSchedule: {}
    }),
    actions: {
        async selectSchedule(params) {
            try {
                const response = await axiosWrapper.get('/game/schedule', {params});
                this.scheduleList = response.data
            } catch (error) {
                console.log(error);
            }
        }
    }
})