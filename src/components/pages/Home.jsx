/*
 * Three different locations to store images:
 *   - public folder
 *   - src/assets folder
 *   - on the server
 *  
 *  https://www.upbeatcode.com/react/where-to-store-images-in-react-app/
 *
 */

import styles from "./Home.module.css";

const Home = (props) => {

    return (
        <>
            <section className={styles.jumbotron}>
                <h1>Welcome to the Movie Reviewer Database</h1>
                <p>Comment and rate your favorite movies as well as see what is playing in the theaters now.</p>
                <p>Fun for the whole family. 🍿 </p>
            </section>

            <section className={styles.featuredMoviesContainer}>
                <h2>Featured Movies:</h2>
                <div className={styles.featuredMoviesList}>
                {
                    props.movies.map((item, index) => {
                        return (
                            <div key={index} className={styles.featuredMovie}>
                                <a href="#"><img src={item.image} alt={item.alt} /></a>
                                <div className={styles.featuredMovieInfo}>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </section>  
        </>
    );

}

export default Home;