let imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Moveis cadastrados: " +
      imoveis.length +
      "\n1.Registrar imovel\n2.Mostrar imovel\n3. Sair"
  );
  switch (opcao) {
    case "1":
      let imovel = {};
      imovel.proprietario = prompt("qual o nome do proprietário");
      imovel.quartos = prompt("quantos quartos possui o imovel");
      imovel.banheiro = prompt("quantos banheiros possui o imovel");
      imovel.garagem = prompt("possui garagem?");

      let confirmar = confirm("confirmar dados?");
      if (confirmar) {
        imoveis.push(imovel);
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Proprietario: " +
            imoveis[i].proprietario +
            "\nQuantidade de Quartos: " +
            imoveis[i].quartos +
            "\nQuantidade de Banheiros: " +
            imoveis[i].banheiro +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;
  }
} while (opcao !== "3");
