import React, { useState, useEffect } from 'react';
import "../index.css";
import { GalleryFilter } from "../data";

function Galleryfilter({ handleSearch, searchTerm }) {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedImageDetail, setSelectedImageDetail] = useState('');

  useEffect(() => {
    setData(GalleryFilter);
    setCollection([...new Set(GalleryFilter.map((item) => item.category))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryFilter.filter((item) => item.category === itemData);
    setData(filterData);
  };

  useEffect(() => {
    const results = GalleryFilter.filter(item =>
      item.detail.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(results);
  }, [searchTerm]);

  const openModal = (image, detail) => {
    setSelectedImage(image);
    setSelectedImageDetail(detail);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="AppFilter">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => setData(GalleryFilter)}>All</button>
            </li>
            {collection.map((item) => (
              <li key={item}>
                <button onClick={() => gallery_filter(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="galleryContainer">
          {data.map((item) => (
            <div key={item.id} className="galleryItem">
              <img src={item.image} detail={item.category} onClick={() => openModal(item.image, item.detail)} />
              <div className="caption">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <img src={selectedImage} detail={selectedImageDetail} />
            <div className="modalCaption">{selectedImageDetail}</div>
            <div className="modalClose" onClick={closeModal}><button>&times; Close</button></div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Galleryfilter;
