import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

class Prueba extends Component {
  componentDidMount() {
    const map = L.map('map').setView([2.205036701509074, -75.58736821407386], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const imageUrl = 'https://i.stack.imgur.com/pQ1Cq.png'; 
    const customIcon = L.icon({
      iconUrl: imageUrl,
      iconSize: [32, 32], 
      iconAnchor: [16, 32], 
      popupAnchor: [0, -32], 
    });

    const puntosDeInteres = [
      {
        coords: [2.139205564352285, -75.63315747558791],
        nombre: 'Balcon de Garzón, Huila',
        descripcion: 'Este es el Balcon de Garzón, un lugar turístico en Huila.',
        imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/a5/7b/b6/el-balcon-del-huila.jpg?w=1200&h=-1&s=1' 
    },
    {
        coords: [2.4149075626491214, -75.48619724039304],
        nombre: 'Mano de Gigante, Huila',
        descripcion: 'La Mano de Gigante es una formación rocosa impresionante en Huila.',
        imagen: 'https://i0.wp.com/directorio.previred.com.co/wp-content/uploads/2021/04/165782415_3808190489277264_803657607277337102_n.jpg?fit=960%2C960&ssl=1'
    },
    
    {
        coords: [2.35154282540279, -75.5220377839136],
        nombre: 'Brisas de Mirtayuu, Huila',
        descripcion: 'Brisas de Mirtayuu es un hermoso lugar en Huila.',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxQvaDUhDDdCCJQXQmYjZISPNVF361_4FAA&usqp=CAU'
    },
    {
        coords: [2.2123968363398028, -75.57536361300636],
        nombre: 'La Primavera, Huila',
        descripcion: 'La Primavera es un destino encantador en Huila.',
        imagen: 'https://www.fincalaprimaveragarzon.com/wp-content/uploads/2023/05/mirador-la-primavera-portada.jpeg'
    },
    {
        coords: [2.1872078971884115, -75.55400073397371],
        nombre: 'La Palestina, Huila',
        descripcion: 'La Palestina es un lugar tranquilo en Huila.',
        imagen: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//itemimages/32/37/3237278_v3.jpeg'
    },
    {
        coords: [2.1901548177849723, -75.57426649164549],
        nombre: 'Mirador El Totoy, Huila',
        descripcion: 'El Mirador El Totoy ofrece vistas panorámicas en Huila.',
        imagen: 'https://posadasrurales.co/5074-large_default/el-mirador-de-totoy-garzon-huila.jpg'
    },
    {
        coords: [2.1913634481081443, -75.56527094717802],
        nombre: 'Finca Villa Daniela, Huila',
        descripcion: 'La Finca Villa Daniela es un lugar de descanso en Huila.',
        imagen: 'https://i.ytimg.com/vi/ZV0Yu0SEomE/sddefault.jpg'
    },
    {
        coords: [2.193347480256143, -75.57232094746612],
        nombre: 'Finca Hotel San Luis, Huila',
        descripcion: 'El Finca Hotel San Luis es un lugar acogedor en Huila.',
        imagen: 'https://huilamagnifica.com/wp-content/uploads/2015/03/LomaChata_Finca_SanLuis1.jpg'
    },
    {
        coords: [2.3219788982187737, -75.53354189164561],
        nombre: 'Mirador La Morra, Huila',
        descripcion: 'El Mirador La Morra ofrece vistas panorámicas en Huila.',
        imagen: 'https://huila.travel/storage/app/uploads/public/62c/6f2/b92/thumb_20591_450_300_0_0_crop.jpg'
    },
    {
        coords: [2.343643694894556, -75.49560829164565],
        nombre: 'Finca La Florida - Gigante, Huila',
        descripcion: 'Finca La Florida es un lugar tranquilo en Gigante, Huila.',
        imagen: 'https://lh3.googleusercontent.com/p/AF1QipPpAF9qB1HLyz3qrQCEA3kg0M-n5FnXdmohhe14=s1600-w400'
    },
    {
        coords: [2.413445705918538, -75.52105812794352],
        nombre: 'Hostal Campestre Samadhi - Gigante, Huila',
        descripcion: 'El Hostal Campestre Samadhi es un lugar acogedor en Gigante, Huila.',
        imagen: 'https://images.trvl-media.com/lodging/40000000/39190000/39189400/39189376/3be4899b.jpg?impolicy=resizecrop&rw=500&ra=fit'
    },
    {
        coords: [2.3084789110001283, -75.49476091460974],
        nombre: 'Finca La Bonanza, Huila',
        descripcion: 'Finca La Bonanza es un destino de relajación en Huila.',
        imagen: 'https://www.turismoquindio.com/wp-content/uploads/2017/07/fincabonanzaquindio04imp.jpg'
    },
    {
        coords: [2.313716199478507, -75.5040044204814],
        nombre: 'Alojamiento Rural Finca La Alicia, Huila',
        descripcion: 'La Finca La Alicia ofrece alojamiento rural en Huila.',
        imagen: 'https://posadasrurales.co/4357-large_default/finca-la-alicia-gigante-huila-.jpg'
    }

    ];

    puntosDeInteres.forEach(function (punto) {
      const marker = L.marker(punto.coords, { icon: customIcon }).addTo(map);
      
      const popupContent = '<h3>' + punto.nombre + '</h3>' +
        '<p>' + punto.descripcion + '</p>' +
        '<img src="' + punto.imagen + '" style="max-width: 200px; max-height: 300px;" />';

      marker.bindPopup(popupContent).openPopup();
    });
  }

  render() {
    return (
      <div>
        <div id="map" style={{ height: '500px', width: '350px', margin: '0 auto' }}></div>
      </div>
    );
  }
}

export default Prueba;
