import React from 'react'
import {Link} from 'react-router-dom'

export default function DogBreedsImages(props) {
    console.log('props', props);
    
    // const images = Object.keys(props)
    const images = props.images
    console.log('images', images)

    return (
        <div className = "dog-breeds-images">
            <h1>Dog Breeds Images</h1>
            This page will show the images of {props.match.params.breed} breed
            
            <div>
                { images && images.map(url => <img src={ url } alt="Dog" />) }
                { !images && 'Loading...' }
            </div>
            <Link to='/'>Go back to Index</Link>
        </div>
    )
    
}