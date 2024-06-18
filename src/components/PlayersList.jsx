import players from '../players';
import Player from './Player';


const PlayerList = () =>{
    return(
        <div className="player-list">
            {players.map((player, index) => {
                const { nom, equipe, nationalite, numeroMaillot, age, imageUrl} = player;
                return (
                    <Player
                        key={index}
                        nom={nom}
                        equipe={equipe}
                        nationalite={nationalite}
                        numeroMaillot={numeroMaillot}
                        age={age}
                        imageUrl={imageUrl}
                    />
                );
            })}
        </div>
    )
}
export default PlayerList;