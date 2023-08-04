import {Menu} from '@arco-design/web-react'
import {IconAlipayCircle, IconApps, IconBook, IconBranch, IconCode, IconHome, IconMusic, IconSelectAll} from '@arco-design/web-react/icon'
import { useEffect, useState } from 'react'
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';
import router from '../../router/router';
const ZMenu:React.FC<zmenuProps> = (props:zmenuProps) =>{
    const {theme} = props;
    const [isInit,setIsInit] = useState<boolean>(false);
    const [selectKey,setSelectKey] = useState<string[]>([]);
    const location = useLocation();
    const nav = useNavigate();
    const menuClick = (key:string) => {
        nav(key);
    }
    useEffect(() => {
        const routes = matchRoutes(router,location.pathname);
        let pathArr:string[] = [];
        if(routes !== null) {
            for(let route of routes) {
                let path = route.route.path
                if(path) {
                    pathArr.push(path)
                }
            }
        }
        setSelectKey(pathArr);
        setIsInit(true);
    } ,[location.pathname])
    if(!isInit){
        return null
    }
    return (
        <>
            <div className='zmenu'>
                <Menu 
                theme={theme=="dark"?"dark":"light"}
                selectedKeys={selectKey}
                onClickMenuItem={menuClick}
                style={{ width: 200, height: '100%' }}
                collapse
                >
                    <Menu.Item className="menuButton" key='/'>
                        <IconHome />home
                    </Menu.Item>
                    <Menu.Item className="menuButton" key='/bc'>
                        <IconCode />bc
                    </Menu.Item>
                    <Menu.Item className="menuButton" key='/music'>
                        <IconMusic />music
                    </Menu.Item>
                    <Menu.Item className="menuButton" key='/blog'>
                        <IconBook />blog
                    </Menu.Item>
                    <Menu.Item className="menuButton" key='/money'>
                        <IconAlipayCircle />记账
                    </Menu.Item>
                    <Menu.Item className="menuButton" key='/todo'>
                        <IconSelectAll />待办
                    </Menu.Item>
                    <Menu.Item className="menuButton" key='/admin'>
                        <IconApps />后台管理
                    </Menu.Item>
                    <Menu.Item className="menuButton" key='/evd'>
                        <IconBranch />每天
                    </Menu.Item>
                    
                </Menu>
            </div>
        </>
    )
}
export default ZMenu;