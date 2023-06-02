// Ativar links

const links = document.querySelectorAll("nav .header-menu a");

function activateHoverButton(link) {
	const linkAtual = window.document.URL;
	const href = link.href;
	if (linkAtual.includes(href)) {
		link.classList.add("ativo");
	}
}

links.forEach((link) => activateHoverButton(link));

// Buscar Parâmetros URL

const params = new URLSearchParams(location.search);

function getParams(params) {
	const options = document.getElementById(params);
	options.checked = true;
}

params.forEach(getParams);
