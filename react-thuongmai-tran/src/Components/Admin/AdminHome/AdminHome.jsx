import React from 'react'
import { UserOutlined, AppstoreOutlined, ShoppingCartOutlined, FileDoneOutlined } from '@ant-design/icons'
import '../../HomePage/HomeHeader.css'

const AdminHome = (props) => {
    const {data, colors, setKeySelected } = props
  return (
    <div className='AdminHome-linear'>
        {Object.keys(data) && Object.keys(data)?.map((item) => {
            return (
                <div className='AdminHome-linear-background'
                key={Math.random()}
                style={{ background:`linear-gradient(${colors[item] && colors[item][0]}, ${colors[item] && colors[item][1]})`}}
                onClick={() => setKeySelected(item)}>
                    <span className='AdminHome-linear-span-one'>
                        {item === 'cartegorys' && <FileDoneOutlined />}
                        {item === 'users' && <UserOutlined />}
                        {item === 'products' && <AppstoreOutlined />}
                        {item === 'orders' && <ShoppingCartOutlined />}
                    </span>
                    <span className='AdminHome-linear-span-two'>{item}</span>
                    <span className='AdminHome-linear-span-father'>{data[item]}</span>
                </div>
            )
        })}
    </div>
  )
}

export default AdminHome
