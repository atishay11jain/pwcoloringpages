$(document).on("click", ".dropdown-item", function () {
  var selectedFormat = $(this).find("span[data-format]").text();
  $("#dropdownMenuButton .inner").text(selectedFormat);
  $(".dropdown-item").removeClass("active");
  $(this).addClass("active");
  removeErrorMessages('error-message');

});
function removeErrorMessages(elementClassName) {
  let existingError = document.getElementsByClassName(elementClassName)[0];
  if (existingError) {
    existingError.remove();
  }
}
function showError(message, elementClassName) {
  let parentElement = document.getElementsByClassName(elementClassName)[0];

  removeErrorMessages('error-message'); // Remove any existing error messages

  // Create a new span element
  let errorSpan = document.createElement('div');
  errorSpan.classList.add('error-message'); // Add a class for styling
  errorSpan.textContent = message; // Set error message

  // Apply styling (optional)
  errorSpan.style.color = 'red';
  errorSpan.style.fontSize = '12px';
  errorSpan.style.marginLeft = '10px';
  errorSpan.style.marginBottom = '10px';

  // Append the error message after the element
  parentElement.insertAdjacentElement('afterend', errorSpan);
}

$(document).on("click", "#downloadButton", function (e) {
  e.preventDefault(); // Prevent default link behavior
  var selectedFormat = $("#dropdownMenuButton .inner").text().toLowerCase();
  if (selectedFormat === "format") {
    showError("Please Select A Format", "product-details-download-section");
    return;
  }
  let fileName = $(this).data("filename");
  let imageUrl = `/coloringpages/images/${fileName}`; // Update with actual image URL
  let link = document.createElement("a");
  link.href = imageUrl + "." + selectedFormat; // Append format
  link.download = `beautiful-majestic-${fileName}-coloring-page.` + selectedFormat; // Set download filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

$(document).on('click', '#connectbtn', function (e) {
  e.preventDefault();
  history.pushState({ clicked: "connectbtn" }, "", "/");
  window.location.href = "/";
});

