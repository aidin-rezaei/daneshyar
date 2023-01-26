import {
  ArrowRightOnRectangleIcon,
  HomeIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  MegaphoneIcon
} from "@heroicons/react/24/solid";
import Home from "pages/User/Home/Home";
// import Board from "pages/Admin/Board/Board";
// import Home from "pages/Admin/Home/Home";
// import Projects from "pages/Admin/Projects/Projects";
// import Users from "pages/Admin/Users/Users";
// import Login from "pages/Login/Login";
import { lazy } from "react";
const Login = lazy(() => import('pages/Login/Login'))

const basepath = "/user/"
export const userMenu = [
  {
    title: "خانه",
    route: basepath + 'home',
    component: <Home />,
    icon: <HomeIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
  {
    title: "پروقایل",
    route: basepath + 'profile',
    component: <Home />,
    icon: <AcademicCapIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
  {
    title: "راهنما انتخاب پروژه",
    route: basepath + 'gproject',
    component: <Home />,
    icon: <PresentationChartLineIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
  {
    title: "دانلود فایل های پروپوزال",
    route: basepath + 'dproject',
    component: <Home />,
    icon: <MegaphoneIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
  {
    title: "چت با استاد",
    route: basepath + 'chat',
    component: <Home />,
    icon: <MegaphoneIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
  {
    title: "انتخاب پروژه",
    route: basepath + 'project',
    component: <Home />,
    icon: <MegaphoneIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
  {
    title: "ارشیو نمونه پروپوزال",
    route: basepath + 'archive',
    component: <Home />,
    icon: <MegaphoneIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
  {
    title: "خروج",
    route: '/',
    component: <Login />,
    icon: <ArrowRightOnRectangleIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
];
