import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
    } from "react-router-dom";
import './index.css';
import HangmanGame from './hangman-game'
import EmployeeReview from './employee-review'
import { GameSelection } from './game-selection'
import './App.css';
import GameWorld from "./game-world"

ReactDOM.render(
    <BrowserRouter>
        <GameWorld>
            <Routes>
                <Route exact path="/" element={<GameSelection />} />
                <Route path="/hangman" element={<HangmanGame />} />
                <Route path="/employee-review" element={<EmployeeReview />} />
            </Routes>
        </GameWorld>
    </BrowserRouter>,
    document.getElementById('root')
);
