import {Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './core/header/header.jsx'
import { Progress } from '@/components/ui/progress';
import ContentWrapper from './core/contentWrapper/contentWrapper.jsx'
function App() {


  return (
    <>
      <Suspense fallback={<Progress />}>
        <div className="flex flex-col items-center">
          <Header className='bg-gray-50' />
          <ContentWrapper classname='h-full' >
            <Outlet />
          </ContentWrapper>
        </div>
      </Suspense>
    </>
  )
}

export default App;
