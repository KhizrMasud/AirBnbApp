import react from "react";
import NavBar from "./NavBar.js"
import Middle from './middle.js'
import Cards from './Cards.js'
import './index.css'
import data from './Data.js'

export default function App () {
    const card = data.map( dm => {
        return (

            <Cards 
            keys = {dm.id}
            dm = {dm}

            />
        )
    })

    return (
        <div>
            <NavBar />
            <Middle />
            <section className = 'cards-list'>
                {card}
            </section>

          
            
            
        </div>
    )
}