import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";

import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Wrapper from "./pages/Wrapper";

export default function App() {
	// const [data, setData] = useState([
	// 	{id: 1, name: 'bici'},
	// 	{id: 2, name: 'reloj'}
	// ]);

	const [count, setCount] = useState(0);

	//let temp = 0;
	const callBack = (message) => {
		setCount( message )
		console.log('PARENT: ', message )
  	};

    return (
        <>
		<Header message={count}></Header>
            <Wrapper>
                <Routes>
                    <Route path="/" element={ <Home handleCallback={callBack} /> } />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
         	  	<Footer />
            </Wrapper>
        </>
    );
}
