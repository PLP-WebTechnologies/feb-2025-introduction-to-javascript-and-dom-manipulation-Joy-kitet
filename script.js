function changeTextAndStyle() {
    const textElement = document.getElementById("intro-text");
    textElement.textContent = "The text has been dynamically updated!";
    textElement.classList.add("highlight");
  }
  
  function toggleElement() {
    const container = document.getElementById("dynamic-container");
    const existing = document.getElementById("dynamic-element");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newElement = document.createElement("p");
      newElement.id = "dynamic-element";
      newElement.textContent = "This element was added dynamically!";
      container.appendChild(newElement);
    }
  }
  