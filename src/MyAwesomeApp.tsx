import type { CSSProperties } from "react";

const name = 'Carlitos';
const lastName = 'Diaz';

const favoriteGames = ['The Legend of Zelda', 'Super Mario Bros', 'Minecraft'];
const isAtive = true;

const anddres = {
    name: 'Mario',
    lastName: 'Gomez',
    favoriteGames: ['FIFA', 'Call of Duty', 'Fortnite'],
    isAtive: false
}

const MyStyle: CSSProperties = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: 'lightgray',
    margin: '10px',
}

export function MyAwesomeApp() {
    return (
        <>
            <h1 style={MyStyle}>{name}</h1>
            <h3>{lastName}</h3>
            <p>Favorite games: {favoriteGames.join(" - ")}</p>
            <p>Is active: {isAtive ? "Yes" : "No"}</p>
            <div>
               <h1>{anddres.name}</h1>
            </div>
        </>
    )
}