function khoursa()
{
  var lastName = document.getElementById("lastName").value;
  var firstName = document.getElementById("firstName").value;
  var city = document.getElementById("city").value;
  var  result = "Nom : " + lastName + '\n' + "Prénom : " + firstName + '\n' + "Ville : " + city;
      if (isNaN(lastName) && isNaN(firstName) && isNaN(city))
      {
        alert(result);
      } else {
        alert('Veuillez bien renseigner les champs.');
      }
}
