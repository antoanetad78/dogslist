import React, {Component} from 'react'
import * as request from 'superagent'


export default class DogsList extends Component {
    state = {dogBreeds: null}

    componentDidMount() {
        request
        .get('https://dog.ceo/api/breeds/list/all')
        .then(response=>response.body.message)
        .then(result=>this.updateBreeds(Object.keys(result)))
        .catch(console.error)
    }

    updateBreeds(breeds) {
        this.setState({
            dogBreeds: breeds
        })
    }

    render() {
        let breeds
        if (this.state.dogBreeds) {
            breeds = this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>)
        }
        return(
            <div className='dogs-list'>
                <h1>Dogs List</h1>
                { this.state.dogBreeds === null && 'Loading...'}

                {<ul>
                    {breeds}
                </ul>}
            </div>
        )
    }
}