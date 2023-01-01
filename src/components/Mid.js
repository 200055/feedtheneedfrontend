import {Routes,Route} from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Dashboard from '../pages/Dashboard';
import Layout from '../components/shared/Layout';
import AddStaff from '../pages/AddStaff';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import CreateBlog from '../pages/CreateBlog';
import UpdateBlog from '../pages/UpdateBlog';
import Map from '../pages/Maps';
import ViewStaff from '../pages/ViewStaff';
import ChangePassword from '../pages/ChangePassword';
import Parnter from '../pages/Partner';
import AddPartner from '../pages/AddPartner';
import UpdatePartner from '../pages/UpdatePartner';
import LoginAsStaff from './LoginAsStaff';
import User from '../pages/User';
import ViewUserTransaction from '../pages/ViewUserTransaction';
import RefundRequest from '../pages/RefundRequest';

const Mid=()=>{
    return(
        <>
            <Routes>
                <Route path='/' element = {<Login/>} />
                <Route path='/staff' element = {<LoginAsStaff/>} />
                
                <Route path="/dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />

                    {/* STAFF */}
                    <Route path="/dashboard/addstaff" element={<AddStaff />} />
                    <Route path="/dashboard/viewstaff" element={<ViewStaff />} />

                    {/* USER */}
                    <Route path="/dashboard/viewuser" element={<User />} />
                    <Route path="/dashboard/viewuser/user_transaction/:user_id" element={<ViewUserTransaction />} />

                    {/* BLOG */}
                    <Route path="/dashboard/blog" element={<Blog />} />
                    <Route path="/dashboard/blog/create" element={<CreateBlog />} />
                    <Route path="/dashboard/blog/update/:blog_id" element={<UpdateBlog />} />

                    {/* Partner */}
                    <Route path="/dashboard/partner" element={<Parnter />} />
                    <Route path="/dashboard/partner/create" element={<AddPartner />} />
                    <Route path="/dashboard/partner/update/:partner_id" element={<UpdatePartner />} />

                    {/* Help and Support */}
                    <Route path="/dashboard/refund_requests" element={<RefundRequest />} />
                    <Route path="/dashboard/contact" element={<Contact />} />
                    <Route path="/dashboard/map" element={<Map />} />

                    {/* Settings */}
                    <Route path="/dashboard/changepassword" element={<ChangePassword />} />

                </Route>
            </Routes>
        </>
    )
}
export default Mid;
