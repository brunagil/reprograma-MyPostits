import React from 'react'
import './PageNotFound.css'
import NotFoundImage from './notfound.jpg'

function PageNotFound() {
    return (
        <div className="page-not-found"> 
            <h1>Aqui não! :(</h1>
            <h2>Error 404 - Página não encontrada</h2>
            <img src={NotFoundImage} />
        </div>
    )
}

export default PageNotFound 