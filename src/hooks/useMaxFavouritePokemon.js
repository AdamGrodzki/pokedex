import { useState } from 'react';

const useMaxFavouritePokemon = (maxLength) => {
    const [showModal, setShowModal] = useState(false);

    const handleFavouriteToggle = (favouritePokemon) => {
        if (favouritePokemon.length >= maxLength) {
            setShowModal(true);
            return false;
        }
        return true;
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return [showModal, closeModal, handleFavouriteToggle];
};

export default useMaxFavouritePokemon;