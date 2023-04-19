import { games } from './data/games'
import { Link } from 'react-router-dom'

export const GameSelection = () => {
    return (
        <div className='game-selection-menu'>
            {games.map((game, index) => (
                <div key={index}>
                    <Link to={game.url}>
                        <div className='game-selection-option'>
                            <img className='game-selection-image' style={{ maxWidth:220 }} src={game.icon} alt={`icon for ${game.title}`} />
                            <h3>{game.title}</h3>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
