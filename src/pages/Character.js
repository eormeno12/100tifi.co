const Character = () => {
    const view = `
        <section class="characters-inner">
            <article class="character-card">
                <img src="image" alt="name">
                <h2>Name</h2>
            </article>
            <article class="character-card">
                <h3>Status:</h3>
                <h3>Last location:</h3>
                <h3>Origin:</h3>
                <h3>Specie:</h3>
                <h3>Gender:</h3>
                <h3>Episodes:</h3>
            </article>
        </section>
    `;

    return view;
}

export default Character;