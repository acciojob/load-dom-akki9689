//your JS code here. If required.
  function handleDOMLoad() {
            // Create a new paragraph element
            var paragraph = document.createElement("p");
            // Set the text content to "DOM load success"
            paragraph.textContent = "DOM load success";
            
            // Append the paragraph to the body element
            document.body.appendChild(paragraph);
        }

        document.addEventListener("DOMContentLoaded", handleDOMLoad);
