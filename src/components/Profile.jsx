// import avatar from '../../quill-pen.jpg'
import avatar from '../quill-pen.jpg'

const Profile = () => {

    const updateImg = () => {

        const input = document.querySelector('.file')

        input.addEventListener('change', function(){
            const choosedImg = this.files[0]
            const img = document.getElementById('image-place')
    
            if (choosedImg) {
                const reader = new FileReader();
    
                reader.addEventListener('load', function(){
                    // img.setAttribute('src', reader.result)
                    img.setAttribute('src', reader.result)
                })
    
                reader.readAsDataURL(choosedImg)
            }
        })
    }

  return (
    <section className=' profile-section w-full h-full overflow-y-scroll overflow-x-hidden '>

      <div className=' px-[30px] py-[2px]'>
        <div className=' relative logo-place w-[100px] h-[100px] rounded-lg flex justify-center items-center '>
             <img src={avatar} id='image-place' className=' bg-gray-800 w-full h-full rounded-[8px]' alt='profile-img' />
             <label htmlFor='upload-img' id='upload-label' className=' absolute bottom-[5px] right-[-120px] rounded-lg w-fit text-sm bg-black text-amber-400 p-2 cursor-pointer ' >Upload Image</label>
             <input id='upload-img' className=' file hidden' type={'file'} accept=" image/png, image/jpg, image/jpeg" onClick={updateImg}  />
        </div>
      </div>


      <div className=' w-full flex sm:flex-col lg:flex-row' >

        <div className=' left-profile-detail sm:w-full sm:h-fit px-[30px] flex flex-col gap-5 pt-[30px] '>
            <div className=' relative flex flex-col w-full '>
                 <label className=' font-semibold pl-2 text-amber-400 ' >Company Name</label>
                 <input className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none pl-2 ' />
            </div>
      
            <div className=' relative flex flex-col gap-1 '>
                <label className=' font-semibold pl-2 text-amber-400 ' >VAT Number</label>
                <input className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none pl-2 ' />
            </div>
      
            <div className=' relative flex flex-col gap-1 '>
                <label className=' font-semibold pl-2 text-amber-400 ' >Phone</label>
                <input className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none pl-2 ' />
            </div>
      
            <div className=' relative flex flex-col gap-1 '>
                <label className=' font-semibold pl-2 text-amber-400 ' >Website</label>
                <input className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none pl-2 ' />
            </div>
      
            <div className=' relative flex flex-col gap-1 '>
                <label className=' font-semibold pl-2 text-amber-400 ' >Group</label>
                {/* <input className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none pl-2 ' /> */}
                <select className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none px-2 '>
                    <option></option>
                    <option>Group-1</option>
                    <option>Group-2</option>
                    <option>Group-3</option>
                    <option>Group-4</option>
                    <option>Group-5</option>
                </select>
            </div>
      
            <div className=' relative flex flex-col gap-1 '>
                <label className=' font-semibold pl-2 text-amber-400 ' >Currency</label>
                {/* <input className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none pl-2 ' /> */}
                <select className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none px-2 '>
                    <option></option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>KSH</option>
                    <option>AED</option>
                    <option>Birr</option>
                </select>
            </div>
      
            <div className=' relative flex flex-col gap-1 pb-10 '>
                <label className=' font-semibold pl-2 text-amber-400 ' >Deafult Language</label>
                <select className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none px-2 '>
                    <option></option>
                    <option>Af-Soomaali</option>
                    <option>English</option>
                    <option>Português</option>
                    <option>العربية</option>
                    <option>አማርኛ</option>
                </select>
            </div>
        </div>

        <div className=' right-profile-detail sm:w-full sm:h-fit px-[30px] flex flex-col gap-5 pt-[30px] '>
            <div className=' flex flex-col gap-1'>
                <label className=' font-semibold pl-2 text-amber-400'>Address</label>
                <textarea className=' texxtarea min-w-[200px] block w-full min-h-[152px] max-h-[239.8px] outline-none rounded-md   bg-transparent p-2 ' />
            </div>
    
            <div className=' relative flex flex-col gap-1 '>
                <label className=' font-semibold pl-2 text-amber-400 ' >City</label>
                <input className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none pl-2 ' />
            </div>
    
            <div className=' relative flex flex-col gap-1 '>
                <label className=' font-semibold pl-2 text-amber-400 ' >State</label>
                <input className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none pl-2 ' />
            </div>
    
            <div className=' relative flex flex-col gap-1 '>
                <label className=' font-semibold pl-2 text-amber-400 ' >Zip Code</label>
                <input className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none pl-2 ' />
            </div>
            <div className=' relative flex flex-col gap-1 pb-14 '>
                <label className=' font-semibold pl-2 text-amber-400 ' >Country</label>
                {/* <input className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none pl-2 ' /> */}
                <select className=' min-w-[200px] w-full h-[40px] bg-transparent  rounded-md text-[17px]  outline-none px-2 '>
                    <option></option>
                    <option>Afghanistan</option>
                    <option>Algeria</option>
                    <option>Bulgeria</option>
                    <option>Ethiopia</option>
                    <option>Somalia</option>
                </select>
            </div>
        </div>

      </div>

    </section>
  )
}

export default Profile
