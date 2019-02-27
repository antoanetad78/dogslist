import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class DogsList extends Component {

//This is the child component, it only will render the info in the browser We export it to the paren object, so the parent object can be aware of its existance and be able to pass props.
//also, the parent container is where we add our <DogList /> tag, to instantiate this component. So here we only declare the class, we use it in our paren object. Here this.props refers to what we recive from our parent.
    renderDogBreed(breed) {
        // console.log('base renderDogBreeds breed test:', breed)
        return <li key={breed}><Link to ={`/dog-breeds/${breed}`}>{breed}</Link></li>
    }

    render() {
        // console.log('base render this.props test:', this.props)
        // we create a const that is the destructured value of the 
        //props we recieve from our parent Container component, in this case DogsListContainer
        // from now on the props we use in this component are called dogBreeds.
        const {dogBreeds} = this.props


        return(

            <div className='dogs-list'>
                <h1>Dogs List</h1>
                {/* This code means if dogBreeds equals null, render "Loading..." 
                Whatever is after && will be rendered in case the conditions is true. */}
                {dogBreeds === null && 'Loading...'}

                {/* This code is the same as if(dogBreeds){render hatever is after &&}
            We also take advantage of the fact that when we pass a function as an argument we only pass the 
            declaration and the function that receives it as an argument takes care of everything for us, including passing the arguments...
            So we pass renderDogBreed to the map() function ant map() take care of everything for us. And we map() the dogBreeds we have receved as props 
            from our parent component */}
                {dogBreeds && <ul>{dogBreeds.map(this.renderDogBreed)}</ul>}
            </div> 
        )
    }
}