import { createBrowserRouter, Outlet } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import CampusLife from './pages/CampusLife'
import Gallery from './pages/Gallery'
import ParentPortal from './pages/ParentPortal'

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
      <div className="text-6xl">⛵</div>
      <h1 className="font-display text-3xl" style={{ color: '#3d2059' }}>Page Not Found</h1>
      <p className="font-body text-base" style={{ color: '#6a527d' }}>The page you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/" className="font-heading font-bold px-6 py-3 rounded-full" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>← Go Home</a>
    </div>
  )
}

function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'admissions', Component: Admissions },
      { path: 'campus-life', Component: CampusLife },
      { path: 'gallery', Component: Gallery },
      { path: 'parent-portal', Component: ParentPortal },
      { path: '*', Component: NotFound },
    ],
  },
])
