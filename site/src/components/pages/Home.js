import { useEffect, useState } from "react";
import React from "react";

import Container from '../layout/Container'
import CardPosts from '../project/CardPosts'
// import Card from "../project/Card"
// import Person from '../consume/Person'

import styles from './Home.module.css'

function Home(){

    const [posts, setPost] = useState([])

    // const [person, setPerson] = useState([])
    useEffect(() => {
        (async () => {
          const response = await fetch('http://localhost:5000/posts')
          const posts = await response.json()
      
          setPost(posts)    
        })()
      }, [])
   
      

    // useEffect(() => {
    //     (async () => {
    //       const response = await fetch('http://localhost:5000/person')
    //       const person = await response.json()
      
    //       setPerson(person)    
    //     })()
    //   }, [])

    return(
        
            <div className={styles.project_container}>
                <Container customClass="start">
                    {posts.length > 0 &&
                    posts.map((poste) => (
                        <CardPosts 
                        key={poste.id}
                        title={poste.title} 
                        body={poste.body}/>
                    ))}
                </Container>
            </div>
           
           
    )
}

export default Home;