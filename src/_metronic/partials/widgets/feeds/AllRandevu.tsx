import React from 'react'

const AllRandevu = () => {
  return (
    <div className='page d-flex flex-row flex-column-fluid'>

              <div  id="kt_wrapper w-full" style={{width:"100%"}}>


					
					
					<div className="content d-flex flex-column flex-column-fluid" id="kt_content">
						<div  id="kt_content_container">
							<div className="card card-flush">
								<div className="card-header align-items-center py-5 gap-2 gap-md-5">
									<div className="card-title">
										<div className="d-flex align-items-center position-relative my-1">
											<i className="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
												<span className="path1"></span>
												<span className="path2"></span>
											</i>
											<input type="text" data-kt-ecommerce-order-filter="search" className="form-control form-control-solid w-250px ps-12" placeholder="Search Order" />
										</div>
									</div>
								
									<div className="card-toolbar flex-row-fluid justify-content-end gap-5">
										<div className="input-group w-250px">
											<input className="form-control form-control-solid rounded rounded-end-0" placeholder="Pick date range" id="kt_ecommerce_sales_flatpickr" />
											<button className="btn btn-icon btn-light" id="kt_ecommerce_sales_flatpickr_clear">
												<i className="ki-duotone ki-cross fs-2">
													<span className="path1"></span>
													<span className="path2"></span>
												</i>
											</button>
										</div>
										<div className="w-100 mw-150px">
											<select className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Status" data-kt-ecommerce-order-filter="status">
												<option></option>
												<option value="all">All</option>
												<option value="Cancelled">Cancelled</option>
												<option value="Completed">Completed</option>
												<option value="Denied">Denied</option>
												<option value="Expired">Expired</option>
												<option value="Failed">Failed</option>
												<option value="Pending">Pending</option>
												<option value="Processing">Processing</option>
												<option value="Refunded">Refunded</option>
												<option value="Delivered">Delivered</option>
												<option value="Delivering">Delivering</option>
											</select>
										</div>
										<a href="../../demo3/dist/apps/ecommerce/catalog/add-product.html" className="btn btn-primary">Add Order</a>
									</div>
								</div>
								<div className="card-body pt-0">
									<table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_sales_table">
										<thead>
											<tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
												<th className="w-10px pe-2">
													<div className="form-check form-check-sm form-check-custom form-check-solid me-3">
														<input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_ecommerce_sales_table .form-check-input" value="1" />
													</div>
												</th>
												<th className="min-w-100px">Randevu ID</th>
												<th className="min-w-175px">Randevu Sahibi</th>
												<th className="text-end min-w-70px">Randevu Danışanı</th>
												<th className="text-end min-w-100px">Total</th>
												<th className="text-end min-w-100px">Randevu Tarihi</th>
												<th className="text-end min-w-100px">Başlangıç Tarihi</th>
												<th className="text-end min-w-100px">Fazla</th>
											</tr>
										</thead>
										<tbody className="fw-semibold text-gray-600">
											<tr>
												<td>
													<div className="form-check form-check-sm form-check-custom form-check-solid">
														<input className="form-check-input" type="checkbox" value="1" />
													</div>
												</td>
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12917</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">O</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Delivered">
													<div className="badge badge-light-success">Delivered</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$316.00</span>
												</td>
												<td className="text-end" data-order="2023-03-15">
													<span className="fw-bold">15/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-21">
													<span className="fw-bold">21/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12918</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">O</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$201.00</span>
												</td>
												<td className="text-end" data-order="2023-03-15">
													<span className="fw-bold">15/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-20">
													<span className="fw-bold">20/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12919</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">M</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Melody Macy</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$425.00</span>
												</td>
												<td className="text-end" data-order="2023-03-18">
													<span className="fw-bold">18/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-19">
													<span className="fw-bold">19/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12920</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">O</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$463.00</span>
												</td>
												<td className="text-end" data-order="2023-03-13">
													<span className="fw-bold">13/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-18">
													<span className="fw-bold">18/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12921</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-6.jpg" alt="Emma Smith" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Smith</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$352.00</span>
												</td>
												<td className="text-end" data-order="2023-03-11">
													<span className="fw-bold">11/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-17">
													<span className="fw-bold">17/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12922</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-primary text-primary">N</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Neil Owen</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Denied">
													<div className="badge badge-light-danger">Denied</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$217.00</span>
												</td>
												<td className="text-end" data-order="2023-03-09">
													<span className="fw-bold">09/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-16">
													<span className="fw-bold">16/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12923</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-warning text-warning">C</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Mikaela Collins</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$208.00</span>
												</td>
												<td className="text-end" data-order="2023-03-11">
													<span className="fw-bold">11/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-15">
													<span className="fw-bold">15/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12924</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-primary text-primary">N</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Neil Owen</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$258.00</span>
												</td>
												<td className="text-end" data-order="2023-03-11">
													<span className="fw-bold">11/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-14">
													<span className="fw-bold">14/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12925</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-success text-success">L</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Lucy Kunic</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$125.00</span>
												</td>
												<td className="text-end" data-order="2023-03-12">
													<span className="fw-bold">12/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-13">
													<span className="fw-bold">13/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12926</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-13.jpg" alt="John Miller" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">John Miller</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Failed">
													<div className="badge badge-light-danger">Failed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$406.00</span>
												</td>
												<td className="text-end" data-order="2023-03-05">
													<span className="fw-bold">05/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-12">
													<span className="fw-bold">12/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12927</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-9.jpg" alt="Francis Mitcham" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Francis Mitcham</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$152.00</span>
												</td>
												<td className="text-end" data-order="2023-03-05">
													<span className="fw-bold">05/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-11">
													<span className="fw-bold">11/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12928</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">E</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Bold</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$152.00</span>
												</td>
												<td className="text-end" data-order="2023-03-09">
													<span className="fw-bold">09/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-10">
													<span className="fw-bold">10/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12929</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-6.jpg" alt="Emma Smith" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Smith</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$362.00</span>
												</td>
												<td className="text-end" data-order="2023-03-05">
													<span className="fw-bold">05/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-09">
													<span className="fw-bold">09/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12930</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-primary text-primary">N</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Neil Owen</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$124.00</span>
												</td>
												<td className="text-end" data-order="2023-03-07">
													<span className="fw-bold">07/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-08">
													<span className="fw-bold">08/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12931</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-6.jpg" alt="Emma Smith" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Smith</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$121.00</span>
												</td>
												<td className="text-end" data-order="2023-03-02">
													<span className="fw-bold">02/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-07">
													<span className="fw-bold">07/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12932</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-21.jpg" alt="Ethan Wilder" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Ethan Wilder</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$200.00</span>
												</td>
												<td className="text-end" data-order="2023-03-05">
													<span className="fw-bold">05/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-06">
													<span className="fw-bold">06/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12933</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-warning text-warning">C</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Mikaela Collins</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Denied">
													<div className="badge badge-light-danger">Denied</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$296.00</span>
												</td>
												<td className="text-end" data-order="2023-02-28">
													<span className="fw-bold">28/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-05">
													<span className="fw-bold">05/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12934</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">O</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Failed">
													<div className="badge badge-light-danger">Failed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$109.00</span>
												</td>
												<td className="text-end" data-order="2023-03-01">
													<span className="fw-bold">01/03/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-04">
													<span className="fw-bold">04/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12935</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-13.jpg" alt="John Miller" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">John Miller</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Denied">
													<div className="badge badge-light-danger">Denied</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$233.00</span>
												</td>
												<td className="text-end" data-order="2023-02-28">
													<span className="fw-bold">28/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-03">
													<span className="fw-bold">03/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12936</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">E</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Bold</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$64.00</span>
												</td>
												<td className="text-end" data-order="2023-02-24">
													<span className="fw-bold">24/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-02">
													<span className="fw-bold">02/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12937</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-5.jpg" alt="Sean Bean" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Sean Bean</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$456.00</span>
												</td>
												<td className="text-end" data-order="2023-02-25">
													<span className="fw-bold">25/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-03-01">
													<span className="fw-bold">01/03/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12938</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">O</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Processing">
													<div className="badge badge-light-primary">Processing</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$223.00</span>
												</td>
												<td className="text-end" data-order="2023-02-24">
													<span className="fw-bold">24/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-28">
													<span className="fw-bold">28/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12939</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-12.jpg" alt="Ana Crown" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Ana Crown</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$227.00</span>
												</td>
												<td className="text-end" data-order="2023-02-23">
													<span className="fw-bold">23/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-27">
													<span className="fw-bold">27/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12940</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-5.jpg" alt="Sean Bean" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Sean Bean</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$402.00</span>
												</td>
												<td className="text-end" data-order="2023-02-22">
													<span className="fw-bold">22/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-26">
													<span className="fw-bold">26/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12941</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">E</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Bold</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$268.00</span>
												</td>
												<td className="text-end" data-order="2023-02-22">
													<span className="fw-bold">22/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-25">
													<span className="fw-bold">25/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12942</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-5.jpg" alt="Sean Bean" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Sean Bean</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$342.00</span>
												</td>
												<td className="text-end" data-order="2023-02-20">
													<span className="fw-bold">20/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-24">
													<span className="fw-bold">24/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12943</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">O</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$128.00</span>
												</td>
												<td className="text-end" data-order="2023-02-17">
													<span className="fw-bold">17/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-23">
													<span className="fw-bold">23/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12944</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-12.jpg" alt="Ana Crown" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Ana Crown</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Pending">
													<div className="badge badge-light-warning">Pending</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$90.00</span>
												</td>
												<td className="text-end" data-order="2023-02-20">
													<span className="fw-bold">20/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-22">
													<span className="fw-bold">22/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12945</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-info text-info">A</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Robert Doe</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Pending">
													<div className="badge badge-light-warning">Pending</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$205.00</span>
												</td>
												<td className="text-end" data-order="2023-02-14">
													<span className="fw-bold">14/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-21">
													<span className="fw-bold">21/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12946</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">M</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Melody Macy</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Expired">
													<div className="badge badge-light-danger">Expired</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$365.00</span>
												</td>
												<td className="text-end" data-order="2023-02-18">
													<span className="fw-bold">18/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-20">
													<span className="fw-bold">20/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12947</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-13.jpg" alt="John Miller" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">John Miller</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Refunded">
													<div className="badge badge-light-info">Refunded</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$417.00</span>
												</td>
												<td className="text-end" data-order="2023-02-13">
													<span className="fw-bold">13/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-19">
													<span className="fw-bold">19/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12948</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-primary text-primary">N</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Neil Owen</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Failed">
													<div className="badge badge-light-danger">Failed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$182.00</span>
												</td>
												<td className="text-end" data-order="2023-02-12">
													<span className="fw-bold">12/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-18">
													<span className="fw-bold">18/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12949</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-info text-info">A</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Robert Doe</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$395.00</span>
												</td>
												<td className="text-end" data-order="2023-02-11">
													<span className="fw-bold">11/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-17">
													<span className="fw-bold">17/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12950</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">E</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Bold</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Cancelled">
													<div className="badge badge-light-danger">Cancelled</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$228.00</span>
												</td>
												<td className="text-end" data-order="2023-02-15">
													<span className="fw-bold">15/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-16">
													<span className="fw-bold">16/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12951</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-6.jpg" alt="Emma Smith" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Smith</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$222.00</span>
												</td>
												<td className="text-end" data-order="2023-02-12">
													<span className="fw-bold">12/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-15">
													<span className="fw-bold">15/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12952</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-6.jpg" alt="Emma Smith" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Smith</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Refunded">
													<div className="badge badge-light-info">Refunded</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$298.00</span>
												</td>
												<td className="text-end" data-order="2023-02-08">
													<span className="fw-bold">08/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-14">
													<span className="fw-bold">14/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12953</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-success text-success">L</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Lucy Kunic</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Denied">
													<div className="badge badge-light-danger">Denied</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$318.00</span>
												</td>
												<td className="text-end" data-order="2023-02-06">
													<span className="fw-bold">06/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-13">
													<span className="fw-bold">13/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12954</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-6.jpg" alt="Emma Smith" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Smith</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Denied">
													<div className="badge badge-light-danger">Denied</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$104.00</span>
												</td>
												<td className="text-end" data-order="2023-02-09">
													<span className="fw-bold">09/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-12">
													<span className="fw-bold">12/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12955</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-12.jpg" alt="Ana Crown" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Ana Crown</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Denied">
													<div className="badge badge-light-danger">Denied</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$231.00</span>
												</td>
												<td className="text-end" data-order="2023-02-10">
													<span className="fw-bold">10/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-11">
													<span className="fw-bold">11/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12956</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-21.jpg" alt="Ethan Wilder" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Ethan Wilder</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$424.00</span>
												</td>
												<td className="text-end" data-order="2023-02-04">
													<span className="fw-bold">04/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-10">
													<span className="fw-bold">10/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12957</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-9.jpg" alt="Francis Mitcham" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Francis Mitcham</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Delivering">
													<div className="badge badge-light-primary">Delivering</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$417.00</span>
												</td>
												<td className="text-end" data-order="2023-02-02">
													<span className="fw-bold">02/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-09">
													<span className="fw-bold">09/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12958</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-info text-info">A</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Robert Doe</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Expired">
													<div className="badge badge-light-danger">Expired</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$34.00</span>
												</td>
												<td className="text-end" data-order="2023-02-06">
													<span className="fw-bold">06/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-08">
													<span className="fw-bold">08/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12959</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-info text-info">A</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Robert Doe</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$423.00</span>
												</td>
												<td className="text-end" data-order="2023-02-05">
													<span className="fw-bold">05/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-07">
													<span className="fw-bold">07/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12960</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-23.jpg" alt="Dan Wilson" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Dan Wilson</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$387.00</span>
												</td>
												<td className="text-end" data-order="2023-02-02">
													<span className="fw-bold">02/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-06">
													<span className="fw-bold">06/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12961</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">M</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Melody Macy</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$281.00</span>
												</td>
												<td className="text-end" data-order="2023-02-02">
													<span className="fw-bold">02/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-05">
													<span className="fw-bold">05/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12962</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">O</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$21.00</span>
												</td>
												<td className="text-end" data-order="2023-02-03">
													<span className="fw-bold">03/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-04">
													<span className="fw-bold">04/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12963</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-9.jpg" alt="Francis Mitcham" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Francis Mitcham</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$224.00</span>
												</td>
												<td className="text-end" data-order="2023-02-01">
													<span className="fw-bold">01/02/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-03">
													<span className="fw-bold">03/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12964</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-danger text-danger">E</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Bold</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Completed">
													<div className="badge badge-light-success">Completed</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$498.00</span>
												</td>
												<td className="text-end" data-order="2023-01-28">
													<span className="fw-bold">28/01/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-02">
													<span className="fw-bold">02/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12965</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label">
																	<img src="assets/media/avatars/300-12.jpg" alt="Ana Crown" className="w-100" />
																</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Ana Crown</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Cancelled">
													<div className="badge badge-light-danger">Cancelled</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$255.00</span>
												</td>
												<td className="text-end" data-order="2023-01-31">
													<span className="fw-bold">31/01/2023</span>
												</td>
												<td className="text-end" data-order="2023-02-01">
													<span className="fw-bold">01/02/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
													
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
												<td data-kt-ecommerce-order-filter="order_id">
													<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">12966</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo3/dist/apps/user-management/users/view.html">
																<div className="symbol-label fs-3 bg-light-success text-success">L</div>
															</a>
														</div>
														<div className="ms-5">
															<a href="../../demo3/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Lucy Kunic</a>
														</div>
													</div>
												</td>
												<td className="text-end pe-0" data-order="Processing">
													<div className="badge badge-light-primary">Processing</div>
												</td>
												<td className="text-end pe-0">
													<span className="fw-bold">$454.00</span>
												</td>
												<td className="text-end" data-order="2023-01-26">
													<span className="fw-bold">26/01/2023</span>
												</td>
												<td className="text-end" data-order="2023-01-31">
													<span className="fw-bold">31/01/2023</span>
												</td>
												<td className="text-end">
													<a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
													<i className="ki-duotone ki-down fs-5 ms-1"></i></a>
													<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="../../demo3/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
														</div>
														
														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				

				</div>


              </div>
  )
}

export default AllRandevu