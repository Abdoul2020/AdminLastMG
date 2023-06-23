import React from 'react'






const Certificates = () => {

    return (
        <div className="d-flex flex-column flex-root">

            <div className="page d-flex flex-row flex-column-fluid" >

                <div id="kt_wrapper" style={{ width: "100%" }}>




                    <div className="content d-flex flex-column flex-column-fluid" id="kt_content">


                        <div className="container-xxl" id="kt_content_container">

                            <div className="card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10" style={
                                {
                                    backgroundSize: "auto calc(100% + 10rem)",
                                    backgroundPositionX: "100%",
                                    backgroundImage: "url('assets/media/illustrations/dozzy-1/4.png')"
                                }
                            } >



                                <div className="card-header pt-10">
                                    <div className="d-flex align-items-center">

                                        <div className="symbol symbol-circle me-5">
                                            <div className="symbol-label bg-transparent text-primary border border-secondary border-dashed">
                                                <i className="ki-duotone ki-abstract-47 fs-2x text-primary">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                        </div>


                                        <div className="d-flex flex-column mb-5">
                                            <h2 className="mb-1">Tolpam Sertifikalar</h2>
                                            <div className="text-muted fw-bold">
                                                <a href="#">Sertifikalar</a>
                                                <span className="mx-3">|</span>2.6 GB
                                                <span className="mx-3">|</span>758 Adet Sertifika</div>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="card card-flush">

                                <div className="card-header pt-8">
                                    <div className="card-title">

                                        <div className="d-flex align-items-center position-relative my-1">
                                            <i className="ki-duotone ki-magnifier fs-1 position-absolute ms-6">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            <input type="text" data-kt-filemanager-table-filter="search" className="form-control form-control-solid w-250px ps-15"
                                                placeholder="Sertifika Ara" />

                                        </div>

                                    </div>

                                    <div className="card-toolbar">



                                        <div className="d-flex justify-content-end align-items-center d-none" data-kt-filemanager-table-toolbar="selected">
                                            <div className="fw-bold me-5">
                                                <span className="me-2" data-kt-filemanager-table-select="selected_count"></span>Selected</div>
                                            <button type="button" className="btn btn-danger" data-kt-filemanager-table-select="delete_selected">Delete Selected</button>
                                        </div>

                                    </div>

                                </div>


                                <div className="card-body">

                                    <div className="d-flex flex-stack">

                                        <div className="badge badge-lg badge-light-primary">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <i className="ki-duotone ki-abstract-32 fs-2 text-primary me-3">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                                <a href="#">Keenthemes</a>
                                                <i className="ki-duotone ki-right fs-2 text-primary mx-1"></i>
                                                <a href="#">themes</a>
                                                <i className="ki-duotone ki-right fs-2 text-primary mx-1"></i>
                                                <a href="#">html</a>
                                                <i className="ki-duotone ki-right fs-2 text-primary mx-1"></i>demo1</div>
                                        </div>


                                        <div className="badge badge-lg badge-primary">
                                            <span id="kt_file_manager_items_counter">82 items</span>
                                        </div>

                                    </div>


                                    <table id="kt_file_manager_list" data-kt-filemanager-table="folders" className="table align-middle table-row-dashed fs-6 gy-5">
                                        <thead>
                                            <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                                <th className="w-10px pe-2">
                                                    <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                        <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_file_manager_list .form-check-input" value="1" />
                                                    </div>
                                                </th>
                                                <th className="min-w-250px">Name</th>
                                                <th className="min-w-10px">Size</th>
                                                <th className="min-w-125px">Last Modified</th>
                                                <th className="w-125px"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="fw-semibold text-gray-600">
                                            <tr>
                                                <td>
                                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                        <input className="form-check-input" type="checkbox" value="1" />
                                                    </div>
                                                </td>


                                                <td data-order="account">
                                                    <div className="d-flex align-items-center">
                                                        <span className="icon-wrapper">
                                                            <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                        <a href="../../demo3/dist/apps/file-manager/files/.html" className="text-gray-800 text-hover-primary">account</a>
                                                    </div>
                                                </td>

                                                <td>-</td>
                                                <td>-</td>
                                                <td className="text-end" data-kt-filemanager-table="action_dropdown">
                                                    <div className="d-flex justify-content-end">

                                                        <div className="ms-2" data-kt-filemanger-table="copy_link">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                <i className="ki-duotone ki-fasten fs-5 m-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </button>

                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">

                                                                <div className="card card-flush">
                                                                    <div className="card-body p-5">

                                                                        <div className="d-flex" data-kt-filemanger-table="copy_link_generator">

                                                                            <div className="me-5" data-kt-indicator="on">
                                                                                <span className="indicator-progress">
                                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                                </span>
                                                                            </div>


                                                                            <div className="fs-6 text-dark">Generating Share Link...</div>

                                                                        </div>


                                                                        <div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
                                                                            <div className="d-flex mb-3">
                                                                                <i className="ki-duotone ki-check fs-2 text-success me-3"></i>
                                                                                <div className="fs-6 text-dark">Share Link Generated</div>
                                                                            </div>
                                                                            <input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
                                                                            <div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
                                                                                <a href="../../demo3/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</a></div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>

                                                        <div className="ms-2">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                <i className="ki-duotone ki-dots-square fs-5 m-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                </i>
                                                            </button>

                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">

                                                                <div className="menu-item px-3">
                                                                    <a href="../../demo3/dist/apps/file-manager/files.html" className="menu-link px-3">View</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3">Download Folder</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table-filter="move_row" data-bs-toggle="modal" data-bs-target="#kt_modal_move_to_folder">Move to folder</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</a>
                                                                </div>

                                                            </div>


                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                        <input className="form-check-input" type="checkbox" value="1" />
                                                    </div>
                                                </td>
                                                <td data-order="apps">
                                                    <div className="d-flex align-items-center">
                                                        <span className="icon-wrapper">
                                                            <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                        <a href="../../demo3/dist/apps/file-manager/files/.html" className="text-gray-800 text-hover-primary">apps</a>
                                                    </div>
                                                </td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td className="text-end" data-kt-filemanager-table="action_dropdown">
                                                    <div className="d-flex justify-content-end">

                                                        <div className="ms-2" data-kt-filemanger-table="copy_link">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                <i className="ki-duotone ki-fasten fs-5 m-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </button>

                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">

                                                                <div className="card card-flush">
                                                                    <div className="card-body p-5">

                                                                        <div className="d-flex" data-kt-filemanger-table="copy_link_generator">

                                                                            <div className="me-5" data-kt-indicator="on">
                                                                                <span className="indicator-progress">
                                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                                </span>
                                                                            </div>


                                                                            <div className="fs-6 text-dark">Generating Share Link...</div>

                                                                        </div>


                                                                        <div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
                                                                            <div className="d-flex mb-3">
                                                                                <i className="ki-duotone ki-check fs-2 text-success me-3"></i>
                                                                                <div className="fs-6 text-dark">Share Link Generated</div>
                                                                            </div>
                                                                            <input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
                                                                            <div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
                                                                                <a href="../../demo3/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</a></div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>

                                                        <div className="ms-2">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                <i className="ki-duotone ki-dots-square fs-5 m-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                </i>
                                                            </button>

                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">

                                                                <div className="menu-item px-3">
                                                                    <a href="../../demo3/dist/apps/file-manager/files.html" className="menu-link px-3">View</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3">Download Folder</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table-filter="move_row" data-bs-toggle="modal" data-bs-target="#kt_modal_move_to_folder">Move to folder</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</a>
                                                                </div>

                                                            </div>


                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                        <input className="form-check-input" type="checkbox" value="1" />
                                                    </div>
                                                </td>
                                                <td data-order="widgets">
                                                    <div className="d-flex align-items-center">
                                                        <span className="icon-wrapper">
                                                            <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                        <a href="../../demo3/dist/apps/file-manager/files/.html" className="text-gray-800 text-hover-primary">widgets</a>
                                                    </div>
                                                </td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td className="text-end" data-kt-filemanager-table="action_dropdown">
                                                    <div className="d-flex justify-content-end">

                                                        <div className="ms-2" data-kt-filemanger-table="copy_link">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                <i className="ki-duotone ki-fasten fs-5 m-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </button>

                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">

                                                                <div className="card card-flush">
                                                                    <div className="card-body p-5">

                                                                        <div className="d-flex" data-kt-filemanger-table="copy_link_generator">

                                                                            <div className="me-5" data-kt-indicator="on">
                                                                                <span className="indicator-progress">
                                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                                </span>
                                                                            </div>


                                                                            <div className="fs-6 text-dark">Generating Share Link...</div>

                                                                        </div>


                                                                        <div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
                                                                            <div className="d-flex mb-3">
                                                                                <i className="ki-duotone ki-check fs-2 text-success me-3"></i>
                                                                                <div className="fs-6 text-dark">Share Link Generated</div>
                                                                            </div>
                                                                            <input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
                                                                            <div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
                                                                                <a href="../../demo3/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</a></div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>

                                                        <div className="ms-2">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                <i className="ki-duotone ki-dots-square fs-5 m-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                </i>
                                                            </button>

                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">

                                                                <div className="menu-item px-3">
                                                                    <a href="../../demo3/dist/apps/file-manager/files.html" className="menu-link px-3">View</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3">Download Folder</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table-filter="move_row" data-bs-toggle="modal" data-bs-target="#kt_modal_move_to_folder">Move to folder</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</a>
                                                                </div>

                                                            </div>


                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>
                                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                        <input className="form-check-input" type="checkbox" value="1" />
                                                    </div>
                                                </td>
                                                <td data-order="assets">
                                                    <div className="d-flex align-items-center">
                                                        <span className="icon-wrapper">
                                                            <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                        <a href="../../demo3/dist/apps/file-manager/files/.html" className="text-gray-800 text-hover-primary">assets</a>
                                                    </div>
                                                </td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td className="text-end" data-kt-filemanager-table="action_dropdown">
                                                    <div className="d-flex justify-content-end">

                                                        <div className="ms-2" data-kt-filemanger-table="copy_link">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                <i className="ki-duotone ki-fasten fs-5 m-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </button>

                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">

                                                                <div className="card card-flush">
                                                                    <div className="card-body p-5">

                                                                        <div className="d-flex" data-kt-filemanger-table="copy_link_generator">

                                                                            <div className="me-5" data-kt-indicator="on">
                                                                                <span className="indicator-progress">
                                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                                </span>
                                                                            </div>


                                                                            <div className="fs-6 text-dark">Generating Share Link...</div>

                                                                        </div>


                                                                        <div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
                                                                            <div className="d-flex mb-3">
                                                                                <i className="ki-duotone ki-check fs-2 text-success me-3"></i>
                                                                                <div className="fs-6 text-dark">Share Link Generated</div>
                                                                            </div>
                                                                            <input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
                                                                            <div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
                                                                                <a href="../../demo3/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</a></div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>

                                                        <div className="ms-2">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                <i className="ki-duotone ki-dots-square fs-5 m-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                </i>
                                                            </button>

                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">

                                                                <div className="menu-item px-3">
                                                                    <a href="../../demo3/dist/apps/file-manager/files.html" className="menu-link px-3">View</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3">Download Folder</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table-filter="move_row" data-bs-toggle="modal" data-bs-target="#kt_modal_move_to_folder">Move to folder</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</a>
                                                                </div>

                                                            </div>


                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                        <input className="form-check-input" type="checkbox" value="1" />
                                                    </div>
                                                </td>
                                                <td data-order="documentation">
                                                    <div className="d-flex align-items-center">
                                                        <span className="icon-wrapper">
                                                            <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                        <a href="../../demo3/dist/apps/file-manager/files/.html" className="text-gray-800 text-hover-primary">documentation</a>
                                                    </div>
                                                </td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td className="text-end" data-kt-filemanager-table="action_dropdown">
                                                    <div className="d-flex justify-content-end">

                                                        <div className="ms-2" data-kt-filemanger-table="copy_link">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                <i className="ki-duotone ki-fasten fs-5 m-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </button>

                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">

                                                                <div className="card card-flush">
                                                                    <div className="card-body p-5">

                                                                        <div className="d-flex" data-kt-filemanger-table="copy_link_generator">

                                                                            <div className="me-5" data-kt-indicator="on">
                                                                                <span className="indicator-progress">
                                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                                </span>
                                                                            </div>


                                                                            <div className="fs-6 text-dark">Generating Share Link...</div>

                                                                        </div>


                                                                        <div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
                                                                            <div className="d-flex mb-3">
                                                                                <i className="ki-duotone ki-check fs-2 text-success me-3"></i>
                                                                                <div className="fs-6 text-dark">Share Link Generated</div>
                                                                            </div>
                                                                            <input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
                                                                            <div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
                                                                                <a href="../../demo3/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</a></div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>

                                                        <div className="ms-2">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                <i className="ki-duotone ki-dots-square fs-5 m-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                </i>
                                                            </button>

                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">

                                                                <div className="menu-item px-3">
                                                                    <a href="../../demo3/dist/apps/file-manager/files.html" className="menu-link px-3">View</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3">Download Folder</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table-filter="move_row" data-bs-toggle="modal" data-bs-target="#kt_modal_move_to_folder">Move to folder</a>
                                                                </div>


                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</a>
                                                                </div>

                                                            </div>


                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                         
                                            
                                          
                                        
                                        </tbody>
                                    </table>

                                </div>

                            </div>


                            <table className="d-none">
                                <tr id="kt_file_manager_new_folder_row" data-kt-filemanager-template="upload">
                                    
                                    <td></td>
                                    <td id="kt_file_manager_add_folder_form" className="fv-row">
                                        <div className="d-flex align-items-center">

                                            <span id="kt_file_manager_folder_icon">
                                                <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </span>


                                            <input type="text" name="new_folder_name" placeholder="Enter the folder name" className="form-control mw-250px me-3" />


                                            <button className="btn btn-icon btn-light-primary me-3" id="kt_file_manager_add_folder">
                                                <span className="indicator-label">
                                                    <i className="ki-duotone ki-check fs-1"></i>
                                                </span>
                                                <span className="indicator-progress">
                                                    <span className="spinner-border spinner-border-sm align-middle"></span>
                                                </span>
                                            </button>


                                            <button className="btn btn-icon btn-light-danger" id="kt_file_manager_cancel_folder">
                                                <span className="indicator-label">
                                                    <i className="ki-duotone ki-cross fs-1">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="indicator-progress">
                                                    <span className="spinner-border spinner-border-sm align-middle"></span>
                                                </span>
                                            </button>

                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>

                            <div className="d-none" data-kt-filemanager-template="rename">
                                <div className="fv-row">
                                    <div className="d-flex align-items-center">
                                        <span id="kt_file_manager_rename_folder_icon"></span>
                                        <input type="text" id="kt_file_manager_rename_input" name="rename_folder_name" placeholder="Enter the new folder name" className="form-control mw-250px me-3" value="" />
                                        <button className="btn btn-icon btn-light-primary me-3" id="kt_file_manager_rename_folder">
                                            <i className="ki-duotone ki-check fs-1"></i>
                                        </button>
                                        <button className="btn btn-icon btn-light-danger" id="kt_file_manager_rename_folder_cancel">
                                            <span className="indicator-label">
                                                <i className="ki-duotone ki-cross fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </span>
                                            <span className="indicator-progress">
                                                <span className="spinner-border spinner-border-sm align-middle"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="d-none" data-kt-filemanager-template="action">
                                <div className="d-flex justify-content-end">
                                    <div className="ms-2" data-kt-filemanger-table="copy_link">
                                        <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i className="ki-duotone ki-fasten fs-5 m-0">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </button>
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
                                            <div className="card card-flush">
                                                <div className="card-body p-5">
                                                    <div className="d-flex" data-kt-filemanger-table="copy_link_generator">
                                                        <div className="me-5" data-kt-indicator="on">
                                                            <span className="indicator-progress">
                                                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                            </span>
                                                        </div>

                                                        <div className="fs-6 text-dark">Generating Share Link...</div>
                                                    </div>

                                                    <div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
                                                        <div className="d-flex mb-3">
                                                            <i className="ki-duotone ki-check fs-2 text-success me-3"></i>
                                                            <div className="fs-6 text-dark">Share Link Generated</div>
                                                        </div>
                                                        <input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
                                                        <div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
                                                            <a href="../../demo3/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ms-2">
                                        <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i className="ki-duotone ki-dots-square fs-5 m-0">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                            </i>
                                        </button>
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Download File</a>
                                            </div>

                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</a>
                                            </div>

                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3" data-kt-filemanager-table-filter="move_row" data-bs-toggle="modal" data-bs-target="#kt_modal_move_to_folder">Move to folder</a>
                                            </div>

                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-none" data-kt-filemanager-template="checkbox">
                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                </div>
                            </div>

                            <div className="modal fade" id="kt_modal_upload" tabIndex={-1} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                    <div className="modal-content">
                                        <form className="form" action="none" id="kt_modal_upload_form">
                                            <div className="modal-header">
                                                <h2 className="fw-bold">Upload files</h2>

                                                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                                    <i className="ki-duotone ki-cross fs-1">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </div>
                                            </div>

                                            <div className="modal-body pt-10 pb-15 px-lg-17">
                                                <div className="form-group">
                                                    <div className="dropzone dropzone-queue mb-2" id="kt_modal_upload_dropzone">
                                                        <div className="dropzone-panel mb-4">
                                                            <a className="dropzone-select btn btn-sm btn-primary me-2">Attach files</a>
                                                            <a className="dropzone-upload btn btn-sm btn-light-primary me-2">Upload All</a>
                                                            <a className="dropzone-remove-all btn btn-sm btn-light-primary">Remove All</a>
                                                        </div>

                                                        <div className="dropzone-items wm-200px">
                                                            <div className="dropzone-item p-5" style={{ display: "none" }}>
                                                                <div className="dropzone-file">
                                                                    <div className="dropzone-filename text-dark" title="some_image_file_name.jpg">
                                                                        <span data-dz-name="">some_image_file_name.jpg</span>
                                                                        <strong>(
                                                                            <span data-dz-size="">340kb</span>)</strong>
                                                                    </div>
                                                                    <div className="dropzone-error mt-0" data-dz-errormessage=""></div>
                                                                </div>

                                                                <div className="dropzone-progress">
                                                                    <div className="progress bg-gray-300">

                                                                        {/* <div className="progress-bar bg-primary"
                                                                            role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-dz-uploadprogress=""></div> */}



                                                                    </div>
                                                                </div>

                                                                <div className="dropzone-toolbar">
                                                                    <span className="dropzone-start">
                                                                        <i className="ki-duotone ki-to-right fs-1"></i>
                                                                    </span>
                                                                    <span className="dropzone-cancel" data-dz-remove="" style={{ display: "none" }}>
                                                                        <i className="ki-duotone ki-cross fs-2">
                                                                            <span className="path1"></span>
                                                                            <span className="path2"></span>
                                                                        </i>
                                                                    </span>
                                                                    <span className="dropzone-delete" data-dz-remove="">
                                                                        <i className="ki-duotone ki-cross fs-2">
                                                                            <span className="path1"></span>
                                                                            <span className="path2"></span>
                                                                        </i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <span className="form-text fs-6 text-muted">Max file size is 1MB per file.</span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="kt_modal_move_to_folder" tabIndex={-1} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                    <div className="modal-content">
                                        <form className="form" action="#" id="kt_modal_move_to_folder_form">
                                            <div className="modal-header">
                                                <h2 className="fw-bold">Move to folder</h2>

                                                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                                    <i className="ki-duotone ki-cross fs-1">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </div>
                                            </div>

                                            <div className="modal-body pt-10 pb-15 px-lg-17">
                                                <div className="form-group fv-row">
                                                    <div className="d-flex">
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input me-3" name="move_to_folder" type="radio" value="0" id="kt_modal_move_to_folder_0" />

                                                            <label className="form-check-label" >
                                                                <div className="fw-bold">
                                                                    <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>account</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='separator separator-dashed my-5'></div>
                                                    <div className="d-flex">
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input me-3" name="move_to_folder" type="radio" value="1" id="kt_modal_move_to_folder_1" />

                                                            <label className="form-check-label" >
                                                                <div className="fw-bold">
                                                                    <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>apps</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='separator separator-dashed my-5'></div>
                                                    <div className="d-flex">
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input me-3" name="move_to_folder" type="radio" value="2" id="kt_modal_move_to_folder_2" />

                                                            <label className="form-check-label" >
                                                                <div className="fw-bold">
                                                                    <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>widgets</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='separator separator-dashed my-5'></div>
                                                    <div className="d-flex">
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input me-3" name="move_to_folder" type="radio" value="3" id="kt_modal_move_to_folder_3" />

                                                            <label className="form-check-label" >
                                                                <div className="fw-bold">
                                                                    <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>assets</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='separator separator-dashed my-5'></div>
                                                    <div className="d-flex">
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input me-3" name="move_to_folder" type="radio" value="4" id="kt_modal_move_to_folder_4" />

                                                            <label className="form-check-label" >
                                                                <div className="fw-bold">
                                                                    <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>documentation</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='separator separator-dashed my-5'></div>
                                                    <div className="d-flex">
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input me-3" name="move_to_folder" type="radio" value="5" id="kt_modal_move_to_folder_5" />

                                                            <label className="form-check-label" >
                                                                <div className="fw-bold">
                                                                    <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>layouts</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='separator separator-dashed my-5'></div>
                                                    <div className="d-flex">
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input me-3" name="move_to_folder" type="radio" value="6" id="kt_modal_move_to_folder_6" />

                                                            <label className="form-check-label" >
                                                                <div className="fw-bold">
                                                                    <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>modals</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='separator separator-dashed my-5'></div>
                                                    <div className="d-flex">
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input me-3" name="move_to_folder" type="radio" value="7" id="kt_modal_move_to_folder_7" />

                                                            <label className="form-check-label" >
                                                                <div className="fw-bold">
                                                                    <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>authentication</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='separator separator-dashed my-5'></div>
                                                    <div className="d-flex">
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input me-3" name="move_to_folder" type="radio" value="8" id="kt_modal_move_to_folder_8" />

                                                            <label className="form-check-label" >
                                                                <div className="fw-bold">
                                                                    <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>dashboards</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='separator separator-dashed my-5'></div>
                                                    <div className="d-flex">
                                                        <div className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input me-3" name="move_to_folder" type="radio" value="9" id="kt_modal_move_to_folder_9" />

                                                            <label className="form-check-label" >
                                                                <div className="fw-bold">
                                                                    <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>pages</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-center mt-12">
                                                    <button type="button" className="btn btn-primary" id="kt_modal_move_to_folder_submit">
                                                        <span className="indicator-label">Save</span>
                                                        <span className="indicator-progress">Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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

export default Certificates