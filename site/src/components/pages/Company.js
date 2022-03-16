import { useEffect, useState } from "react";
import React from "react";
import CompanyDados from "../project/CompanyDados"
import Container from '../layout/Container'

import styles from './Home.module.css'

function Company(){

    const [person, setPerson] = useState([])

    useEffect(() => {
        (async () => {
          const response = await fetch('http://localhost:5000/person')
          const person = await response.json()
      
          setPerson(person)    
        })()
      }, [])

    return(
        <div>
            <div className={styles.project_container}>
            <Container customClass="start">
                {person.length > 0 &&
                person.map((pessoa) => (
                    <CompanyDados
                    key={pessoa.id}
                    nameCompany={pessoa.nameCompany} 
                    catchPhrase={pessoa.catchPhrase}
                    bs={pessoa.bs} />
                ))}
            </Container>
        </div>
        </div>
    )
}

export default Company;