import './DarkMode.css'
import { useState, useEffect } from 'react'

const DarkMode = () => {
  const [isDark, setDark] = useState(false)

  const body = document.body
  const darkTheme = 'dark'
  let isDarkLS

  useEffect(() => {
    if (localStorage) {
      isDarkLS = localStorage.getItem('isDark')
    }
    if (isDarkLS) {
      setDark(true)
      body.classList.add(darkTheme)
    }
  }, [])

  const iconClass = isDark ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill'

  const switchTheme = (e) => {
    if (isDark) {
      body.classList.remove(darkTheme)
      localStorage.removeItem('isDark')
      setDark(false)
    } else {
      body.classList.add(darkTheme)
      localStorage.setItem('isDark', 'true')
      setDark(true)
    }
  }

  return (
    <div className='dark-sol-luna'>
      <button className={`${iconClass} dark-sol-luna btn-mode`} id='darkmode' onClick={(e) => switchTheme(e)} ></button>
    </div>
  )
}

export default DarkMode
