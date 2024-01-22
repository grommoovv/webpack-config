import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import cls from './App.module.scss'

export const App = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>

      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>
      <h1 className={cls.value}>{count}</h1>
      <button className={cls.button} onClick={increment}>
        increment
      </button>
      <Outlet />
    </div>
  )
}
