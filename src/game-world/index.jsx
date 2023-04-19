import React from 'react'
import { Link } from 'react-router-dom'

const GameWorld = ({children}) => {
    return (
    	<div className="App">
            <div className="App-header">
                <Link to='/'>
                    <div style={{
                            display:'flex',
                            alignItems:'baseline'
                         }}>
                        <h2>GameWorld </h2>
                        <h4 style={{ fontWeight:300 }}> &nbsp;by Jake</h4>
                    </div>
                </Link>
                <h4 style={{ fontWeight:250 }}>Yeah I like NBC's The Office.</h4>
            </div>
            <main>
                {children}
            </main>
    	</div>
    )
    
}

export default GameWorld
