import Home from './views/pages/Home/Home';
import About from './views/pages/About/About';
import News from './views/pages/News/News';
import ULogin from './views/user/ULogin/ULogin';
import URegister from './views/user/URegister/URegister';
import ALogin from './views/admin/ALogin/ALogin';
import Detail from './views/pages/Detail/Detail';
import InfoDetail from './views/pages/InfoDetail/InfoDetail';
import Acenter from './views/admin/Acenter/Acenter';
import Acontent from './views/admin/Acontent/Acontent';
import ACheckWorks from './components/Hyz/admin/CheckWorks/ACheckWorks';
import Delworks from './components/Hyz/admin/DelWorks/DelWorks'
import ManagingUsers from './components/Hyz/admin/ManagingUsers/ManagingUsers'


const routers = [{
  path: "/",
  component: Home,
  exact: true,
},
{
  path: "/about",
  component: About
},
{
  path: "/news",
  component: News
},
{
  path: "/ulogin",
  component: ULogin
},
{
  path: "/uregister",
  component: URegister
},
{
  path: "/alogin",
  component: ALogin
},
{
  path: "/acenter",
  component: Acenter,
  children: [{
    path: "/acenter",
    component: Acontent,
    exact: true
  }, {
    path: "/acenter/checkworks",
    component: ACheckWorks
  },
  {
    path: "/acenter/delworks",
    component: Delworks
  },
  {
    path: "/acenter/managingusers",
    component: ManagingUsers
  }
  ]
},

{
  path: "/detail",
  component: Detail
},
{
  path: "/info",
  component: InfoDetail
},


]


export default routers;