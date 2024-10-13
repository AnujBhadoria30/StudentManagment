/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Component/Main';
import Home from './Component/Home';
import Admin from './Component/Admin';
import Teacher from './Component/Teacher';
import Student from './Component/Student';
import Login from './Component/Login';
import { UserProvider } from "./Component/Contex";
import Main2 from './Component/Main2';
import AdminHome from './Component/AdminHome';
import Teachers from './Component/Teachers';
import Notices from './Component/Notices';
import Students from './Component/Students';
import S from './Component/S';
import N from './Component/N';
import All from './Component/All';
// import Sdetails from './Component/Sdetails';
//done//
//sec//
import Shownotices from './Component/Shownotics';

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path='all' element={<All />} />
                        {/* <Route path="sdetail" element={<Sdetails />} /> */}
                        <Route path="shownotics" element={<Shownotices />} />
                        <Route path="admin" element={<Admin />} />
                        <Route path="login" element={<Login />} />
                        <Route path="main2" element={<Main2 />}>
                            <Route path="adminhome" element={<AdminHome />} />
                            <Route path="teachers" element={<Teachers />} />
                            <Route path="students" element={<Students />} />
                            <Route path="notices" element={<Notices />} />
                        </Route>
                        <Route path="teacher" element={<Teacher />} >
                            <Route path='s' element={<S />} />

                            <Route path='n' element={<N />} />
                        </Route>
                        <Route path="student" element={<Student />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
