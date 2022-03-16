import styles from "./Card.module.css"


function CompanyDados({ nameCompany, catchPhrase, bs}){


    return(
        <div className={styles.project_card}>
            <h4 >Nome da Company: {nameCompany}</h4>
            <p>
                <span>Frase:</span> {catchPhrase}
            </p>
            <p>
                <span>BS:</span> {bs}
            </p>
        </div>
    )
}

export default CompanyDados