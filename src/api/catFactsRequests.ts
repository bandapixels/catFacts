export const getCatFacts = () => {
    return fetch(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=20"
    ).then((response) => {
        return response.json();
    });
};
