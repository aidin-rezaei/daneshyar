import {
  ArrowRightOnRectangleIcon,
  HomeIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  MegaphoneIcon
} from "@heroicons/react/24/solid";
import { lazy } from "react";
const Login = lazy(() => import('pages/Login/Login'))
const Home = lazy(() => import('pages/Admin/Home/Home'))
const Users = lazy(() => import('pages/Admin/Users/Users'))
const Projects = lazy(() => import('pages/Admin/Projects/Projects'))
const Board = lazy(() => import('pages/Admin/Board/Board'))

export const adminMenu = [
  {
    title: "خانه",
    route: '/admin/home',
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
    title: "دانشجویان",
    route: '/admin/users',
    component: <Users />,
    icon: <AcademicCapIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
  {
    title: "مدیریت پروژه ها",
    route: '/admin/projects',
    component: <Projects />,
    icon: <PresentationChartLineIcon />,
    subMenuIcon: <div></div>,
    subMenu: [
      { menu: '' },
      { menu: '' },
      { menu: '' },
    ]
  },
  {
    title: "ارسال اعلان",
    route: '/admin/board',
    component: <Board />,
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
