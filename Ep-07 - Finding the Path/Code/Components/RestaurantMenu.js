import { useEffect, useState } from "react";
import { DISH_URL, RES_URL } from "../Utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        console.log('Use effect called');
        fetchRestaurantData();
    }, []);

let {resId} = useParams();

    const fetchRestaurantData = async () => {

        const data = await fetch(RES_URL+resId);
        const json = await data.json();

        console.log('Restaurant Data ', json);
        setResMenu(json.data);
    }

    if (resMenu == null) {
        return <Shimmer />
    }
    const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log('Recommended ', itemCards);



    return (
        <>

            <div className="category">
                <h3 className="cat-heading">Recommended</h3>
                <div className="res-menu-cards">
                    {
                        itemCards.map((card) => {
                            const { name, description,imageId, id } = card.card.info;
                            return (
                                <div key={id} className="dish-card">

                                    <div className="dish-details">
                                        <p>{name}</p>
                                        <span className="dish-price">{card.card.info.price ? (card.card.info.price/ 100) : card.card.info.defaultPrice/ 100}</span>
                                        <span className="dish-desc">{description}</span>
                                    </div>
                                    <div >
                                        <img className="dish-img" src={DISH_URL + imageId}></img>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default RestaurantMenu;