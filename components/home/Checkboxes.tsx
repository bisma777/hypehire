
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

function Checkboxes() {
    return (
        <div className='lg:hidden block'>
        <div className='flex gap-8'>
            <div>
                <div className='flex gap-3  items-center'>
                    <Checkbox /><p className='text-white' >한국어 능력</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <Checkbox /><p className='text-white'>한국어 능력</p>
                </div>
            </div>
            <div>
                <div className='flex gap-3 items-center'>
                    <Checkbox /><p className='text-white'>한국어 능력</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <Checkbox /><p className='text-white'>한국어 능력</p>
                </div>
            </div>
        </div>
        <p className='text-[#FBFF23] underline mt-4 font-bold'>개발자가 필요하신가요?</p>
        </div>
    )
}

export default Checkboxes