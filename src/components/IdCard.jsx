function IdCard(props) {
  return (
    <div>
      <p>Last Name:{props.lastName}</p>
      <p>First Name:{props.firstName}</p>
      <p>Gender:{props.gender}</p>
      <p>Height:{props.height}</p>
      <p>Birth:{props.birth}</p>
      <img src={props.picture} />
    </div>
  );
}

export default IdCard;
