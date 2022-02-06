import Box from "./UserBox";

const UserGrid = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-12">
            <div>
                <p className="text-white text-5xl">Who's watching ?</p>
            </div>
            <div className="grid grid-cols-4 gap-7">
                <Box name="Family"/>
                <Box name="children"/>
                <Box name="new" />
                <Box name="Add Profile" addNewProfile /> 
            </div>
            <div className="text-slate-400 border border-slate-400 px-4 py-2 text-lg hover:text-white hover:border-white cursor-pointer">
                <p>Manage Profiles</p>
            </div>
        </div>
    )
}

export default UserGrid