import { useState } from 'react'
import { MenuItem } from './MenuItem'
import { SpainIcon, UnitedStatesIcon} from '../../icons/Language'

export const LanguageDropDown =  ({currentLanguage, onChange=undefined}) => {
    const [open, setOpen] = useState(false)

    const handleSelect = (item) => {
        setOpen(false)
        onChange(item)
    }
    
    return (
        <div className="relative">
            <MenuItem item={currentLanguage==='en'?"English":"Español"} Icon={currentLanguage==='es'?SpainIcon:UnitedStatesIcon} callback={()=>setOpen(!open)}/>
            {
                open &&
                <div className='p-2 border-2 absolute w-full flex flex-col gap-3 rounded-md mt-1
                 border-gray-400
                '>
                    <MenuItem item="Español" Icon={SpainIcon} callback={()=>handleSelect("es")}/>
                    <MenuItem item="English" Icon={UnitedStatesIcon} callback={()=>handleSelect("en")}/>
                </div>
            }
       </div>
    )
}