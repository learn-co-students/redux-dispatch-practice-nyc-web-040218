export let state;

let initState = {pets: []}

export function managePets(state=initState, action){
  switch(action.type){
    case 'ADD_PET': return {pets: [...state.pets, action.pet]}

    case 'REMOVE_PET': return {pets: state.pets.filter(pet => pet.id !== action.id)}


    default: return state
  }
}

export function dispatch(actionToTake){
  state = managePets(state, actionToTake)
  render()
}

export function render(){
  let main = document.getElementById('container')
  let names = state.pets.map(pet => {return `<ul><li>${pet.name}</li></ul>`}).join(' ')
  main.innerHTML = names
}
//Done
