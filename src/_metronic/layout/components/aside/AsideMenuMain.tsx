/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from 'react-intl'
import { KTIcon } from '../../../helpers'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>


      <AsideMenuItem to='/apps/user-management/all_client' icon='black-right'
        // title={intl.formatMessage({ id: 'MENU.DASHBOARD.ALLCLIENT' })}
        title="Danışanlar"
        fontIcon='bi-layers' />


      <AsideMenuItem to='/apps/user-management/expert' icon='black-right'
        title="Uzmanlar"
        fontIcon='bi-layers' />


      <AsideMenuItem to='/apps/user-management/all_appointments' icon='black-right'
        title="Randevular"
        fontIcon='bi-layers' />




      <AsideMenuItem
        to='/crafted/widgets/mixed'
        icon='black-right'
        // title={intl.formatMessage({ id: 'MENU.DASHBOARD.APPOINTMENT' })}
        title='Ödemeler'
        fontIcon='bi-app-indicator'
      />


      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Yönetim'
        icon='black-right'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/apps/user-management/all_admin'
          title='Kullanıcılar'
          hasBullet={true} />

        <AsideMenuItem to='/apps/user-management/role_list'
          title='Roller'
          hasBullet={true} />



        <AsideMenuItem to='/apps/user-management/permissions'
          title='İzinler'
          hasBullet={true} />


        {/* <AsideMenuItem to='/apps/user-management/users' title={intl.formatMessage({ id: 'MENU.DASHBOARD_ALTSUBSECOND' })} hasBullet={true} /> */}
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/crafted/accounts'

        // title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}

        title='Paketler'
        icon='black-right'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/apps/user-management/corporate_packages'
          // title={intl.formatMessage({ id: 'MENU.DASHBOARD_ALTSUB' })} 
          title='Kurumsall paketler'
          hasBullet={true} />

        <AsideMenuItem to='/apps/user-management/individual_packages'
          title='Bireysel Paketler'
          hasBullet={true} />
      </AsideMenuItemWithSub>




      <AsideMenuItem to='/apps/user-management/certificates' icon='black-right'
        title='Sertifikalar'
        fontIcon='bi-layers' />

      <AsideMenuItemWithSub
        to='/crafted/accounts'
        // title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        title='Tanımlar'
        icon='black-right'
        fontIcon='bi-person'
      >

        <AsideMenuItem to='/apps/user-management/branch_status'
          title='Ünvanlar'
          hasBullet={true} />



        <AsideMenuItem to='/apps/user-management/experts'
          title='Uzmanlıklar'
          hasBullet={true} />

        <AsideMenuItem to='/apps/user-management/appointment_type'
          title='Randevu Tipleri'
          hasBullet={true} />


        <AsideMenuItemWithSub title="Branşlar"
          to=""
          icon='black-right'
          fontIcon='bi-person'

        >

          <AsideMenuItem to='/apps/user-management/main_branch'
            title='Ana Branşlar'
            hasBullet={true} />
          <AsideMenuItem to='/apps/user-management/sub_branch'
            title=' Alt Branşlar'
            hasBullet={true} />
        </AsideMenuItemWithSub>


      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub title="Firmalar"
        to=""
        icon='black-right'
        fontIcon='bi-person'
      >

        <AsideMenuItem to='/apps/user-management/companies'
          title='Tüm Firmalar'
          hasBullet={true} />
        <AsideMenuItem to='/apps/user-management/company_types'
          title=' Firma Tipleri'
          hasBullet={true} />

      </AsideMenuItemWithSub>













      {/* <div className='menu-item '>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div> */}






      {/* <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Randevularım'
        fontIcon='bi-archive'
        icon='black-right'

      
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Aldığım' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub> */}


      {/* <AsideMenuItemWithSub to='/error' title='Errors' fontIcon='bi-sticky' icon='black-right'>
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />

      </AsideMenuItemWithSub> */}


      {/* <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='black-right'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub> */}


      {/* <div className='menu-item '>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div> */}


      {/* <AsideMenuItemWithSub to='/apps/chat' title='Chat' fontIcon='bi-chat-left' icon='black-right'>
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub> */}


      {/* <AsideMenuItem
        to='/apps/user-management/users'
        icon='black-right'
        title='User management'
        fontIcon='bi-layers'

      /> */}

      {/* 
      <div className='menu-item hidden'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div> */}


      {/* <div className='menu-item hidden'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTIcon iconName='document' className='fs-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}


    </>
  )
}
