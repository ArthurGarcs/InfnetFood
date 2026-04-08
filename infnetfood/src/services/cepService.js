export async function fetchAddressByCep(cep) {
  const cleanCep = cep.replace(/\D/g, '');

  if (cleanCep.length !== 8) {
    throw new Error('Digite um CEP com 8 números.');
  }

  const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
  const data = await response.json();

  if (data.erro) {
    throw new Error('CEP não encontrado.');
  }

  const formattedAddress = `${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`;

  return formattedAddress;
}