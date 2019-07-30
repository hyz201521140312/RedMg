import Home from './views/pages/Home/Home';
import About from './views/pages/About/About';
import News from './views/pages/News/News';
import ULogin from './views/user/ULogin/ULogin';
import URegister from './views/user/URegister/URegister';
import ALogin from './views/admin/ALogin/ALogin'

const routers = [
      {
          path:"/",
          component:Home,
          exact: true
      }, 
      {
        path:"/about",
        component:About
    }, 
      {
        path:"/news",
        component:News
    },   
  {
    path:"/ulogin",
    component:ULogin
}, 
{
  path:"/uregister",
  component:URegister
},
{
  path:"/alogin",
  component:ALogin
}

]




export default routers;