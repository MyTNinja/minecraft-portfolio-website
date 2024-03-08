function showContent(index) {
  // Remove 'selected' class from all project lists
  var projectLists = document.querySelectorAll(".project-list");
  projectLists.forEach(function (list) {
    list.classList.remove("selected");
  });

  // Add 'selected' class to the clicked project list
  var clickedList = document.querySelector(
    ".col-lg-4 .row:nth-child(" + index + ") .project-list"
  );
  clickedList.classList.add("selected");

  // Hide "No selected" paragraph
  document.getElementById("no-selected").style.display = "none";

  // Hide all content paragraphs
  var contents = document.querySelectorAll(".content div");
  contents.forEach(function (content) {
    content.classList.add("hidden");
  });

  // Show the corresponding content
  var content = document.getElementById("content" + index);
  if (content) {
    content.classList.remove("hidden");
  }
}
