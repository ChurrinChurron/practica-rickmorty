const Characters = ({characters, setCharacters}) => {

  const reseteo = () => {

    setCharacters(!characters);
  }

  return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={reseteo}>Volver a home</span>
        <div className="container-characters">
          {characters.map(character => (
            <div className="character-container" key={character.id}>
              <div>
                <img src={character.image} alt={character.name} />
              </div>
              <div>
                <h3>{character.name}</h3>
                <h6>
                  {character.status === "Alive" ? 
                    <>
                      <span className="alive"></span>
                      Alive
                    </> : 
                    <>
                      <span className="dead"></span>
                      Dead
                    </>}
                </h6>
                <p>
                  <span className="text-grey">Episodios: </span>
                  <span>{character.episode.length}</span>
                </p>
                <p>
                  <span className="text-grey">Especie: </span>
                  <span>{character.species}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <span className="back-home" onClick={reseteo}>Volver a home</span>
    </div>
  )
}

export default Characters