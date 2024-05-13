import { useEffect, useState } from "react";
import "../styles/favouriteStats.css"
import combatPowerIcon from "../assets/images/combat_power.png"
import { FaHeart } from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import { FaShield } from "react-icons/fa6";
import { GiSteeltoeBoots } from "react-icons/gi";
import { GiSpinningSword } from "react-icons/gi";
import { GiBoltShield } from "react-icons/gi";

interface Pokemon {
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
}

const calculateTotalStats = (favouritePokemons: Pokemon[]) => {
    let attackSum = 0;
    let defenseSum = 0;
    let specialAttackSum = 0;
    let specialDefenseSum = 0;
    let hpSum = 0;
    let speedSum = 0;

    favouritePokemons.forEach((pokemon) => {
        const stats = pokemon.stats;
        stats.forEach((stat) => {
            switch (stat.stat.name) {
                case "attack":
                    attackSum += stat.base_stat;
                    break;
                case "defense":
                    defenseSum += stat.base_stat;
                    break;
                case "special-attack":
                    specialAttackSum += stat.base_stat;
                    break;
                case "special-defense":
                    specialDefenseSum += stat.base_stat;
                    break;
                case "hp":
                    hpSum += stat.base_stat;
                    break;
                case "speed":
                    speedSum += stat.base_stat;
                    break;
                default:
                    break;
            }
        });
    });

    return {
        totalAttack: attackSum,
        totalDefense: defenseSum,
        totalSpecialAttack: specialAttackSum,
        totalSpecialDefense: specialDefenseSum,
        totalHP: hpSum,
        totalSpeed: speedSum
    };
};

export const FavouriteStats = ({ favouritePokemons }: {favouritePokemons: Pokemon[]}) => {
    const [totalStats, setTotalStats] = useState({
        totalAttack: 0,
        totalDefense: 0,
        totalSpecialAttack: 0,
        totalSpecialDefense: 0,
        totalHP: 0,
        totalSpeed: 0
    });

    useEffect(() => {
        const calculatedStats = calculateTotalStats(favouritePokemons);
        setTotalStats(calculatedStats);
    }, [favouritePokemons]);

    return (
        <div className="favourite-stats">
            <h2>Total Stats for Favourite Pokemon</h2>
            <p className="combat-power"><img src={combatPowerIcon} alt="combat-power" /> Sum of Stats: <span className="total-stats">{totalStats.totalAttack + totalStats.totalDefense + totalStats.totalSpecialAttack + totalStats.totalSpecialDefense + totalStats.totalHP + totalStats.totalSpeed}</span></p>
            <div className="stat-breakdown">
                <p><RiSwordFill color="#E50000" size={30} />Attack: <span>{totalStats.totalAttack}</span></p>
                <p><FaShield color="#FFFF00" size={30} />Defense: <span>{totalStats.totalDefense}</span></p>
                <p><GiSpinningSword color="#0000ff" size={30} /> Special Attack: <span>{totalStats.totalSpecialAttack}</span></p>
                <p><GiBoltShield color="#007300" size={30} />Special Defense: <span>{totalStats.totalSpecialDefense}</span></p>
                <p><FaHeart color="#69DC12" size={30} />HP: <span>{totalStats.totalHP}</span></p>
                <p><GiSteeltoeBoots color="#ffc0cb" size={30} /> Speed: <span>{totalStats.totalSpeed}</span></p>
            </div>
        </div>
    );
}
