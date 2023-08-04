import { Button } from "@arco-design/web-react";
import { appWindow } from '@tauri-apps/api/window';
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
    return(
        <>
            <div className="main-header" data-tauri-drag-region>
                <div className="main-header" data-tauri-drag-region> 
                    <div className="main-header-buttonGroup" data-tauri-drag-region>
                        <Button status="danger" shape="circle" type="primary" onClick={quitApp} style={{marginLeft:5,marginTop:5}}>x</Button>
                        <Button status="warning" shape="circle" type="primary" onClick={minWind} style={{marginLeft:5,marginTop:5}}>-</Button>
                        <Button status="success" shape="circle" type="primary" onClick={maxWind} style={{marginLeft:5,marginTop:5}}>+</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ZHeader;