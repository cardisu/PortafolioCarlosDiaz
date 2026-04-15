import { ItemCounter } from "./shopping-cart/ItemCounter";


interface ItemInCart {
    productName: string;
    quantity: number;
};


const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'PlayStation 5', quantity: 2 },
    { productName: 'Xbox Series X', quantity: 1 },
    { productName: 'Steam Deck', quantity: 3 }
];


export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            {/* <ItemCounter modelName="Nintendo Switch 2" quantity={15} />
            <ItemCounter modelName="PlayStation 5" quantity={20} />
            <ItemCounter modelName="Xbox Series X" quantity={5} />
            <ItemCounter modelName="Steam Deck" quantity={8} /> */}
            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} modelName={productName} quantity={quantity} />
                ))
            }

        </>

    )
}