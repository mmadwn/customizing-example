function DessertsList(props) {
  // Implement the component here.
  const lowCaloriesDessertsList = props.data
    .filter((desserts) => {
      return desserts.calories < 500;
    })
    .sort((a, b) => a.calories - b.calories)
    .map((desserts) => {
      return (
        <li>
          {desserts.name} - ${desserts.calories} cal
        </li>
      );
    });

  return (
  <ul>{lowCaloriesDessertsList}</ul>
);
}

export default DessertsList;
