import Escocia from '../assets/imagens/Escocia.jfif'
import BandeiraEscocia from '../assets/imagens/bandeira_escocia.svg'
import GrandCanyon from '../assets/imagens/GrandCanyon.jpg'
import Muralha from '../assets/imagens/Muralha.jpg'
import Aruba from '../assets/imagens/Aruba.jpg'

export const destinos = [
  {
    slug: 'escocia',
    nome: 'Escócia',
    rota: '/Escocia',
    imagem: Escocia,
    alt: 'Paisagem da Escócia',
    bandeira: BandeiraEscocia,
    chamada: 'Castelos, montanhas e histórias para descobrir.',
    descricao: 'Conheça as paisagens das Highlands, explore castelos e passeie pelas ruas de Edimburgo. A Escócia reúne natureza e cultura em uma viagem cheia de descobertas.',
    destaques: ['Highlands', 'Castelos históricos', 'Edimburgo'],
    palavras: ['Escócia', 'Scotland', 'Highlands', 'Edimburgo'],
  },
  {
    slug: 'grand-canyon',
    nome: 'Grand Canyon',
    rota: '/GrandCanyon',
    imagem: GrandCanyon,
    alt: 'Formações rochosas do Grand Canyon',
    chamada: 'Uma paisagem imensa para viver de perto.',
    descricao: 'Descubra os mirantes e as formações rochosas do Grand Canyon, no Arizona. Aproveite as vistas, conheça as trilhas e reserve um momento para apreciar as cores do pôr do sol.',
    destaques: ['Mirantes', 'Trilhas', 'Pôr do sol'],
    palavras: ['Grand Canyon', 'GrandCanyon', 'Arizona'],
  },
  {
    slug: 'muralha',
    nome: 'Muralha da China',
    rota: '/Muralha',
    imagem: Muralha,
    alt: 'Muralha da China sobre as montanhas',
    chamada: 'História e paisagens a cada passo.',
    descricao: 'Visite a Muralha da China e observe suas torres e caminhos entre as montanhas. Complete a experiência descobrindo a cultura, a gastronomia e os pontos históricos de Pequim.',
    destaques: ['Torres históricas', 'Paisagens das montanhas', 'Pequim'],
    palavras: ['Muralha da China', 'China', 'Pequim'],
  },
  {
    slug: 'aruba',
    nome: 'Aruba',
    rota: '/Aruba',
    imagem: Aruba,
    alt: 'Praia de Aruba no Caribe',
    chamada: 'Mar azul e dias para relaxar.',
    descricao: 'Aproveite as praias de areia clara de Aruba, passeie por Oranjestad e conheça as paisagens da ilha. Um destino para curtir o Caribe e descansar à beira-mar.',
    destaques: ['Praias do Caribe', 'Oranjestad', 'Passeios pela ilha'],
    palavras: ['Aruba', 'Caribe', 'Oranjestad'],
  },
]
