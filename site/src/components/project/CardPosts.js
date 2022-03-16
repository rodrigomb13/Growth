import styles from "./Card.module.css"


function CardPosts({id,name,nameCompany,title, body}){

    return(

        <div className={styles.project_card}>
            <span>Nome:</span>{name}
            <h4>{nameCompany}</h4>
            <h4 >{title}</h4>
            <p>
                <span>Mensagem:</span> {body}
            </p>
            
        </div>
    )
}

export default CardPosts