import React, { useEffect, useState } from 'react';
import "../styles/favouriteStats.css"
import combatPowerIcon from "../assets/images/combat_power(2).png"


export const FavouriteStats = ({ favouritePokemons }) => {
    const [totalStats, setTotalStats] = useState(0);

    useEffect(() => {
        const calculateTotalStats = () => {
            let sum = 0;
            favouritePokemons.forEach((pokemon) => {
                const stats = pokemon.stats;
                const statSum = stats.reduce((acc, stat) => acc + stat.base_stat, 0);
                sum += statSum;
            });
            setTotalStats(sum);
        };

        calculateTotalStats();
    }, [favouritePokemons]);

    return (
        <div className="favourite-stats">
            <h2>Total Stats for Favorite Pokemon</h2>
            <p className="combat-power"><img src={combatPowerIcon} alt="combat-power" /> Sum of Stats: <span className='total-stats'>{totalStats}</span></p>
        </div >
    );
};

