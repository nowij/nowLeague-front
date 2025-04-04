import {defineStore} from "pinia";
import {axiosWrapper} from "@/mixins";

export const useCommonStore = defineStore({
    id: 'common',
    state: () => ({
        seasonList: {},
        roundList: {},
        teamList: {}
    }),
    actions: {
        async selectSeasons() {
            try {
                const response = await axiosWrapper.get('/api/common/seasons')
                this.seasonList = response.data
            } catch (error) {
                console.log(error);
            }
        },

        // 라운드 리스트
        async selectRounds() {
            try {
                const response = await axiosWrapper.get('/api/common/rounds');
                this.roundList = response.data
            } catch (error) {
                console.log(error);
            }
        },

        async selectTeams() {
            try {
                const response = await axiosWrapper.get('/api/common/teams')
                this.teamList = response.data
            } catch (error) {
                console.log(error)
            }
        }
    }
})