import HomeView from './../views/Home/HomeView';
import NewGameView from '../views/NewGame/NewGameView';
import Game from '../views/Game/Game';
import EndGameView from '../views/EndGame/EndGame';

var indexRoutes = [
    { path: '/new-game', name: 'New Game', component: NewGameView },
    { path: '/game', name: 'Game', component: Game },
    { path: '/end-game', name: 'End Game', component: EndGameView },
    { path: '/', name: 'Home', component: HomeView },
]

export default indexRoutes;