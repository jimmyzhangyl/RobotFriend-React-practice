import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    //test if there is a erro
    // if (true){
    //     throw new Error("Noooo");
    // }
    const cardArray = robots.map((user, i) => {
        return <Card key={i} id={user.id} name={user.name} email={user.email} />
    });
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;