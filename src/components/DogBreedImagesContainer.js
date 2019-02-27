import React, {Component} from 'react'
import * as request from 'superagent'
import DogBreedImages from './DogBreedImages'

export default class DogBreedImagesContainer extends Component {
    
    state = {images: null}

    componentDidMount() {
        console.log('this.props.match test:', this.props.match)
        const breed = this.props.match.params.breed
        console.log('breed test:', breed)
        request
        .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
        .then(response=>this.updateImages(response.body.message))
        .catch(console.error)
    }

    updateImages(images) {
        this.setState({
            images: images
        })
    }

    render(){
        return(
            <DogBreedImages images = {this.state.images} match = {this.props.match}/>
        )
    }
}