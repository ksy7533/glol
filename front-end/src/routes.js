import Score from './components/containerComp/leftSectionComp/Score.vue';
import Champion from './components/containerComp/leftSectionComp/Champion.vue';
import League from './components/containerComp/leftSectionComp/League.vue';

export const routes = [
    { path: '/summoner/score', component: Score },
    { path: '/summoner/champion', component: Champion },
    { path: '/summoner/league', component: League },
]