import React from 'react';
import './App.css';

const App = () => <PersonList />

const PersonList = () => {

  const people = [
    {
      img: 24, name: 'Arvind', job: 'IDM Developer'
    },
    {
      img: 14, name: 'Venky', job: 'UI-developer'
    },

    {
      img: 34, name: 'Karya', job: 'software eveloper'
    }
  ]

  return <section>
    <Person person={people[0]}/>
    <Person person={people[1]}>
      {/* hgderigeruvbghdyghevgbdugegvbigihgfdfgufgduighuigh */}
    </Person>
    <Person person={people[2]}/>
  </section>
}
const Person = (props) => {
  const {img,name,job}=props.person;
  // const {children}=props;
  const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return <div className='person'>
    <img src={url} alt=""></img>
    <div>
  
      <h4>{name}</h4>
      <h4>{job}</h4>
      {/* {children} */}
      </div>
  </div>
}


export default App;
