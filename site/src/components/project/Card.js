import styles from "./Card.module.css"


function Card({ name, userName, email}){


    return(

        <div className={styles.project_card}>
            <h4 >{name}</h4>
            <p>
                <span>UserName:</span> {userName}
            </p>
            <p>
                <span>Email:</span> {email}
            </p>
        </div>
    )
}

export default Card