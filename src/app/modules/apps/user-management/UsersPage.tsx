import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import { UsersListWrapper } from './users-list/UsersList'
import { UzmanListWrapper } from "./uzmanList/UsersList"
import { RandevuListWrapper } from './randevuList/UsersList'
import AllRandevu from '../../../../_metronic/partials/widgets/feeds/AllRandevu'
import { AdminListWrapper } from './adminList/UsersList'
import RolList from '../../../../_metronic/partials/widgets/feeds/RolList'
import PerimissionsRole from '../../../../_metronic/partials/widgets/feeds/PerimissionsRole'
import KurumsalPaket from '../../../../_metronic/partials/widgets/feeds/paketlerData.tsx/KurumsalPaket'
import BireyselPaketler from '../../../../_metronic/partials/widgets/feeds/paketlerData.tsx/BireyselPaketler'
import Certificates from '../../../../_metronic/partials/widgets/feeds/adminCertificate/Certificates'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Danışanlar Tablosu',
    path: '/apps/user-management/all_client',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Uzman Tablosu',
    path: '/apps/user-management/expert',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Randevu Tablosu',
    path: '/apps/user-management/all_appointments',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Admin Tablosu',
    path: '/apps/user-management/all_admin',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Roller',
    path: '/apps/user-management/role_list',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'İzinler',
    path: '/apps/user-management/permissions',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Kurumsal Paketler',
    path: '/apps/user-management/corporate_packages',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Bireysel Paketler',
    path: '/apps/user-management/individual_packages',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Sertifikalar',
    path: '/apps/user-management/certificates',
    isSeparator: true,
    isActive: false,
  },


]

const UsersPage = () => {

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='all_client'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}> Danışanlar </PageTitle>

              <UsersListWrapper />
            </>
          }
        />

        <Route
          path='expert'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Uzmanlar</PageTitle>
              <UzmanListWrapper />
            </>
          }
        />

        <Route
          path='all_appointments'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}> Randevular </PageTitle>
              <RandevuListWrapper />
            </>
          }
        />

        <Route
          path='all_admin'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}> Tüm Adminler </PageTitle>
              <AdminListWrapper />
            </>
          }
        />

        <Route
          path='role_list'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}> Roller </PageTitle>
              <RolList />
            </>
          }
        />

        <Route
          path='permissions'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}> İzinler </PageTitle>
              <PerimissionsRole />
            </>
          }
        />

        <Route
          path='corporate_packages'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}> Kurumsal Paketler </PageTitle>
              <KurumsalPaket />
            </>
          }
        />

        <Route
          path='individual_packages'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}> Bireysel Paketler </PageTitle>
              <BireyselPaketler />

            </>
          }
        />

        <Route
          path='certificates'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}> Sertifikalar </PageTitle>
              <Certificates/>

            </>
          }
        />



      </Route>
      <Route index element={<Navigate to='/apps/user-management/all_client' />} />
    </Routes>
  )
}

export default UsersPage
