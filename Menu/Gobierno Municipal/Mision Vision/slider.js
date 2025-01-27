document.addEventListener("DOMContentLoaded", function () {
	const header = document.querySelector("header");
	const aboutSection = document.querySelector(".about_section");
  
	if (header && aboutSection) {
	  const headerHeight = header.offsetHeight;
	  aboutSection.style.marginTop = `${headerHeight}px`;
	}
  });