import {defineStore} from "pinia";
import {axiosWrapper} from "@/mixins";

export const useScheduleStore = defineStore({
    id: 'schedule',
    state: () => ({
        scheduleList: {}
    }),
    actions: {
        async selectSchedule(params) {
            try {
                const response = await axiosWrapper.get('/api/game/schedule', params);
                this.scheduleList = response.data
                console.log(this.scheduleList);
            } catch (error) {
                console.log(error);
            }
        }
    }
})