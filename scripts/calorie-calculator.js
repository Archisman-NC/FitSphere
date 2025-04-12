document.getElementById('calcForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const age = +document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const weight = +document.getElementById('weight').value;
  const height = +document.getElementById('height').value;
  const activity = +document.getElementById('activity').value;

  let bmr = gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  const calories = Math.round(bmr * activity);

  const protein = Math.round(weight * 2.2);
  const fats = Math.round((calories * 0.25) / 9);
  const carbs = Math.round((calories - (protein * 4 + fats * 9)) / 4);

  document.getElementById('result').innerHTML = `
    <h3>Daily Requirements</h3>
    <p>Calories: ${calories} kcal</p>
    <p>Protein: ${protein} g</p>
    <p>Fats: ${fats} g</p>
    <p>Carbohydrates: ${carbs} g</p>
  `;
});
