// Project cards: move the faint spotlight to follow the pointer.
for (const card of document.querySelectorAll(".project-card")) {
	card.addEventListener("pointermove", (event) => {
		const rect = card.getBoundingClientRect();
		card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
		card.style.setProperty("--my", `${event.clientY - rect.top}px`);
	});
}
