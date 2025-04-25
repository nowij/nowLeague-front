import {defineStore} from "pinia";
import {axiosWrapper} from "@/mixins";

export const useResultStore = defineStore({
    id: 'result',
    state: () => ({
        rankingList: {},
        recentResultList: {}
    }),
    actions: {
        async selectRanking(params) {
            try {
                const response = await axiosWrapper.get('/game/rank', {params});
                this.rankingList = response.data
            } catch (error) {
                console.log('ranking 조회 에러 : ', error);
            }
        },
        async selectRecentResult(params) {
            try {
                const response = await axiosWrapper.get('/game/result/team', {params})
                this.recentResultList = response.data
            } catch(error) {
                console.log('최근 경기 조회 에러 : ', error)
            }
        }
    }
})