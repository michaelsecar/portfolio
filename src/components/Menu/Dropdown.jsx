import { useContext } from 'react'

import { MenuItem } from './MenuItem'
import { useToggle } from '../../hooks/useToggle'
import { SpainIcon, UnitedStatesIcon} from '../../icons/Icons'

import { LanguageContext } from '../../providers/LanguageProvider'
import { DropdownItem } from './DropdownItem'

export const LanguageDropDown =  () => {
    const [open, toggle] = useToggle()
    const { language, setLanguage } = useContext(LanguageContext)
    
    return (
        <div className="relative">
            <MenuItem item={language==='en'?"English":"Español"} Icon={language==='es'?SpainIcon:UnitedStatesIcon}
            callback={toggle}/>
            {
                open &&
                <div className='p-2 border-2 absolute w-full flex flex-col gap-3 rounded-md mt-1
                 border-gray-400
                '>
                    <DropdownItem item="Español" Icon={SpainIcon} callback={()=>setLanguage("es")}/>
                    <DropdownItem item="English" Icon={UnitedStatesIcon} callback={()=>setLanguage("en")}/>
                </div>
            }
       </div>
    )
}