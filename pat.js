const pets = [
  {
    name: "Max",
    image: "https://placedog.net/300/200?id=1",
    description: "A playful 2-year-old Labrador who loves fetching balls!"
  },
  {
    name: "Luna",
    image: "https://placekitten.com/300/200",
    description: "A calm and affectionate 3-year-old cat who enjoys cuddles."
  },
  {
    name: "Rocky",
    image: "https://placedog.net/300/200?id=2",
    description: "An energetic Beagle looking for an active family."
  }
];

// DOM elements
const petContainer = document.getElementById('pet-container');
const modal = document.getElementById('pet-modal');
const modalName = document.getElementById('modal-name');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');
const adoptBtn = document.getElementById('adopt-btn');

let selectedPet = null;

// Load pets
pets.forEach((pet, index) => {
  const card = document.createElement('div');
  card.className = 'pet-card';
  card.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}">
    <h3>${pet.name}</h3>
  `;
  card.onclick = () => showModal(index);
  petContainer.appendChild(card);
});

// Show pet detail modal
function showModal(index) {
  selectedPet = index;
  const pet = pets[index];
  modalName.textContent = pet.name;
  modalImage.src = pet.image;
  modalDescription.textContent = pet.description;
  modal.style.display = 'block';
}

// Close modal
closeModal.onclick = () => {
  modal.style.display = 'none';
};

// Adopt button
adoptBtn.onclick = () => {
  alert(`You have adopted ${pets[selectedPet].name}! 🐾`);
  modal.style.display = 'none';
};

// Close on outside click
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
