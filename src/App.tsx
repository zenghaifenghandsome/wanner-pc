import { useNavigate, useRoutes } from 'react-router-dom';
import {Layout} from "@arco-design/web-react";
import ZMenu from './components/menu/zmenu';
import { Suspense, useState } from 'react';
import router from './router/router';
import ZHeader from './components/header/ZHeader';
import "./theme/theme.less"

const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

function App() {
  const [theme,setTheme] = useState<string>("dark");
  const routers = useRoutes(router);
  
  return (
   
      <div className={theme}>
        <Layout style={{height:'100%'}}>
          <Header style={{height:40}}>
            <ZHeader />
          </Header>
          <Layout>
            <Sider style={{height:'100%',width:50}} theme={theme=="dark"?"dark":"light"}><ZMenu theme={theme}/></Sider>
            <Content style={{height:'100%'}}>
              <Suspense fallback={''}>{routers}</Suspense>
            </Content>
          </Layout>
        </Layout>
      </div>
  )
}

export default App
 
