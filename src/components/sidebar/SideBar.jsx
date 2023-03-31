import React from 'react'
import { FiUser } from 'react-icons/fi'
// import { MdGroups2 } from 'react-icons/m2'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { BsCreditCard } from 'react-icons/bs'
import { AiFillProfile } from 'react-icons/ai'
import { AiOutlineException } from 'react-icons/ai'
import { BsQuestionSquare } from 'react-icons/bs'


const SideBar = () => {

  const links = document.querySelectorAll('.link')

  function activeLinks(){
    links.forEach(link => {
      link.addEventListener('click', function(){
        links.forEach(li => li.classList.remove('active'))
        this.classList.add('active')
      })
    })
  }

  setTimeout(() => {
    activeLinks()
  }, 1000);

  return (
    <nav className=' side-bar fixed left-0 top-0 w-[300px] h-screen pl-5 pr-5 overflow-scroll bg-[#242424] overflow-x-hidden ' >

      <div className=' h-[80px] flex place-items-center '>
        <span className=' font-semibold text-xl '  ># Holi Company  </span>
      </div>
      
      <ul className=' flex flex-col ' >
        <li className=' link active flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Profile</span>
        </li>
        <li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Group</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <AiOutlineAreaChart />
          <span>Notes</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FaFileInvoiceDollar />
          <span>Statement</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <BsCreditCard />
          <span>Invoices</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <AiFillProfile />
          <span>Payments</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <AiOutlineException />
          <span>Proposals</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <BsQuestionSquare />
          <span>Credit Notes</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Estiments</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Subscriptions</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Expenses</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Contracts</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Projects</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Tasks</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Tickets</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Files</span>
        </li><li className=' link flex items-center gap-3 h-[55px] cursor-pointer border-b border-neutral-500 ' >
          <FiUser />
          <span>Vault</span>
        </li>
      </ul>

    </nav>
  )
}

export default SideBar
