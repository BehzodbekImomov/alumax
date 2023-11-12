"use client";
import React, { useState } from "react";
import "../styles/Header.scss";
import Link from "next/link";
import { Button, Modal } from "antd";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-8">
      <div className="container mx-auto  ">
        <div className=" navbar flex justify-between items-center  ">
           
        <div className="alumax_logo w-40">
          <img src="/logo.png" alt="logo" />
        </div>
        <ul className="navbar_lists flex gap-14">
          <li>
            <Link href="#" className="navbar_list text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="#product" className="navbar_list text-lg">
              Products
            </Link>
          </li>
          <li>
            <Link href="#about" className="navbar_list text-lg">
              About
            </Link>
          </li>
          <li>
            <Link href="#advantags" className="navbar_list text-lg">
              Advantags
            </Link>
          </li>
          <li>
            <Link href="#contact" className="navbar_list text-lg">
              Contacts
            </Link>
          </li>
        </ul> 

        <Button className="menu" type="link" onClick={() => setOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path
              d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
              fill="rgba(255,255,255,0.72)"
            ></path>
          </svg>
        </Button>
        <Modal
          title=""
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
          okButtonProps={{
            disabled: true,
          }}
          cancelButtonProps={{
            disabled: true,
          }}
        >
          <Link
            href="#home"
            className="block  text-slate-100 font-semibold mt-5 ml-5 text-lg  hover:opacity-80  hover:text-slate-100   "
          >
            {" "}
            Home
          </Link>
          <Link
            href="#product"
            className="block  text-slate-100 font-semibold mt-5 ml-5 text-lg  hover:opacity-80 hover:text-slate-100   "
          >
            {" "}
            Products
          </Link>
          <Link
            href="#about"
            className="block  text-slate-100 font-semibold mt-5 ml-5 text-lg  hover:opacity-80 hover:text-slate-100   "
          >
            {" "}
            About
          </Link>
          <Link
            href="#advantags"
            className="block  text-slate-100 font-semibold mt-5 ml-5 text-lg  hover:opacity-80 hover:text-slate-100   "
          >
            {" "}
            Advantags
          </Link>
          <Link
            href="#contact"
            className="block  text-slate-100 font-semibold mt-5 ml-5 text-lg  hover:opacity-80 hover:text-slate-100   "
          >
            {" "}
            Contacts
          </Link>
        </Modal>
        </div> 
      </div>
    </header>
  );
};

export default Header;
