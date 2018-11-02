import React from 'react';

const FaceRecognition = ({imageURL}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt3 '>
				<img alt='' width='500px' height='auto' src={imageURL}/>
			</div>
		</div>
	);

}

export default FaceRecognition;