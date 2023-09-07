
function getSuperheroName() {
  let animalName, gender, age;

  animalName = prompt("What animal is the superhero most similar to?");
  if (!/^[a-zA-Z]{1,20}$/.test(animalName)) {
    alert("Wrong input!\nAnimal name input requirements: length <= 20, only one word that contains only letters.");
    return;
  }

  gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
  if (gender !== "" && !/^(male|female)$/i.test(gender)) {
    alert("Wrong input!\nGender input requirements: accepts only male, female, or blank (not case sensitive).");
    return;
  }

  age = prompt("How old is the superhero?");
  if (!/^[1-9][0-9]{0,4}$/.test(age)) {
    alert("Wrong input!\nAge input requirements: length <= 5, only digits, cannot start with a zero.");
    return;
  }

  let description;
  if (gender.toLowerCase() === 'male') {
    description = (age < 18) ? 'boy' : 'man';
  } else if (gender.toLowerCase() === 'female') {
    description = (age < 18) ? 'girl' : 'woman';
  } else {
    description = (age < 18) ? 'kid' : 'hero';
  }

  alert(`The superhero name is: ${animalName}-${description}!`);
}

getSuperheroName();
