// Get all the rating number elements
const stars = document.querySelectorAll("label")
const submitBtn = document.getElementById("submit-btn")
const selected = document.getElementById("selected")
const frontCard = document.getElementById("front-card")
const backCard = document.getElementById("back-card")

// Add click event listeners to each rating number
stars.forEach((number, index) => {
  number.addEventListener("click", () => {
    selectedRating = index + 1
    // Remove the 'selected' class from all numbers

    stars.forEach((number) => {
      number.classList.remove("bg-orange-500")
    })

    // Add the 'selected' class to the clicked number and preceding numbers
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("bg-orange-500")
    }
  })
})

submitBtn.addEventListener("click", () => {
  selected.textContent = `You selected ${selectedRating} here out of 5`
  frontCard.classList.add("hidden")
  backCard.classList.remove("hidden")
  backCard.classList.add("flex")
  backCard.classList.add("animate__fadeInDown")
})
