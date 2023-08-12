export interface GameData {
  href: string;
  name: string;
  generoprincipal: string;
  Nome: string;
  Plataforma: string;
  bandeiras_indiomas: string[];
  indiomas: string[];
  genre: string[];
  Formato: string;
  Tamanho: string;
  dt_lancamento: string;
  Release: string;
  Version: string;
  OS: string;
  Processor: string;
  Memory: string;
  Graphics: string;
  Storage: string;
  "Additional Notes": string;
  info: string;
  imgs: string[];
  links: {
    nome_loja_game: string;
    link: string;
    foto_loja: string;
  }[];
}
