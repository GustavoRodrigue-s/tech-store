import * as Images from '../assets/images/products';
import { IProduct } from '../types';

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Sony Playstation 4 500gb Standard preto',
    price: 3496.5,
    filledStars: 4,
    units: 13,
    parcels: 8,
    department: 'Consoles',
    image: Images.product1,
  },
  {
    id: 2,
    name: 'Controle sem fio dualshock 4 preto - ps4',
    price: 309.89,
    filledStars: 4,
    units: 27,
    parcels: 3,
    department: 'Controles',
    image: Images.product2,
  },
  {
    id: 3,
    name: 'Sony Playstation 5',
    price: 4499.99,
    discount: 4,
    filledStars: 5,
    units: 7,
    parcels: 8,
    department: 'Consoles',
    image: Images.product3,
  },
  {
    id: 4,
    name: 'Controle sem fio dualsense - ps5',
    price: 399.9,
    discount: 12,
    filledStars: 5,
    units: 36,
    parcels: 1,
    department: 'Controles',
    image: Images.product4,
  },
  {
    id: 5,
    name: "Sony Playstation 5 + demon's souls - ps5",
    price: 4699.99,
    filledStars: 5,
    units: 18,
    parcels: 8,
    department: 'Consoles',
    image: Images.product5,
  },
  {
    id: 6,
    name: 'Notebook lenovo ultrafino ideapad 3i i5-1021u 8gb 256gb ssd tela 15.6"\n windows 11 - prata',
    price: 3449,
    discount: 8,
    filledStars: 5,
    units: 5,
    parcels: 1,
    department: 'Notebooks',
    image: Images.product6,
  },
  {
    id: 7,
    name: 'Notebook samsung intel core i5-1135g7 8gb 256gb ssd windows11 tela 15.6"\n - cinza chumbo',
    price: 3598,
    discount: 11,
    filledStars: 5,
    units: 12,
    parcels: 1,
    department: 'Notebooks',
    image: Images.product7,
  },
  {
    id: 8,
    name: 'Macbook air 13"\n apple M1 8gb 256gb ssd - cinza espacial',
    price: 8799,
    discount: 7,
    filledStars: 5,
    units: 24,
    parcels: 1,
    department: 'Notebooks',
    image: Images.product8,
  },
  {
    id: 9,
    name: 'Monitor gamer curvo samsung 27"\n fhd 240hz hdmi dp gsync - preto e cinza',
    price: 2483.16,
    discount: 5,
    filledStars: 5,
    units: 10,
    parcels: 1,
    department: 'Monitores',
    image: Images.product9,
  },
  {
    id: 10,
    name: 'Monitor led 24"\n dell p2418ht touchscreen - prata',
    price: 2159,
    filledStars: 5,
    units: 38,
    parcels: 8,
    department: 'Monitores',
    image: Images.product10,
  },
  {
    id: 11,
    name: 'Monitor gamer LG 23.8"\n full hd 75hz 5ms hdmi ips freesync - preto',
    price: 1020,
    filledStars: 4,
    units: 78,
    parcels: 8,
    department: 'Monitores',
    image: Images.product11,
  },
  {
    id: 12,
    name: 'Monitor led 17.1"\n prizi slim widescreen 16:9, 5ms. 60hz - preto',
    price: 463.33,
    discount: 6,
    units: 204,
    parcels: 4,
    department: 'Monitores',
    image: Images.product12,
  },
  {
    id: 13,
    name: 'Smart TV Semp Roku Led Rk8500 4k UHD HDR Wifi Dual Band, 4 Hdmi, 1 Usb, Com Controle Por Aplicativo',
    price: 2499.99,
    filledStars: 5,
    units: 2,
    parcels: 8,
    department: 'Televisões',
    image: Images.product13,
  },
  {
    id: 14,
    name: 'Smart TV LED 60” LG 60UP7750 4K UHD Wi-Fi Bluetooth HDR Inteligência Artificial Thinq Smart Magic Google Alexa',
    price: 3499.99,
    filledStars: 5,
    units: 9,
    parcels: 8,
    department: 'Televisões',
    image: Images.product14,
  },
  {
    id: 15,
    name: 'Teclado Gamer Mecânico RGB CRUISER Dark Grey FORTREK',
    price: 395.84,
    discount: 9,
    units: 325,
    parcels: 3,
    department: 'Teclados',
    image: Images.product15,
  },
  {
    id: 16,
    name: 'Teclado Gamer Rgb Rainbow Km-5228 Kmex',
    price: 53.3,
    discount: 15,
    filledStars: 4,
    units: 103,
    parcels: 1,
    department: 'Teclados',
    image: Images.product16,
  },
  {
    id: 17,
    name: 'Mouse Gamer HyperX Pulsefire Surge RGB 16000 DPI - HX-MC002B',
    price: 124.9,
    discount: 5,
    filledStars: 5,
    units: 237,
    parcels: 1,
    department: 'Mouses',
    image: Images.product17,
  },
  {
    id: 18,
    name: 'Mouse Gamer USB MG-750BK Raven C3TECH',
    price: 229.71,
    discount: 9,
    filledStars: 2,
    units: 174,
    parcels: 2,
    department: 'Mouses',
    image: Images.product18,
  },
  {
    id: 19,
    name: 'Headset Hyperx Cloud Stinger Core Pc Hx-Hscsc2-Bk/Ww',
    price: 249,
    filledStars: 3,
    units: 69,
    parcels: 2,
    department: 'Fones de ouvido',
    image: Images.product19,
  },
  {
    id: 20,
    name: 'Headset Gamer Logitech G635 7.1 Dolby Surround com RGB LIGHTSYNC e Drivers de Áudio Avançados para PC PlayStation Xbox e Nintendo Switch',
    price: 740.46,
    filledStars: 4,
    units: 21,
    parcels: 7,
    department: 'Fones de ouvido',
    image: Images.product20,
  },
];