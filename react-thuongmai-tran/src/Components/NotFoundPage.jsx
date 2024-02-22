import React from 'react'
import './NotFoundPage.css';
import NotFoundImage from '../Assets/Note404/404.4.png';
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <img src={NotFoundImage} alt="Not Found" />
    </div>
  )
}

export default NotFoundPage