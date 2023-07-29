import React,{useState, useEffect} from "react"
// import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
import "./globalCSS.css"

const App= ()=>{

    // const list = ['Naruto', ' Bleach', ' One Piece', ' Berserk', ' BNHA', ' Highschool Dxd', ' Fairy Tale', ' Kiss x Sis', ' Beastars', ' BNA', ' Haikyuu', ' Air Gear', ' Slam Dunk', ' Baki', ' Hajime no Ippo', ' Death Note', ' Cowboy Bebop', ' Neon Genesis Evangelion', ' Mobile Suit Gundam', ' Mobile Suit Gundam Wing', ' Mobile Suit Gundam Seed', ' Cells at Work', ' Gurren Lagann', ' Samurai Champloo', ' Astro Boy', ' Mahou Shoujo', ' Pokemon', ' Digimon', ' Bakugan', ' Bakuman', ' Samurai 7', ' Samurai 8', ' Food Wars', ' Tower of God', ' God of Highschool', ' How Not to Pick up girls in a dungeon', ' SAo', ' Log horizon', ' Rising of the Shield Hero', ' Mazinger Z', ' Youjo Senki', ' Konosuba', ' Re; Zero', ' Getter Robo', ' Pluto', ' Akatsuki no Yona', ' Boruto', ' Jujutsu Kaisen', ' Kill La Kill', ' Black Clover', ' The Promised Neverland', ' Ponyo', ' My Neighbor Totoro', ' Howl’s Moving Castle', ' Spiriting Away', ' Lupin the 3rd', ' Detective Conan', ' Osomatsu - san', ' Ninja Scrolls', ' Inuyasha', ' Doraemon', ' Sazae - San', ' Another', ' Uzumaki', ' Tokyo Ghoul', ' Clannad', ' Elfen Lied', ' Ghost in the Shell', ' Nisemonogatari', ' Kizumonogatari', ' Bakemonogatari', ' Katanagatari', ' Baccano', ' Ouran Highschool Host Club', ' Ghost Stories', ' Dragon Ball', ' Dragon Ball Z', ' Dragon Ball Gt', ' Dragon Ball Z Kai', ' Dragon Ball Super', ' Naruto Shippuden', ' Ping Pong the Animation', ' Hamatora', ' Danganronpa', ' Persona 3', ' Persona 4', ' Persona 5 the animation', ' Akira', ' Perfect Blue', ' Paprika', ' Yu Gi Oh', ' Fullmetal Alchemist', ' Fullmetal Alchemist Brotherhood', ' Highschool of the Dead', ' Aki - Sora', ' Boku no Pico', ' Panty and Stocking', ' Chainsaw Man', ' Mashle', ' Demon Slayer', ' Yasahime', ' Solo Leveling', ' Fire Punch', ' Judge', ' Fist of the North Star', ' Saint Oniisan', ' Yotsuba', ' Mirai Nikki', ' Saiki K', ' Rurouni Kenshin', ' Afro Samurai', ' Samurai Usagi', ' Kekkaishi', ' The girl Who Leapt Through Time', ' No Gun Life', ' Kekkai Sensen', ' Noragami', ' Tokyo Ghoul: Re', ' BNHA Vigilantes', ' Vinland Saga', ' Hellsing', ' Black Bullet', ' Seven Deadly Sins', ' Mob Psycho 100', ' One Punch Man', ' Kaguya Sama: Love is War', ' Dr Stone', ' Agravity Boys', ' World Trigger', ' Made in Abyss', ' Deca Dence', ' Darling in the FranXX', ' Kaze no Stigma', ' Trigger', ' Blame', ' Garden of Wars', ' Secret World of Arrietty', ' The Flying Castle', ' Little Witch Academia', ' Fire Force', ' Soul Eater', ' God Eater', ' Goblin Slayer', ' Golden Kamuy', ' Jojo’s Bizarre Adventure', ' Keep your hands off of Eizou Ken Chan', ' How Not to Summon a Demon Lord', ' Overlord', ' Parasyte', ' Nejimaki Kagyu', ' GTO', ' Initial D', ' Chihayafuru', ' Tomie', ' Spy X Family', ' Kuroko no Basket', ' Sayonara Zetsubo Sensei', ' Lovely Complex', ' Your Lie in April']
    const [list,updateList]=useState([])
    const displaySeachbar= list.length > 0

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray)=>{
                const newList= productsArray.map((product)=>{return product})
                updateList(newList)
            })
    },[])

    return (
        <div>
            {displaySeachbar ? <SearchBar items={list}/> : <img src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="loading..."/>}

            {/* <CountButton incrementBy={1} color={"blue"} borderRad={"0px"}/>
            <CountButton incrementBy={2} color={"green"} borderRad={"5px"}/>
            <CountButton incrementBy={5} color={"red"} borderRad={"10px"}/>
            <CountButton incrementBy={10} color={"yellow"} borderRad={"20px"}/> */}
        </div>
    )
}

export default App