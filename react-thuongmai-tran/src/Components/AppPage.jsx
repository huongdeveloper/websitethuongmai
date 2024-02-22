import React from 'react'
import HeaderComponent from './HomePage/HeaderComponent'

const AppPage = ({children}) => {
  return (
    <div>
      <HeaderComponent />
        {children}
    </div>
  )
}

export default AppPage
