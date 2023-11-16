document.addEventListener("DOMContentLoaded", function () {
	// Recupera a URL atual
	const urlParams = new URLSearchParams(window.location.search);
	// Obtém o valor do parâmetro 'categoria'
	const categoria = urlParams.get('categoria');
	ListaProduto(categoria)
});

// Função para lidar com a categoria "material_construcao"
function ListaProduto(categoria) {
	// Obtenha a referência à div onde deseja exibir a lista de materiais
	const listaMateriaisDiv = document.getElementById('listaMateriais');

	// Se a div existir, prossiga
	if (listaMateriaisDiv) {
			// Obtém os dados do arquivo JSON
			const path = `javascript/json/${categoria}.json`;
			fetch(path)
					.then(response => response.json())
					.then(data => {
							// Itera sobre os materiais e cria uma lista
							const lista = document.createElement('ul');
							data.produto.forEach(material => {
									const itemLista = document.createElement('li');
									itemLista.innerHTML = `
											<img src="${material.imagem}" alt="${material.nome}">
											<h3>${material.nome}</h3>
											<p>${material.descricao}</p>
											<p>${material.preco_a_vista}</p>
											<p>${material.preco_parcelado}</p>
									`;
									lista.appendChild(itemLista);
							});

							// Adiciona a lista à div
							listaMateriaisDiv.appendChild(lista);
					})
					.catch(error => console.error('Erro ao carregar dados:', error));
	}
}
