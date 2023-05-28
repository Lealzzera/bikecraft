const links = document.querySelectorAll("nav .header-menu a");

function activateHoverButton(link) {
	const linkAtual = window.document.URL;
	const href = link.href;
	if (linkAtual.includes(href)) {
		link.classList.add("ativo");
	}
}

links.forEach(activateHoverButton);
