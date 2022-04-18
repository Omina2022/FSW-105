const shopper = {
  firstName: "Omina",
  lastName: "Sharifzoda",
 shop:"tomatoes",
  price: 4,
  location: "Walmart",
  hasCreditCard: true,
  FullName: function() {
    return this. firstName+ this.lastName;
  }
}

console.log(shopper.FullName());