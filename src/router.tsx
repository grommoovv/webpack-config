import { App } from './App'
import { createBrowserRouter } from 'react-router-dom'
import { LazyAbout } from '@/pages/about/About.lazy'
import { Home } from '@/pages/home'
import { Suspense } from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={'Loading...'}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={'Loading...'}>
            <LazyAbout />
          </Suspense>
        ),
      },
    ],
  },
])
