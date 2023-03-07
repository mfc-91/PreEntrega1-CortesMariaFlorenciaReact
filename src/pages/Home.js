import React, { useState } from "react";
import "./Home.css";


const Home = ( props ) => {
 	const [count, setCount] = useState(0);
	
	function apicall() {
		setCount(count + 1);
		props.handleCallback(count);
	}
		
	return (
        <>
            <div className="container marketing pt-5 mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <svg
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">
                                140x140
                            </text>
                        </svg>

                        <h2>Heading</h2>
                        <p>
                            Another exciting bit of representative placeholder content. This time, we've moved on to the
                            second column.
                        </p>
						<button onClick={() => apicall()} type="button" className="btn btn-primary">
                            add articulo
                        </button>
                    </div>
                    <div className="col-lg-4">
                        <svg
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">
                                140x140
                            </text>
                        </svg>

                        <h2>Heading</h2>
                        <p>
                            Another exciting bit of representative placeholder content. This time, we've moved on to the
                            second column.
                        </p>
						<button onClick={() => apicall()} type="button" className="btn btn-primary">
                            add articulo
                        </button>
                    </div>
                    <div className="col-lg-4">
                        <svg
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">
                                140x140
                            </text>
                        </svg>

                        <h2>Heading</h2>
                        <p>
                            Another exciting bit of representative placeholder content. This time, we've moved on to the
                            second column.
                        </p>
						<button onClick={() => apicall()} type="button" className="btn btn-primary">
                            add articulo
                        </button>
                    </div>
                </div>



            </div>
        </>
    );
};

export default Home;
