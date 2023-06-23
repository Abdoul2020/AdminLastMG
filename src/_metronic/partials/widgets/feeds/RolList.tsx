import React from 'react'

const RolList = () => {
    return (
        <div className="d-flex flex-column flex-root">

            <div className="page d-flex flex-row flex-column-fluid">

                <div id="kt_wrapper">





                    <div className="content d-flex flex-column flex-column-fluid" id="kt_content">

                        <div className="container" id="kt_content_container">

                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
                                <div className="col-md-4">
                                    <div className="card card-flush h-md-100">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <h2>Administrator</h2>
                                            </div>
                                        </div>

                                        <div className="card-body pt-1">

                                            <div className="fw-bold text-gray-600 mb-5">Total users with this role: 5</div>
                                            <div className="d-flex flex-column text-gray-600">
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>All Admin Controls</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View and Edit Financial Summaries</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>Enabled Bulk Reports</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View and Edit Payouts</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View and Edit Disputes</div>
                                                <div className='d-flex align-items-center py-2'>
                                                    <span className='bullet bg-primary me-3'></span>
                                                    <em>and 7 more...</em>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer flex-wrap pt-0">
                                            <a href="../../demo3/dist/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
                                            <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card card-flush h-md-100">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <h2>Developer</h2>
                                            </div>
                                        </div>

                                        <div className="card-body pt-1">
                                            <div className="fw-bold text-gray-600 mb-5">Total users with this role: 14</div>

                                            <div className="d-flex flex-column text-gray-600">
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>Some Admin Controls</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View Financial Summaries only</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View and Edit API Controls</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View Payouts only</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View and Edit Disputes</div>
                                                <div className='d-flex align-items-center py-2'>
                                                    <span className='bullet bg-primary me-3'></span>
                                                    <em>and 3 more...</em>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer flex-wrap pt-0">
                                            <a href="../../demo3/dist/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
                                            <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card card-flush h-md-100">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <h2>Analyst</h2>
                                            </div>
                                        </div>

                                        <div className="card-body pt-1">
                                            <div className="fw-bold text-gray-600 mb-5">Total users with this role: 4</div>

                                            <div className="d-flex flex-column text-gray-600">
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>No Admin Controls</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View and Edit Financial Summaries</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>Enabled Bulk Reports</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View Payouts only</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View Disputes only</div>
                                                <div className='d-flex align-items-center py-2'>
                                                    <span className='bullet bg-primary me-3'></span>
                                                    <em>and 2 more...</em>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer flex-wrap pt-0">
                                            <a href="../../demo3/dist/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
                                            <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card card-flush h-md-100">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <h2>Support</h2>
                                            </div>
                                        </div>

                                        <div className="card-body pt-1">
                                            <div className="fw-bold text-gray-600 mb-5">Total users with this role: 23</div>
                                            <div className="d-flex flex-column text-gray-600">
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>No Admin Controls</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View Financial Summaries only</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View Payouts only</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View and Edit Disputes</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>Response to Customer Feedback</div>
                                            </div>
                                        </div>

                                        <div className="card-footer flex-wrap pt-0">
                                            <a href="../../demo3/dist/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
                                            <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card card-flush h-md-100">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <h2>Trial</h2>
                                            </div>
                                        </div>

                                        <div className="card-body pt-1">
                                            <div className="fw-bold text-gray-600 mb-5">Total users with this role: 546</div>

                                            <div className="d-flex flex-column text-gray-600">
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>No Admin Controls</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View Financial Summaries only</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View Bulk Reports only</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View Payouts only</div>
                                                <div className="d-flex align-items-center py-2">
                                                    <span className="bullet bg-primary me-3"></span>View Disputes only</div>
                                            </div>
                                        </div>

                                        <div className="card-footer flex-wrap pt-0">
                                            <a href="../../demo3/dist/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
                                            <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="ol-md-4">
                                    <div className="card h-md-100">
                                        <div className="card-body d-flex flex-center">
                                            <button type="button" className="btn btn-clear d-flex flex-column flex-center" data-bs-toggle="modal" data-bs-target="#kt_modal_add_role">
                                                <img src="assets/media/illustrations/dozzy-1/4.png" alt="" className="mw-100 mh-150px mb-7" />

                                                <div className="fw-bold fs-3 text-gray-600 text-hover-primary">Add New Role</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="kt_modal_add_role" tabIndex={-1} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered mw-750px">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h2 className="fw-bold">Add a Role</h2>

                                            <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close">
                                                <i className="ki-duotone ki-cross fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                        </div>

                                        <div className="modal-body scroll-y mx-lg-5 my-7">
                                            <form id="kt_modal_add_role_form" className="form" action="#">
                                                <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_role_header" data-kt-scroll-wrappers="#kt_modal_add_role_scroll" data-kt-scroll-offset="300px">
                                                    <div className="fv-row mb-10">
                                                        <label className="fs-5 fw-bold form-label mb-2">
                                                            <span className="required">Role name</span>
                                                        </label>

                                                        <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" />
                                                    </div>

                                                    <div className="fv-row">
                                                        <label className="fs-5 fw-bold form-label mb-2">Role Permissions</label>

                                                        <div className="table-responsive">
                                                            <table className="table align-middle table-row-dashed fs-6 gy-5">
                                                                <tbody className="text-gray-600 fw-semibold">
                                                                    <tr>
                                                                        <td className="text-gray-800">Administrator Access
                                                                            <span className="ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Allows a full access to the system">
                                                                                <i className="ki-duotone ki-information fs-7">
                                                                                    <span className="path1"></span>
                                                                                    <span className="path2"></span>
                                                                                    <span className="path3"></span>
                                                                                </i>
                                                                            </span></td>
                                                                        <td>
                                                                            <label className="form-check form-check-custom form-check-solid me-9">
                                                                                <input className="form-check-input" type="checkbox" value="" id="kt_roles_select_all" />
                                                                                <span className="form-check-label" >Select all</span>
                                                                            </label>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">User Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="user_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="user_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="user_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>

                                                                        <td className="text-gray-800">Content Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="content_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="content_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="content_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Financial Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Reporting</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="reporting_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="reporting_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="reporting_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Payroll</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="payroll_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="payroll_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="payroll_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Disputes Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">API Controls</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Database Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="database_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="database_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="database_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Repository Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center pt-15">
                                                    <button type="reset" className="btn btn-light me-3" data-kt-roles-modal-action="cancel">Discard</button>
                                                    <button type="submit" className="btn btn-primary" data-kt-roles-modal-action="submit">
                                                        <span className="indicator-label">Submit</span>
                                                        <span className="indicator-progress">Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="kt_modal_update_role" tabIndex={-1} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered mw-750px">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h2 className="fw-bold">Update Role</h2>

                                            <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close">
                                                <i className="ki-duotone ki-cross fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                        </div>

                                        <div className="modal-body scroll-y mx-5 my-7">
                                            <form id="kt_modal_update_role_form" className="form" action="#">
                                                <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_update_role_header" data-kt-scroll-wrappers="#kt_modal_update_role_scroll" data-kt-scroll-offset="300px">
                                                    <div className="fv-row mb-10">
                                                        <label className="fs-5 fw-bold form-label mb-2">
                                                            <span className="required">Role name</span>
                                                        </label>

                                                        <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" value="Developer" />
                                                    </div>

                                                    <div className="fv-row">
                                                        <label className="fs-5 fw-bold form-label mb-2">Role Permissions</label>

                                                        <div className="table-responsive">
                                                            <table className="table align-middle table-row-dashed fs-6 gy-5">
                                                                <tbody className="text-gray-600 fw-semibold">
                                                                    <tr>
                                                                        <td className="text-gray-800">Administrator Access
                                                                            <span className="ms-1" data-bs-toggle="tooltip" title="Allows a full access to the system">
                                                                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                                    <span className="path1"></span>
                                                                                    <span className="path2"></span>
                                                                                    <span className="path3"></span>
                                                                                </i>
                                                                            </span></td>
                                                                        <td>
                                                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-9">
                                                                                <input className="form-check-input" type="checkbox" value="" id="kt_roles_select_all" />
                                                                                <span className="form-check-label" >Select all</span>
                                                                            </label>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">User Management</td>

                                                                        <td>
                                                                            <div className="d-flex">

                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="user_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="user_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="user_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Content Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="content_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="content_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="content_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Financial Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Reporting</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="reporting_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="reporting_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="reporting_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>

                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Payroll</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="payroll_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="payroll_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="payroll_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Disputes Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">API Controls</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Database Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="database_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="database_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="database_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="text-gray-800">Repository Management</td>

                                                                        <td>
                                                                            <div className="d-flex">
                                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_read" />
                                                                                    <span className="form-check-label">Read</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_write" />
                                                                                    <span className="form-check-label">Write</span>
                                                                                </label>

                                                                                <label className="form-check form-check-custom form-check-solid">
                                                                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_create" />
                                                                                    <span className="form-check-label">Create</span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center pt-15">
                                                    <button type="reset" className="btn btn-light me-3" data-kt-roles-modal-action="cancel">Discard</button>
                                                    <button type="submit" className="btn btn-primary" data-kt-roles-modal-action="submit">
                                                        <span className="indicator-label">Submit</span>
                                                        <span className="indicator-progress">Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
                        <div className="container d-flex flex-column flex-md-row flex-stack">


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RolList