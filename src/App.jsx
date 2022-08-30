import React from "react";
import { Routes, Route } from "react-router-dom";

import StartScreen from "./screens/StartScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/home" element={<HomeScreen />} />
        </Routes>
    );
};

export default App;
