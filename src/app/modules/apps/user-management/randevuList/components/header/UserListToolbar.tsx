import { KTIcon } from '../../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { UsersListFilter } from './UsersListFilter'
import DropdownWithoutSearch from '../../../../../../../_metronic/partials/widgets/feeds/DropdownWithoutSearch'
import { useState } from 'react'



const UsersListToolbar = () => {
  const { setItemIdForUpdate } = useListView()

  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  const [filterInterval, setFilterInterval] = useState(null)

  const handleChooseInterval = (dataFromChild: any) => {
    setFilterInterval(dataFromChild);
  }

  const options = ["Tümü", "iptal edilen", "Tamamlanan", "Tarihi geçen", "Red edilen", "Beklenen", "Geri iade", ""]



  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>

      <DropdownWithoutSearch options={options} updateData={handleChooseInterval} />
      &nbsp;&nbsp;

      <UsersListFilter />

      {/* begin::Add user */}
      {/* <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add User
      </button> */}
      {/* end::Add user */}



    </div>
  )
}

export { UsersListToolbar }

