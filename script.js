const pets = [
  {
    name: "Bella",
    type: "Dog",
    age: 3,
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Max",
    type: "Cat",
    age: 2,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Luna",
    type: "Rabbit",
    age: 1,
    image: "https://placebear.com/300/300"
  }
];

const petList = document.getElementById("petList");

pets.forEach(pet => {
  const card = document.createElement("div");
  card.className = "pet-card";
  card.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}">
    <h4>${pet.name}</h4>
    <p>${pet.type}, ${pet.age} year(s) old</p>
  `;
  petList.appendChild(card);
});

document.getElementById("adoptionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("adoptionMessage").textContent =
    "🎉 Your request has been submitted! We'll contact you soon.";
  this.reset();
});
