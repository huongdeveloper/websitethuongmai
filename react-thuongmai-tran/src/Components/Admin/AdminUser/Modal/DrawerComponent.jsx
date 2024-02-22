import React from 'react'
import { Drawer } from 'antd'

const DrawerComponent = ({ title = 'Drawer', placement = 'right', isOpen = false, children, ...rests }) => {
  return (
    <div>
        <Drawer title={title} placemen={placement} open={isOpen} {...rests}>
                {children}
        </Drawer>
    </div>
  )
}

export default DrawerComponent
