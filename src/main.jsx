import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './view/home/home.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import Header from './core/header/header'
import Contentwrapper from './core/contentWrapper/contentWrapper'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={ <Progress />}>
    <Header classname='flex justify-center'/>
    <Contentwrapper>
    <Home />
    </Contentwrapper>
    </Suspense>
  </StrictMode>
)
