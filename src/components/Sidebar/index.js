import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'
import { useTranslation } from 'react-i18next'
import "../Sidebar/sidebar.css"

 


const Sidebar = ({isOpen,toggle}) => {
  const [t, i18n] = useTranslation ("global")
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
    <CloseIcon />
        </Icon>
        <SidebarWrapper> 
            <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
          <span>{t("home")}</span> 
          </SidebarLink>   
          <SidebarLink to="/about" onClick={toggle}>
          <span>{t("about")}</span> 
          </SidebarLink>
         {/* <SidebarLink to="/rent" activesStyle onClick={toggle}>*/}
         {/* <span> {t("rent")} </span>*/}
           {/*<NavLink to="/rent" activesStyle>*/}
       <a id="wsp1" href = "https://wa.me/13054241474?text=Hello!%20i'm%20interested%20in%20the%20Salty%20Experience"> <span>{t("rent")}</span></a> 
         {/* </SidebarLink>*/}
          <SidebarLink  to="/Merch" activesStyle  onClick={toggle}>
          <span>  {t("merch")} </span>
          </SidebarLink>
          <SidebarLink to="/contact" activesStyle onClick={toggle}>
          <span> {t("contact")} </span>
          </SidebarLink>
         
    
            </SidebarMenu>
           
        </SidebarWrapper>
       
    </SidebarContainer>
  )
}

export default Sidebar