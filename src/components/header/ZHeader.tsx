import { Button, Avatar, Dropdown, Menu ,Notification} from "@arco-design/web-react";
import { appWindow } from '@tauri-apps/api/window';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../tools/localstore";
import { updata } from "../../tools/redux/reducer/userReducer";
const ZHeader = () => {
    
    const quitApp = () =>{
        appWindow.close()
    }
    const maxWind = ()=>{
       appWindow.toggleMaximize()
    }
    const minWind = () =>{
        appWindow.minimize()
    }
    const userinfo = useSelector((state:any)=> state.user.value)
    const dispatch = useDispatch()
    const route = useNavigate()
    const loginOut = () =>{
        removeUser()
        dispatch(updata())
    }
    const toUserCenter = () =>{
        if(userinfo===null || userinfo===undefined){
        route("/login")
        }else{
        route("/userCenter")
        }
        
    }

    const droplist = (
        <Menu>
          <Menu.Item key="userCenter" onClick={toUserCenter}>个人中心</Menu.Item>
          <Menu.Item key="loginOut" onClick={loginOut}>退出</Menu.Item>
        </Menu>
      )
      const goLogin = (id:string) =>{
        Notification.remove(id);
        route('/login')
      }
      const userHandle = () =>{
        if(userinfo===undefined){
          const id:string = `${Date.now()}`
          Notification.info({
            id,
            content:'没有登录哦，小子！',
            duration:0,
            btn:(
              <span>
                <Button
                  type='secondary'
                  size='small'
                  style={{ margin: '0 12px' }}
                  onClick={()=> Notification.remove(id)}
                >
                  不登录
                </Button>
                <Button type='primary' size='small' onClick={()=> goLogin(id)}>
                  去登录
                </Button>
              </span>
            )
          })
        }
      }
    return(
        <>
            <div className="zmain-header" data-tauri-drag-region>
                <div className="main-header" data-tauri-drag-region> 
                    <div className="main-header-buttonGroup" data-tauri-drag-region>
                        <Button status="danger" shape="circle" type="primary" onClick={quitApp} style={{marginLeft:5,marginTop:5}}>x</Button>
                        <Button status="warning" shape="circle" type="primary" onClick={minWind} style={{marginLeft:5,marginTop:5}}>-</Button>
                        <Button status="success" shape="circle" type="primary" onClick={maxWind} style={{marginLeft:5,marginTop:5}}>+</Button>
                    </div>
                    <div>
                        <Dropdown droplist={droplist}> 
                        {userinfo===undefined?<Avatar size={50} onClick={userHandle}>user</Avatar>:<Avatar size={50} onClick={userHandle}><img style={{width:50}} src={userinfo.avator} alt="avator" /></Avatar>}
                        </Dropdown>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ZHeader;