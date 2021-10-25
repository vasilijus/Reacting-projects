import React from "react";

const List = ({ items, title }) => {
    

    return (
        <>
            <h3>{title}</h3>
            {items.map(item =>
            <ul>
                <li key={item.label}>
                    <strong>{item.label}</strong> {item.value}
                </li>
            </ul>
            )}
        </>
    )
}

export default List;