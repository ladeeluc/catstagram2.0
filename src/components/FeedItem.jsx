// Exercise 2: Set It Up
	// write a class component
	// make it a div with className FeedItem
	// make an img element inside
	// import Likes, include it underneath img
	// export default the component!

// Exercise 3: Prop It Up
	// pass in props as params to the component
	// destructure what you need from the props
	// Hint: what do you need in order to get the image to display?
	// Hint: what do you need in order to get likes to display in the Likes component?

	import React from 'react';
import Likes from './Likes.jsx';
import datainfo from '../data.json'

function FeedItem(props) {
	const {photos} = datainfo
	//const {photos} = props
   

    return (
        <div className="FeedItem">
			{photos.map(photo =>  
            <div><img className="Image" alt = "cat" src={photo.url}/>
			<Likes totalLikes={photo.likes} />
		</div>)
	
	}

        </div>
    );
}

export default FeedItem;



