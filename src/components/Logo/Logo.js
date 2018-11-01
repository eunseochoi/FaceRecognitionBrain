import React from 'react';
import Tilt from 'react-tilt';
import logoimage from './Waterloo.png';
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'> 
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
	 			<div className="Tilt-inner">
	 				<img alt='logo' src={logoimage}/>
	 			</div>
			</Tilt>
			
		</div>
	);

}

export default Logo;