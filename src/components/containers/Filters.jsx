import React, {useState} from "react";
import CheckBox from "../presentational/CheckBox";
import styles from "./Filters.module.css";

const Filters = ({handleFilters}) => {

    const [action, setAction] = useState(false);
    const [adventure, setAdventure] = useState(false);
    const [comedy, setComedy] = useState(false);
    const [drama, setDrama] = useState(false);
    const [fantasy, setFantasy] = useState(false);
    const [thriller, setThriller] = useState(false);

    const [categories, setCategories] = useState(
        {  
           Action: false, 
           Adventure: false,
           Comedy: false,
           Drama: false,
           Fantasy: false,
           Thriller: false,
        }
    );

    const updateCategories = (category, value) => {
       const newCatories = {...categories};
       newCatories[category] = value;
       setCategories(newCatories);
    }

    const handleActionChange = () => {
        updateCategories("Action", !action);
        setAction(!action);
        handleFilters({...categories, Action: !action});
    }

    const handleAdventureChange = () => {
        updateCategories("Adventure", !adventure);
        setAdventure(!adventure);
        handleFilters({...categories, Adventure: !adventure});
    }

    const handleComedyChange = () => {
        updateCategories("Comedy", !comedy);
        setComedy(!comedy);
        handleFilters({...categories, Comedy: !comedy});
    }

    const handleDramaChange = () => {
        updateCategories("Drama", !drama);
        setDrama(!drama);
        handleFilters({...categories, Drama: !drama});
    }

    const handleFantasyChange = () => {
        updateCategories("Fantasy", !fantasy);
        setFantasy(!fantasy);
        handleFilters({...categories, Fantasy: !fantasy});
    }

    const handleThrillerChange = () => {
        updateCategories("Thriller", !thriller);
        setThriller(!thriller);
        handleFilters({...categories, Thriller: !thriller});
    }

    return (
        <div className={styles.moviesFilter}>
            <h4>Filter by: </h4>
            <CheckBox
                name="categories"
                label="Action"
                value={action}
                onChange={handleActionChange}
            />
            <CheckBox
                name="categories"
                label="Adventure"
                value={adventure}
                onChange={handleAdventureChange}
            />
            <CheckBox
                name="categories"
                label="Comedy"
                value={comedy}
                onChange={handleComedyChange}
            />
            <CheckBox
                name="categories"
                label="Drama"
                value={drama}
                onChange={handleDramaChange}
            />
            <CheckBox
                className="filters"
                name="categories"
                label="Fantasy"
                value={fantasy}
                onChange={handleFantasyChange}
            />
            <CheckBox
                className="filters"
                name="categories"
                label="Thriller"
                value={thriller}
                onChange={handleThrillerChange}
            />
        </div>
    );
}

export default Filters;