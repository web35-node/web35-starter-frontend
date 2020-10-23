import axios from 'axios'
import React, {useState, useEffect} from 'react'
import DogAdd from './components/DogAdd'
import DogCard from './components/DogCard'

import './App.scss'

function App() {
  const [baseurl] = useState("https://dogs-api-web35.herokuapp.com")
  const [data, setData] = useState([
    {
      id: 1,
      breed: "Loading dogs",
      imageUrl: "https://source.unsplash.com/random/320x200"
    }
  ])
  const [refresh, setRefresh] = useState(true)


  const refreshHandler = () => {
    setRefresh(!refresh)
  }

  useEffect(()=>{
    axios.get(`${baseurl}/dogs`)
      .then((res)=>{
        console.log(res.data)
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[refresh])

  
  return (
    <>
      <DogAdd baseurl={baseurl} refreshHandler={refreshHandler} />
      {
        data.map(dog => (
          <DogCard key={dog.id} dog={dog} refreshHandler={refreshHandler} baseurl={baseurl} />
        ))        
      }
    </>
  );
}

export default App;
