const menuIcon=document.querySelector(".menu-btn"),menu=document.querySelector(".nav-menu"),body=document.querySelector("html");menuIcon.addEventListener("click",(()=>{menu.classList.toggle("active"),body.classList.toggle("disable-scroll")}));const menuBtn=document.querySelector(".menu-btn");let menuOpen=!1;menuBtn.addEventListener("click",(()=>{menuOpen?(menuBtn.classList.remove("open"),menuOpen=!1):(menuBtn.classList.add("open"),menuOpen=!0)}));