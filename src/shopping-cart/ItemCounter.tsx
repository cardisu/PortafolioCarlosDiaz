import { useState } from "react";

import './ItemCounter.css';

interface Props {
    modelName: string;
    quantity?: number;
};


export const ItemCounter = ({ modelName, quantity }: Props) => {

    const [count, setCount] = useState(10);

    const handleClick = () => {
        quantity = (quantity ?? 10) + 1;
        console.log(quantity);
    };

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSubstract = () => {
        if (count === 1) return;
        setCount(count - 1);

    };

    return (
        <section className="item-row">
            <span className="item-text" style={{
                color: count === 1 ? 'red' : 'black'
            }}>{modelName}</span>
            <button
                onClick={() => {
                    handleAdd();
                }}
            >+1</button>
            <span>{count}</span>
            <button
                onClick={() => {
                    handleSubstract();
                }}
            >-1</button>
        </section>

    )
};


