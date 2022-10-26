import React from "react";

import Card from "./Card";
import "./List.css";

const List = ({ Data }) => {
    return (
        <div className='list'>
            {Data.map((photo, index) => {
                return (
                    <Card
                        key={index}
                        image={photo.download_url}
                        name={photo.author}
                    />
                );
            })}
        </div>
    );
};

export default List;