import {
    UsersIcon,
    ArrowRightOnRectangleIcon,
    HomeIcon,
    AcademicCapIcon,
    PresentationChartLineIcon,
    MegaphoneIcon
  } from "@heroicons/react/24/solid";
  
  export const adminMenu = [
    {
      title: "خانه",
      route:'/',
      icon: <HomeIcon />,
      subMenuIcon: <div></div>,
      subMenu : [
        {menu : ''},
        {menu : ''},
        {menu : ''},
      ]
    },
    {
      title: "دانشجویان",
      route:'/admin',
      icon: <AcademicCapIcon/>,
      subMenuIcon: <div></div>,
      subMenu : [
        {menu : ''},
        {menu : ''},
        {menu : ''},
      ]
    },
    {
      title: "مدیریت پروژه ها",
      route:'/admin',
      icon: <PresentationChartLineIcon />,
      subMenuIcon: <div></div>,
      subMenu : [
        {menu : ''},
        {menu : ''},
        {menu : ''},
      ]
    },
    {
      title: "ارسال اعلان",
      route:'/admin',
      icon: <MegaphoneIcon/>,
      subMenuIcon: <div></div>,
      subMenu : [
        {menu : ''},
        {menu : ''},
        {menu : ''},
      ]
    },
    {
      title: "خروج",
      route:'/',
      icon: <ArrowRightOnRectangleIcon />,
      subMenuIcon: <div></div>,
      subMenu : [
        {menu : ''},
        {menu : ''},
        {menu : ''},
      ]
    },
  ];
  