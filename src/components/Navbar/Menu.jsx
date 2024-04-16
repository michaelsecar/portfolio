import { CloseIcon } from '../../icons/Close'
import { MenuItem } from './MenuItem'
import { SpainIcon, UnitedStatesIcon } from '../../icons/Language'
import { Sun } from '../../icons/Sun'
import { Moon } from '../../icons/Moon'

export const Menu = ({menuCallback, theme, themeCallback}) => {

    return (
        <div className="fixed min-w-[300px] h-screen
            left-0 z-40
            bg-gray-50 dark:bg-black border-gray-600
            flex items-center border-r-2
            p-5
        ">
            <div className='w-full'>
                <div>
                    <button className="absolute right-3 top-3" onClick={()=>menuCallback()}>
                        <CloseIcon/>
                    </button>
                </div>
                <div className="flex flex-col gap-5">
                    <MenuItem item="Tema" Icon={theme==='light'?Sun:Moon} callback={themeCallback}/>
                    <MenuItem item="Idioma" Icon={UnitedStatesIcon}/>
                    <MenuItem item="Idioma" Icon={SpainIcon}/>
                </div>
            </div>
        </div>
    )
}