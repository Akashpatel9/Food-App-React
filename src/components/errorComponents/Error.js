import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError();
  return (
    <div className="container">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p>
          {error?.message}
          {error.status + " : "+ error.statusText}
        </p>
        <a href="/">
          <button>Back to home <i className="far fa-hand-point-right"></i></button>
        </a>
      </div>
    </div>
  )
}

export default Error