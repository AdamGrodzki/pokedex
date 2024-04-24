const typeGradients: any = {
    normal: "linear-gradient(to right, #A8A77A, #C6C6A7)",
    fire: "linear-gradient(to right, #EE8130, #F7D486)",
    water: "linear-gradient(to right, #6390F0, #9DB7F5)",
    electric: "linear-gradient(to right, #F7D02C, #FFE599)",
    grass: "linear-gradient(to right, #7AC74C, #A7D94C)",
    ice: "linear-gradient(to right, #96D9D6, #C2F3F5)",
    fighting: "linear-gradient(to right, #C22E28, #E6E0D4)",
    poison: "linear-gradient(to right, #A33EA1, #CE9BFF)",
    ground: "linear-gradient(to right, #E2BF65, #F4F4F4",
    flying: "linear-gradient(to right, #A98FF3, #D6CAFF)",
    psychic: "linear-gradient(to right, #F95587, #FA92B2)",
    bug: "linear-gradient(to right, #A6B91A, #D8D5C4)",
    rock: "linear-gradient(to right, #B6A136, #C4C4A8)",
    ghost: "linear-gradient(to right, #735797, #A292BC)",
    dragon: "linear-gradient(to right, #6F35FC, #A27DFA)",
    dark: "linear-gradient(to right, #705746, #A29288)",
    steel: "linear-gradient(to right, #B7B7CE, #D1D1E0)",
    fairy: "linear-gradient(to right, #D685AD, #F4BEC9"
};

export const colorSwitcher = (type: any) => {
    return typeGradients[type] || "linear-gradient(to right, #A8A77A, #C6C6A7)";
};