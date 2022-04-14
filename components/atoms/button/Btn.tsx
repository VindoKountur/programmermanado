interface Props {
    title: string,
    clickHandler: () => void
}

const Btn = ({ title, clickHandler }: Props) => {
    return (
        <button onClick={clickHandler} className='bg-blue-400 px-3 py-1 text-white flex hover:bg-blue-600  shadow-sm ease-in-out duration-300 active:bg-blue-800'>
            {title}
        </button>
    )
}

export default Btn