import { useDispatch, useSelector } from 'react-redux';
import { HiX } from 'react-icons/hi'
import { BiSolidError } from 'react-icons/bi'
import { getValidationState, validationClean, validationValidate } from '../Redux/Slice/ValidationSlice'

const Alert = () => {
    const { isValidationShow, message, description } = useSelector(getValidationState);
    const dispatch = useDispatch();
    return (
        <>
            {isValidationShow &&
                <div className='fixed z-50 top-0 left-0 right-0 bottom-0 backdrop-blur-[2px] flex items-end sm:items-center justify-center ' onClick={(e) => {
                    e.preventDefault();
                    dispatch(validationClean());
                }}>
                    <div className=' bg-white border-gray-200  max-sm:w-full sm:max-w-120  border shadow-2xl rounded' onClick={(e) => e.stopPropagation()}>
                        <div className='flex items-center max-sm:flex-col max-sm:text-center  relative gap-3 border-b-2 border-b-ring border-t-black border-t-5 p-4'>
                            <div className='text-red-500 text-6xl flex items-center justify-center w-max'>
                                <BiSolidError />
                            </div>
                            <div className=''>
                                <div className='text-black font-bold'>
                                    <h3>{message}</h3>
                                </div>
                                <div className='text-sm text-black/80'>
                                    <p>{description}</p>
                                </div>
                            </div>

                            {/* Boutton annuler */}
                            <span className="absolute right-1 text-lg top-1 text-md  p-[2px] cursor-pointer rounded hover:bg-interactive/40 transition-all"
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(validationClean());
                                }}>
                                <HiX />
                            </span>
                            {/* Boutton annuler */}

                        </div>
                        <div className='flex justify-end gap-3 px-4 py-2 max-sm:justify-center'>
                            <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-500/90 text-white rounded-lg hover:shadow-lg transition-all" onClick={(e) => {
                                e?.preventDefault();
                                dispatch(validationValidate());
                            }}>
                                Continuer
                            </button>
                            <button className="px-4 py-2 bg-gradient-to-r from-gray-300 to-gray-300 text-black rounded-lg hover:shadow-lg transition-all"
                                onClick={(e) => {
                                    e?.preventDefault();
                                    dispatch(validationClean());
                                }}>
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Alert