
 // define MyCard, which receives props
 function MyCard(props) {
    // read the character name from props
    const characterName = props.name;
    // read the anime series from props
    const animeSeries = props.series;
    // read the character description from props
    const characterDescription = props.description;
    // read the character image from props
    const characterImage = props.image;
  
    // return the card
    return (
      <div className="market-card">
        {/* show the anime character image */}
        <img
          src={characterImage}
          alt={characterName}
          width="150"
          height="150"
        />
        {/* show the character name */}
        <h2 className="market-name">{characterName}</h2>
        {/* show the anime series */}
        <p className="market-index">{animeSeries}</p>
        {/* show the character description */}
        <p className="market-change">{characterDescription}</p>
      </div>
    );
  }
  
  // make MyCard available to other files
  export default MyCard;
  