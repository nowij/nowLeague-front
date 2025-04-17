import {defineStore} from "pinia";
import {axiosWrapper} from "@/mixins";

export const useCommonStore = defineStore({
    id: 'common',
    state: () => ({
        seasonList: {},
        roundList: {},
        teamList: {},
        todaySeason: ''
    }),
    actions: {
        // 시즌 조회
        async selectSeasons() {
            try {
                const response = await axiosWrapper.get('/seasons')
                this.seasonList = response.data
            } catch (error) {
                console.log(error);
            }
        },

        // 현재 시즌 조회
        async selectTodayRound(params) {
            try {
                const response = await axiosWrapper.get('/today/season', { params });
                this.todaySeason = response.data
            } catch (error) {
                console.log(error);
            }
        },

        // 라운드 목록 조회
        async selectRounds() {
            try {
                const response = await axiosWrapper.get('/rounds');
                this.roundList = response.data
            } catch (error) {
                console.log(error);
            }
        },

        // 팀 목록 조회
        async selectTeams() {
            try {
                const response = await axiosWrapper.get('/teams')
                this.teamList = response.data
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }
})