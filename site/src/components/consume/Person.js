import { useEffect, useState } from "react";
import React from "react";

import Card from "../project/Card"
import Container from '../layout/Container'
import styles from "./Person.module.css"


function Person(){

    const [person, setPerson] = useState([])

    useEffect(() => {
        (async () => {
          const response = await fetch('http://localhost:5000/person')
          const person = await response.json()
      
          setPerson(person)    
        })()
      }, [])

    return(
        <div className={styles.project_container}>
            <Container customClass="start">
                {person.length > 0 &&
                person.map((pessoa) => (
                    <Card 
                    key={pessoa.id}
                    name={pessoa.name} 
                    userName={pessoa.userName}
                    email={pessoa.email} />
                ))}
            </Container>
        </div>
    )
}

export default  Person
