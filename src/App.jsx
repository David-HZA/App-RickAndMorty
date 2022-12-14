

import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Locationinfo from './components/Locationinfo'
import ResidentCard from './components/ResidentCard'
import ErrorFetch from './components/ErrorFetch'

function App() {

  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Las ubicaciones van de la 1 a la 126
    let URL

    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126) + 1
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
    }

    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        setHasError(true)
        console.log(err)
      })
  }, [locationInput])

  const handeSubmit = e => {
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value);
  }

  return (

    <div className="App">

      <article>
        <header className='card-header'>
          <form className="input-search" onSubmit={handeSubmit}>
            <input className="input" id='inputSearch' type="text" placeholder="TYPE LOCATION ID 1 - 126" />
            <button className="button">Search</button>
          </form>
        </header>


        {
          hasError ?
            <ErrorFetch />
            :
            <>
              <Locationinfo location={location} />

              <div className='residents-container'>
                {
                  location?.residents.map(url => (
                    <ResidentCard key={url} url={url} />
                  ))
                }
              </div>
            </>



        }
      </article>

    </div>
  )
}

export default App







