import {
  ArrowRightOnRectangleIcon,
  HomeIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  MegaphoneIcon,
  DocumentTextIcon,
  PaperClipIcon,
  PlusIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/solid";
import Chat from "pages/Chat/Chat";
import Archive from "pages/User/Archive/Archive";
import DProject from "pages/User/DProject/DProject";
import GProject from "pages/User/GProject/GProject";
import Home from "pages/User/Home/Home";
import Project from "pages/User/Project/Project";
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
  // {
  //   title: "پروفایل",
  //   route: basepath + 'profile',
  //   component: <Home />,
  //   icon: <AcademicCapIcon />,
  //   subMenuIcon: <div></div>,
  //   subMenu: [
  //     { menu: '' },
  //     { menu: '' },
  //     { menu: '' },
  //   ]
  // },
  {
    title: "راهنما انتخاب پروژه",
    route: basepath + 'gproject',
    component: <GProject />,
    icon: <AcademicCapIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
  {
    title: "دفترچه پروپوزال",
    route: basepath + 'dproject',
    component: <DProject />,
    icon: <DocumentTextIcon />,
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
    component: <Chat roll={'user'} />,
    icon: <ChatBubbleLeftRightIcon />,
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
    component: <Project />,
    icon: <PlusIcon />,
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
    component: <Archive />,
    icon: <PaperClipIcon />,
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
