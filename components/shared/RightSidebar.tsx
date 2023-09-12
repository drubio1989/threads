import React from 'react'

function RightSidebar() {
  return (
    <section className='custon-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-mdedium text-light-1'>
          Suggested Communities
        </h3>
      </div>

      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-mdedium text-light-1'>
          Suggested Users
        </h3>
      </div>
    </section>
  )
}

export default RightSidebar;