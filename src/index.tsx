import { createRoot } from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

// if(__PLATFORM__ === 'desktop') {
//     return <div>ISDESKTOPPLATFORM</div>
// }
//
// if(__PLATFORM__ === 'mobile') {
//     return <div>ISMOBILEPLATFORM</div>
// }

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}

const container = createRoot(root)

container.render(<RouterProvider router={router} />)
