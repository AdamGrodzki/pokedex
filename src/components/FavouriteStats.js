import React, { useEffect, useState } from 'react';

export const FavouriteStats = ({ favouritePokemons }) => {
    const [totalStats, setTotalStats] = useState(0);

    useEffect(() => {
        const calculateTotalStats = () => {
            let sum = 0;
            console.log("favPoke", favouritePokemons)
            favouritePokemons.forEach((pokemon) => {
                const stats = pokemon.stats;
                const statSum = stats.reduce((acc, stat) => acc + stat.base_stat, 0);
                sum += statSum;
                console.log("poke", pokemon)
            });
            setTotalStats(sum);
        };

        calculateTotalStats();
    }, [favouritePokemons]);

    return (
        <div className="favourite-stats">
            <h2>Total Stats for Favorite Pokemon</h2>
            <p>Sum of Stats: {totalStats}</p>
        </div>
    );
};

