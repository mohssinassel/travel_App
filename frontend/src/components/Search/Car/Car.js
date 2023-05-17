

import React from "react";
import '../search.css';

const Car = () => {
    return(
        <form className="homeSearch">
            <input type="text" className="where" ></input>
            <input type="date" className="date"></input>
            {/* <input type="text" className="number"></input> */}
            <input type="submit" className="submit"></input>
        </form>
    )
}

export default Car;