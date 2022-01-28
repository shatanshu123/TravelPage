import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data.js"
import './App.css'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div>
            <Nav />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}