import React, { Fragment } from 'react'
import Header from '../header/Header'
function Layout(props) {
  return (
    <Fragment>
        <Header/>
        <main>
            {props.children}
        </main>
    </Fragment>
  )
}

export default Layout