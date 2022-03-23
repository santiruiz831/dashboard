import React from "react";

function Navitems(props){
	console.log(props)
    return(
        <li className="nav-item">
				<a className="nav-link" href="/">
					<i className={props.icon}></i>
					<span>{props.menuName}</span></a>
			</li>
    )
}

export default Navitems;