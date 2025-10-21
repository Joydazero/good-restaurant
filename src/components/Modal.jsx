import React from 'react'

export default function Modal({onConfirm, onCancel}) {
  return (
    <>    
    <div className='shadow-[5px_5px_10px_rgba(0,0,0,0.2)] rounded-[10px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-56 bg-white z-50'>
        <div className='flex flex-col items-ceter justify-center w-full h-full'>
            <p className='text-center text-lg font-medium'>✅ 해당 맛집을 정말 삭제하시겠습니까?</p>
            <div className='flex flex-row items-center justify-center mt-5'>
                <button className='rounded-5 w-[5rem] h-[2.5rem] rounded-[.5rem] text-white border-1 bg-[rgba(0,0,0,1)] hover:bg-[rgba(0,0,0,0.4)] transition duration-.4 ease-in-out text-sm' onClick={onConfirm}>확인</button>
                <button className='rounded-5 bg-white hover:bg-[rgba(100,100,100,.2)] transition duration-.4 ease-in-out border-1 border-black w-[5rem] h-[2.5rem] rounded-[.5rem] text-black text-sm ml-4' onClick={onCancel}>취소</button>
            </div>
        </div>
    </div>
    </>
  )
}
