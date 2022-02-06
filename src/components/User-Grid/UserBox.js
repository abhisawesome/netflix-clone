import { PlusCircleIcon } from '@heroicons/react/solid'
const Box = ({ name, addNewProfile = false }) => {
    if (!addNewProfile) {
        return (
            <div className='text-center text-slate-400 hover:text-white '>
                <div className=" pt-2 h-36 w-36 text-center text-slate-400  cursor-pointer">
                    <img src="images/user-icon.jpg" className="h-full hover:border hover:border-white rounded" />

                </div>
                <p className="pt-4 ">{name}</p>
            </div>
        )
    }
    return (
        <div className='text-center  text-slate-400 hover:text-white'>
            <div className=" flex items-center justify-center pt-2 h-36 w-36 text-center hover:text-white text-slate-400  cursor-pointer ">
                <PlusCircleIcon className='h-24' />
            </div>
            <p className="pt-4 ">{name}</p>
        </div>
    )
}

export default Box