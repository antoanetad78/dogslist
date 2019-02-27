import React, {Component} from 'react'
import * as request from 'superagent'
import DogsList from './DogsList'



export default class DogsListContainer extends Component {
    state = {dogBreeds: null}

    componentDidMount() {
        request
        .get('https://dog.ceo/api/breeds/list/all')
        .then(response=>response.body.message)
        .then(result=>{
            const breeds = Object.keys(result)
            // console.log('result breeds test:', breeds)
            this.updateBreeds(breeds)
        })
        .catch(console.error)
    }
    
    updateBreeds(breeds) {
        // console.log('updateBreeds breeds test:', breeds)
        this.setState({
            dogBreeds: breeds
        })
    }

    render(){
        // console.log('render this.state.dogBreeds:', this.state.dogBreeds)
        //DogsList is instantiated here. Thi means that this is where we pass it its props or the arguments it expects. 
        //whatwever it expects to recieve when instantiated is defined in the DogsList.js
        //the names of proops - in this case - dogBreeds should match 
        return <DogsList dogBreeds={this.state.dogBreeds}/>
    }

}

