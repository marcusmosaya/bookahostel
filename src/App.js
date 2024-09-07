import React from 'react';
import Schools from './components/schools';
import Hostels from './components/hostels';
import Description from './components/description';
import Login from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgotpassword';
import ChangePassword from './components/changepassword';
import Dashboard from './components/dashboard';
import HostelRegister from './components/hostelregister';
import HostelUpdate from './components/hostelupdate';
import RoomRegister from './components/roomregister';
import RoomUpdate from './components/roomupdate';
import CaretakerRegister from './components/caretakerregister';
import CaretakerUpdate from './components/caretakerupdate';
import Room from './components/Room';
import CaretakerDashboard from './components/caretakerdashboard';
import Hostel from './components/hostel';
import Home from './Home';
import VerificationCode from './components/VerificationCode';
import BookedRoomReport from './components/BookedRoomReport';
import './App.css'
import './Bootstrap/css/bootstrap.css';
import SimpleFetchRequest from './fetch';
import {BrowserRouter,Route,Switch,Link,Routes} from 'react-router-dom';
import OfflineBook from './components/OfflineBook';
import OwnerProfile from './components/OwnerProfile';
import CaretakerProfile from './components/CaretakerProfile';
import Scan from './components/Scan';
import Delete from './components/Delete';


function App() {
  //To work on room,show a list of rooms and the people who booked them,phonenumber,datebooked,due date to leave
  return (
 <>
  <BrowserRouter>
   <Routes>
   <Route path="/schools" component={Schools} element={<Schools />} />
   <Route path="/hostels" component={Hostels} element={<Hostels />} />
   <Route path="/" component={Home} element={<Home />} />
   <Route path="/description" component={Description} element={<Description />} />
   <Route path="/auth/login" component={Login} element={<Login />} />
   <Route path="/auth/register" component={Register} element={<Register />} />
   <Route path="/auth/forgotpassword" component={ForgotPassword} element={<ForgotPassword />} />
   <Route path="/auth/changepassword" component={ChangePassword} element={<ChangePassword />} />
   <Route path="/dashboard" component={Dashboard} element={<Dashboard />} />
   <Route path="/hostel/register" component={HostelRegister} element={<HostelRegister />} />
   <Route path="/hostel/:hostelId/update" component={HostelUpdate} element={<HostelUpdate />} />
   <Route path="/room/:roomId" component={Room} element={<Room />} />
   <Route path="hostel/:hostelId/room/register" component={RoomRegister} element={<RoomRegister />} />
   <Route path="hostel/:hostelId/room/update" component={RoomUpdate} element={<RoomUpdate />} />
   <Route path="hostel/:hostelId/caretaker/register" component={CaretakerRegister} element={<CaretakerRegister />} />
   <Route path="hostel/:hostelId/caretaker/update" component={CaretakerUpdate} element={<CaretakerUpdate />} />
   <Route path="/caretaker/dashboard" component={CaretakerDashboard} element={<CaretakerDashboard />} />
   <Route path="/hostel/:hostelId" component={Hostel} element={<Hostel />} />
   <Route path="/fetch" component={SimpleFetchRequest} element={<SimpleFetchRequest />} />
   <Route path="/auth/verify" component={VerificationCode} element={<VerificationCode />} />
   <Route path="/room/:roomId/booked" component={BookedRoomReport} element={<BookedRoomReport />} />
   <Route path="/room/:roomId/offlinebook" component={OfflineBook} element={<OfflineBook />} />
   <Route path="/owner/profile" component={OwnerProfile} element={<OwnerProfile />} />
   <Route path="/caretaker/profile" component={CaretakerProfile} element={<CaretakerProfile />} />
   <Route path="/scan" component={Scan} element={<Scan />} />
   <Route path="/delete" component={Delete} element={<Delete />} />


   </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
