// script.js - small sanity script for the Name Ninja page
// Keeps things simple: log startup and expose a tiny helper for future use.

console.log("hello from script.js!");

// Example helper: toggle a class on the header for demo purposes
function toggleHeaderDemo() {
	const header = document.querySelector('.header');
	if (!header) return;
	header.classList.toggle('demo-active');
}

// Export to window for manual testing from the console
window.toggleHeaderDemo = toggleHeaderDemo;
javaScript 
console.log("hello from script.js!") 