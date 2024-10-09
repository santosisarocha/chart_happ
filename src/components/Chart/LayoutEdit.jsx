import React, { useState } from 'react';
import layoutGraficos from '../../image/Monitoramento/layoutGraficos1.jpg';
import icon_Moda_da_casa from '../../image/Monitoramento/icon_moda_da_casa.png';
import icon_de_bem_com_a_vida from '../../image/Monitoramento/icon_de_bem_com_a_vida.png';
import icon_grill from '../../image/Monitoramento/icon_grill.png';
import icon_receita_do_chefe from '../../image/Monitoramento/image/icon_receita_do_chefe.png';
import edit_grill from '../../image/Monitoramento/edit_grill.png';
import edit_de_bem_com_vida from '../../image/Monitoramento/edit_de_bem_com_vida.png';
import edit_moda from '../../image/Monitoramento/edit_moda.png';
import edit_receita_chefe from '../../image/Monitoramento/edit_receita_chefe.png';

import { UserData } from '../../Data.js';
import { BiFontSize } from 'react-icons/bi';

function LayoutGraphicEdit() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // To track which image was clicked

  const rectStyle = {
    position: 'absolute',
  };

  const locationMap = {
    'Oeste Superior Direita': 'Oeste_Superior_Direita',
    'Oeste Superior Esquerda': 'Oeste_Superior_Esquerda',
    'Oeste Inferior Direita': 'Oeste_Inferior_Direita',
    'Oeste Inferior Esquerda': 'Oeste_Inferior_Esquerda',
    'Norte Esquerda': 'Norte_Esquerda',
    'Norte Direita': 'Norte_Direita',
    'Norte Esquerda_': 'Norte_Esquerda_',
    'Norte Direita_': 'Norte_Direita_',
    'Leste Superior Esquerda': 'Leste_Superior_Esquerda',
    'Leste Superior Direita': 'Leste_Superior_Direita',
    'Leste Inferior Esquerda': 'Leste_Inferior_Esquerda',
    'Leste Inferior Direita': 'Leste_Inferior_Direito',
    'Norte Superior Direita': 'Norte_Superior_Direita',
    'Norte Superior Esquerda': 'Norte_Superior_Esquerda',
  };

  const getColorForLocation = (location) => {
    const filteredData = UserData.filter(
      (item) => item.fila.localizacao === location
    );

    if (filteredData.length > 0) {
      const lastItem = filteredData[filteredData.length - 1];
      switch (lastItem.situacao) {
        case 'verde':
          return 'rgba(0, 255, 0, 0.5)';
        case 'amarelo':
          return 'rgba(255, 255, 0, 0.5)';
        case 'vermelho':
          return 'rgba(255, 0, 0, 0.5)';
        default:
          return 'rgba(0, 0, 0, 0.5)'; // Default color if no match
      }
    }
    return 'rgba(0, 0, 0, 0.5)'; // Default color if no data for the location
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedImage(null);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '4x10%' }}>
      <img
        src={layoutGraficos}
        alt="Layout do Restaurante"
        style={{ width: '50%', height: 'auto' }}
      />
      
      {/* Edit Images */}
      <div className='Oeste_Superior'>
        <img
          src={edit_moda}
          alt="edit_moda"
          style={{
            ...rectStyle,
            top: '30.7%',
            left: '11.5%',
            width: '3%',
            height: 'auto',
          }}
          onClick={() => handleImageClick('moda')}
        />
      </div>
      
      <div className='Oeste_Inferior'>
        <img
          src={edit_moda}
          alt="edit_moda"
          style={{
            ...rectStyle,
            top: '55%',
            left: '11.5%',
            width: '3%',
            height: 'auto',
          }}
          onClick={() => handleImageClick('moda')}
        />
      </div>
      
      <div className='Norte'>
        <img
          src={edit_moda}
          alt="edit_moda"
          style={{
            ...rectStyle,
            top: '71%',
            left: '18.1%',
            width: '3%',
            height: 'auto',
          }}
          onClick={() => handleImageClick('moda')}
        />
      </div>
      
      <div className='Norte_'>
        <img
          src={edit_de_bem_com_vida}
          alt="edit_de_bem_com_vida"
          style={{
            ...rectStyle,
            top: '72%',
            left: '28.9%',
            width: '3.5%',
            height: 'auto',
          }}
          onClick={() => handleImageClick('de_bem_com_vida')}
        />
      </div>
     
      <div className='Leste_Superior'>
        <img
          src={edit_grill}
          alt="edit_grill"
          style={{
            ...rectStyle,
            top: '31%',
            left: '46.7%',
            width: '2.8%',
            height: 'auto',
          }}
          onClick={() => handleImageClick('grill')}
        />
      </div>
    
      <div className='Leste_Inferior'>
        <img
          src={edit_receita_chefe}
          alt="edit_receita_chefe"
          style={{
            ...rectStyle,
            top: '56%',
            left: '35.6%',
            width: '3.3%',
            height: 'auto',
          }}
          onClick={() => handleImageClick('receita_chefe')}
        />
      </div>
      
      <div className='Norte_Superior'>
        <img
          src={edit_grill}
          alt="edit_grill"
          style={{
            ...rectStyle,
            top: '6.5%',
            left: '30%',
            width: '3%',
            height: 'auto',
          }}
          onClick={() => handleImageClick('grill')}
        />
      </div>
      
      {/* Popup */}
      {isPopupOpen && (
        <div style={popupStyle}>
          <div>
            {/* <h2>Edit Image: {selectedImage}</h2> */}
            <h1>Filas do Restaurante:</h1>
            <p>This is a placeholder for editing {selectedImage}.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Styles for the popup
const popupStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  height:'237px',
  height:'27%',
  width:'57%',
  padding: '70px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  
};

export default LayoutGraphicEdit;
