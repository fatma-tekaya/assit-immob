import React from 'react'
import './companies.css'
import agent1 from'C:/Users/jok02/Desktop/pfa/immovff/src/assets/agent1.PNG'
import agent2 from 'C:/Users/jok02/Desktop/pfa/immovff/src/assets/agent2.PNG'
import agent3 from 'C:/Users/jok02/Desktop/pfa/immovff/src/assets/agent3.PNG'
import agent4 from 'C:/Users/jok02/Desktop/pfa/immovff/src/assets/agent4.PNG'
const Companies = () => {
  return (
    <section className="c-wrapper">
        <div className="c-container paddings innerWidth flexCenter">
            <img src={agent1} alt="agent1" />
            <img src={agent2} alt="agent2" />
            <img src={agent3} alt="agent3" />
            <img src={agent4} alt="agent4" />
        </div>
    </section>
  )
}

export default Companies