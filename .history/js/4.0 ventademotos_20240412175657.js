const productos = [
  {
      id:"celular-01",
      titulo:"Moto G13 Dual Sim 128 Gb Azul Difuso 4 Gb Ram",
      imagen: [
          "./img/celulares/11.png",
          "./img/celulares/12.png",
          "./img/celulares/13.png"
      ], 
      categoria:{
          nombre:"Celulares",
          id:"celulares"
      },
      precio:70000,
      descuento:14,
      informacion:[
          "Pantalla IPS de 6.5.",
          "Camara trasea 13Mpx.",
          "Cámra delantera 5Mpx",
          "Procesaor 1.66 Gh con 2GB de RAM.",
          "Batería interna 54 GB.",
          "Con reconocimiento facia.l"
      ],
      envio: "Envío Gratis",
      stock:100,
      proveedor:"OVERHARD",
  },
  {
      id:"celular-02",
      titulo:"Moto E22 64gb 4gb Ram Negro Test",
      imagen: [
          "./img/celulares/21.png",
          "./img/celulares/22.png",
          "./img/celulares/23.png"
      ], 
      categoria:{
          nombre:"Celulares",
          id:"celulares"
      },
      precio:79599,
      descuento:17,
      informacion:[
          "Dispositivo liberado para que elijas la compañía telefónica que prefieras",
          "Pantalla de 6.5",
          "Cámra delantera 5Mpx",
          "Procesaor 1.66 Gh con 2GB de RAM.",
          "Batería 4020m.",
          "Memoria interna de 54 GB"
      ],
      envio: 2000,
      stock:21,
      proveedor:"OVERHARD",
  },
  {
      id:"celular-03",
      titulo:"Samsung A04s 128 GB negro 4 GB RAM",
      imagen: [
          "./img/celulares/31.png",
          "./img/celulares/32.png",
          "./img/celulares/33.png"
      ], 
      categoria:{
          nombre:"Celulares",
          id:"celulares"
      },
      precio:111999,
      descuento:10,
      informacion:[
          "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
          "Pantalla PLS de 6.5'.",
          "Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.",
          "Cámara delantera de 5Mpx.",
          "Procesador Exynos 850 Octa-Core de 2GHz con 4GB de RAM.",
          "Batería de 5000mAh.",
          "Memoria interna de 128GB.",
          "Con reconocimiento facial y sensor de huella dactilar."
      ],
      envio: 5000,
      stock:21,
      proveedor:"DIGIT",
  },
  {
      id:"celular-04",
      titulo:"Samsung Galaxy A04s 128 GB blanco 4 GB RAM",
      imagen: [
          "./img/celulares/41.png",
          "./img/celulares/42.png",
          "./img/celulares/43.png"
      ], 
      categoria:{
          nombre:"Celulares",
          id:"celulares"
      },
      precio:122000,
      descuento:13,
      informacion:[
          "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
          "Pantalla PLS de 6.5'.",
          "Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.",
          "Cámara delantera de 5Mpx.",
          "Procesador Exynos 850 Octa-Core de 2GHz con 4GB de RAM.",
          "Batería de 5000mAh.",
          "Memoria interna de 128GB.",
          "Con reconocimiento facial y sensor de huella dactilar."
      ],
      envio: "Envío Gratis",
      stock:21,
      proveedor:"DIGIT",
  },
  {
      id:"notebook-01",
      titulo:"Samsung Galaxy Book3 15.6 Intel Core I3 6 Núcleos 8gb 256gb Color Silver",
      imagen: [
          "./img/notebooks/11.png",
          "./img/notebooks/12.png",
          "./img/notebooks/13.png",
      ], 
      categoria:{
          nombre:"Notebooks",
          id:"notebooks"
      },
      precio:593000,
      descuento:13,
      informacion:[
          "Procesador Intel i3",
          "Memoria RAM de 8GB.",
          "Resolución de FHD",
          "Placa de video Intel Iris Xe",
          "Cuenta con puerto USB y puerto HDMI"
      ],
      envio: "Envío Gratis",
      stock:2,
      proveedor:"ECOMODICO",
  },
  {
      id:"notebook-02",
      titulo:"Notebook Noblex N14x1000 14.1 Hd Intel Celeron 4gb/128gb Color Gris",
      imagen: [
          "./img/notebooks/21.png",
          "./img/notebooks/22.png",
          "./img/notebooks/23.png",
      ], 
      categoria:{
          nombre:"Notebooks",
          id:"notebooks"
      },
      precio:216999,
      descuento:34,
      informacion:[
          "Procesador Intel Celeron.",
          "Memoria RAM de 4GB.",
          "Resolución de 1366x768 px.",
          "Conexión wifi y bluetooth.",
          "Cuenta con 2 puertos USB y puerto HDMI.",
          "La duración de la batería depende del uso que se le dé al producto."
      ],
      envio: "Envío Gratis",
      stock:35,
      proveedor:"Tienda New Sound",
  },
  {
      id:"notebook-03",
      titulo:"Notebook Hp 15-dy2061la Intel Core I3 1125g4 8gb 256gb Win10 Color Plateado",
      imagen: [
          "./img/notebooks/31.png",
          "./img/notebooks/32.png",
          "./img/notebooks/33.png",
      ], 
      categoria:{
          nombre:"Notebooks",
          id:"notebooks"
      },
      precio:669999,
      descuento:47,
      informacion:[
          "Procesador Intel Core i3.",
          "Memoria RAM de 8GB.",
          "Resolución de 1366x768 px.",
          "Placa de video Intel UHD Graphics Xe G4 48EUs.",
          "Conexión wifi y bluetooth.",
          "Cuenta con 3 puertos USB y puerto HDMI.",
          "Incluye lector de tarjeta de memoria.",
          "Posee pad numérico.",
          "Modo de sonido Stereo.",
          "La duración de la batería depende del uso que se le dé al producto."
      ],
      envio: "Envío Gratis",
      stock:35,
      proveedor:"HP TIENDA OFICIAL",
  },
  {
      id:"notebook-04",
      titulo:"Notebook Gamer Rog Strix G15 G513rm-hq084w 15.6 R7 512gb Color Eclipse gray",
      imagen: [
          "./img/notebooks/41.png",
          "./img/notebooks/42.png",
          "./img/notebooks/43.png",
      ], 
      categoria:{
          nombre:"Notebooks",
          id:"notebooks"
      },
      precio:1499999,
      descuento:5,
      informacion:[
          "Procesador AMD Ryzen 7.",
          "Memoria RAM de 16GB.",
          "Resolución de 2560x1440 px.",
          "Placa de video Nvidia RTX 3060.",
          "Conexión wifi y bluetooth.",
          "Cuenta con 4 puertos USB y puerto HDMI.",
          "Con teclado retroiluminado.",
          "La duración de la batería depende del uso que se le dé al producto."
      ],
      envio: 6000,
      stock:35,
      proveedor:"ATAJO AR",
  },
  {
      id:"televisor-01",
      titulo:"Tv 24' Kodak We-24tm005 Hd ",
      imagen: [
          "./img/televisores/11.png",
          "./img/televisores/12.png",
          "./img/televisores/13.png",
      ], 
      categoria:{
          nombre:"Televisores",
          id:"televisores"
      },
      precio:122999,
      descuento:10,
      informacion:[
          "Su resolución es HD.",
          "Tecnología HDR para una calidad de imagen mejorada.",
          "Modo de sonido: Dolby Digital.",
          "Manejalo por comando de voz.",
          "Sistema operativo Android.",
          "Conectá tus dispositivos mediante sus 3 puertos HDMI y sus 2 puertos USB.",
          "Dimensiones: 71.6cm de ancho, 43.3cm de alto, 7.6cm de profundidad.",
          "Entretenimiento y conectividad en un mismo lugar."
      ],
      envio: "Envío Gratis",
      stock:10,
      proveedor:"OPEN FACTORY",
  },
  {
      id:"televisor-02",
      titulo:"Smart Led Fhd 40 Pulgadas Google Tv Chromecast Tda Android Kodak",
      imagen: [
          "./img/televisores/21.png",
          "./img/televisores/22.png",
          "./img/televisores/23.png",
      ], 
      categoria:{
          nombre:"Televisores",
          id:"televisores"
      },
      precio:181000,
      descuento:27,
      informacion:[
          "Su resolución es Full HD.",
          "Tecnología HDR para una calidad de imagen mejorada.",
          "Modo de sonido: Dolby Atmos.",
          "Manejalo por comando de voz.",
          "Tiene función Screen Share.",
          "Con YouTube.",
          "Google Assistant incorporado.",
          "Sistema operativo Android 10.",
          "Capacidad de almacenamiento de 8GB.",
          "Conectá tus dispositivos mediante sus 3 puertos HDMI y sus 2 puertos USB."
      ],
      envio: "Envío Gratis",
      stock:10,
      proveedor:"MALL WEB",
  },
  {
      id:"televisor-03",
      titulo:"Smart Tv Samsung Hd 32 T4300",
      imagen: [
          "./img/televisores/31.png",
          "./img/televisores/32.png",
          "./img/televisores/33.png",
      ], 
      categoria:{
          nombre:"Televisores",
          id:"televisores"
      },
      precio:145000,
      descuento:27,
      informacion:[
          "Su resolución es HD.",
          "Tecnología HDR para una calidad de imagen mejorada.",
          "Modo de sonido: Dolby Digital Plus.",
          "Manejalo por comando de voz.",
          "Tiene función Screen Share.",
          "Con Samsung TV Plus.",
          "Sistema operativo Tizen.",
          "Conectá tus dispositivos mediante sus 2 puertos HDMI y su puerto USB.",
          "Dimensiones: 737.4mm de ancho, 438mm de alto, 74.1mm de profundidad.",
          "Entretenimiento y conectividad en un mismo lugar."
      ],
      envio: 8000,
      stock:10,
      proveedor:"MALL WEB",
  },
  {
      id:"televisor-04",
      titulo:"Tv Tcl Qled 55 4k C635 Uhd Google Tv Micro Dimming 120 Hz",
      imagen: [
          "./img/televisores/41.png",
          "./img/televisores/42.png",
          "./img/televisores/43.png",
      ], 
      categoria:{
          nombre:"Televisores",
          id:"televisores"
      },
      precio:159000,
      descuento:10,
      informacion:[
          "Su resolución es 4K.",
          "Tecnología HDR para una calidad de imagen mejorada.",
          "Con Google Duo.",
          "Sistema operativo Google TV.",
          "Conectá tus dispositivos mediante sus 3 puertos HDMI.",
          "Entretenimiento y conectividad en un mismo lugar."
      ],
      envio: "Envío Gratis",
      stock:10,
      proveedor:"MALL WEB",
  }
]

const contenedorProductos = document.querySelector("#contenedor-productos");