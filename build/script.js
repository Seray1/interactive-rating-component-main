// Get all the rating number elements
const stars = document.querySelectorAll("div")
const submitBtn = document.getElementById("submit-btn")
const selected = document.getElementById("selected")

// Add click event listeners to each rating number
stars.forEach((number, index) => {
  number.addEventListener("click", () => {
    // Remove the 'selected' class from all numbers
    console.log("clicked")
    stars.forEach((number) => {
      number.classList.remove("bg-orange-500")
    })

    // Add the 'selected' class to the clicked number and preceding numbers
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("bg-orange-500")
      console.log("working")
    }
  })
})

console.log(stars)
