import React from 'react'

export default function Footer() {
  return (
        <div className='flex lg:flex-row bg-slate-50 justify-center '>
            <div className='flex flex-col md:flex-row md:space-x-20 lg:space-x-36 p-10 '>
                <div>
                    <div className='text-xl font-semibold pb-3'>
                        <p>Shop</p>
                    </div>
                    <div className='text-[16px] opacity-75 space-y-1 '>
                        <p>Mens</p>
                        <p>Womens</p>
                        <p>Kids</p>
                        <p>Classics</p>
                        <p>Promotions</p>
                    </div>
                </div>
                <div>
                    <div className='text-xl font-semibold pb-3'>
                        <p>Support</p>
                    </div>
                    <div className='text-[16px] opacity-75 space-y-1 '>
                        <p>FAQ</p>
                        <p>Returns</p>
                        <p>Accessibility</p>
                        <p>Help</p>
                    </div>
                </div>
                <div>
                    <div className='text-xl font-semibold pb-3'>
                        <p>Company</p>
                    </div>
                    <div className='text-[16px] opacity-75 space-y-1 '>
                        <p>Terms of use</p>
                        <p>Privacy</p>
                        <p>Careers</p>
                        <p>About</p>
                    </div>
                </div>
                <div className='space-y-1'>
                      <div className='text-xl font-semibold pb-1'>
                        <p>Contacts</p>
                    </div>
                    <div className='text-sm pb-1'>
                        <p>Address</p>
                    </div>
                    <div className='text-[16px] opacity-75 space-y-1 '>
                        <p>1588 South Coast CA 251864</p>
                    </div>
                    <div className='text-sm pb-1'>
                        <p>Hours</p>
                    </div>
                    <div className='text-[16px] opacity-75 space-y-1 '>
                        <p>(Mon - Fri) 6am - 4pm PST (Sat - Sun) 6:30am - 3pm PST</p>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}
