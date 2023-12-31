import React, {useEffect} from 'react'
import {useLocation} from 'react-router'
import clsx from 'clsx'
import {useLayout} from '../core'
import {DrawerComponent} from '../../assets/ts/components'
import {WithChildren} from '../../helpers'

const Content: React.FC<WithChildren> = ({children}) => {
  const {classes} = useLayout()
  const location = useLocation()
  useEffect(() => {
    DrawerComponent.hideAll()
  }, [location])


  // className={clsx(classes.contentContainer.join(' '))}

  return (

    <div id='kt_content_container'  className='container'  >
      {children}
    </div>
    
  )
}

export {Content}
