import React from 'react';
import { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Dialog from '@mui/material/Dialog';
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props,ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {

  const [isOpenModal, setisOpenModal] = useState(false);

  return (
    <>
    <Button className="countryDrop " onClick={()=>setisOpenModal(true)}>
      <div className="info d-flex flex-column">
        <span className="label">Your Location</span>
        <span className="name">India</span>
      </div>
      <span className="ml-auto">
        <FaAngleDown />
      </span>
    </Button>
    <Dialog  open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationModal 'TransitionComponent={Transition}>
        <h4 className='mb-0'>Chose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p> 
        <Button className='close_'onClick={()=>setisOpenModal(false)}><MdClose /></Button>
    <div className="headerSearch w-100">
      <input type="text" placeholder="Search your area..." />
      <Button>
        <IoIosSearch />
      </Button>
    </div>
       <ul className='countryList mt-3'>
         <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
         <li><Button onClick={()=>setisOpenModal(false)}>Sri Lanka</Button></li>
         <li><Button onClick={()=>setisOpenModal(false)}>USA</Button></li>
         <li><Button onClick={()=>setisOpenModal(false)}>Pakistan</Button></li>
         <li><Button onClick={()=>setisOpenModal(false)}>UK</Button></li>
         <li><Button onClick={()=>setisOpenModal(false)}>England</Button></li>
         <li><Button onClick={()=>setisOpenModal(false)}>Australia</Button></li>
         <li><Button onClick={()=>setisOpenModal(false)}>Japan</Button></li>
         <li><Button onClick={()=>setisOpenModal(false)}>Nepal</Button></li>   
         <li><Button onClick={()=>setisOpenModal(false)}>New Zesland</Button></li>
        <li><Button  onClick={()=>setisOpenModal(false)}>China</Button></li>
        <li><Button  onClick={()=>setisOpenModal(false)}>Brazil</Button></li>
       </ul>
    </Dialog>
    </>
  );
};

export default CountryDropdown;
