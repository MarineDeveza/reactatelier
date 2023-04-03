const HouseCard = ({ house }) => {
    return (
          <div class="card">
            <p>{house.name}</p>
            <p>{house.type}</p>
            </div>
        )
};

export default HouseCard;