import React, { useEffect, useState } from 'react';
import "../styles/favouriteStats.css"
import combatPowerIcon from "../assets/images/combat_power.png"


import { FaHeart } from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import { FaShield } from "react-icons/fa6";
import { GiSteeltoeBoots } from "react-icons/gi";
import { GiSpinningSword } from "react-icons/gi";
import { GiBoltShield } from "react-icons/gi";


export const FavouriteStats = ({ favouritePokemons }) => {
    const [totalAttack, setTotalAttack] = useState(0);
    const [totalDefense, setTotalDefense] = useState(0);
    const [totalSpecialAttack, setTotalSpecialAttack] = useState(0);
    const [totalSpecialDefense, setTotalSpecialDefense] = useState(0);
    const [totalHP, setTotalHP] = useState(0);
    const [totalSpeed, setTotalSpeed] = useState(0);

    useEffect(() => {
        const calculateTotalStats = () => {
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

            setTotalAttack(attackSum);
            setTotalDefense(defenseSum);
            setTotalSpecialAttack(specialAttackSum);
            setTotalSpecialDefense(specialDefenseSum);
            setTotalHP(hpSum);
            setTotalSpeed(speedSum);
        };

        calculateTotalStats();
    }, [favouritePokemons]);

    return (
        <div className="favourite-stats">
            <h2>Total Stats for Favourite Pokemon</h2>
            <p className="combat-power"><img src={combatPowerIcon} alt="combat-power" /> Sum of Stats: <span className="total-stats">{totalAttack + totalDefense + totalSpecialAttack + totalSpecialDefense + totalHP + totalSpeed}</span></p>
            <div className="stat-breakdown">
                <p><RiSwordFill color="#E50000" size={30} />Attack: <span>{totalAttack}</span></p>
                <p><FaShield color="#FFFF00" size={30} />Defense: <span>{totalDefense}</span></p>
                <p><GiSpinningSword color="#0000ff" size={30} /> Special Attack: <span>{totalSpecialAttack}</span></p>
                <p><GiBoltShield color="#007300" size={30} />Special Defense: <span>{totalSpecialDefense}</span></p>
                <p><FaHeart color="#69DC12" size={30} />HP: <span>{totalHP}</span></p>
                <p><GiSteeltoeBoots color="#ffc0cb" size={30} /> Speed: <span>{totalSpeed}</span></p>
            </div>
        </div>
    );
}