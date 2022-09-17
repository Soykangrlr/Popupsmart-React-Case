import './name.css'
import { useDispatch } from "react-redux"
import { handleName } from '../../redux/name/nameSlice'
import { useState } from 'react'
function Name() {
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name.trim().length<3){
      alert("3 ve daha fazla uzunlukta olmalıdır.")
    }else{
      dispatch(handleName(name))
    }
   setName("")
  }
  return (
    <div className="form-name">
      <div className='bg-white p-5 rounded'>
        <h1 className='text-center mb-3 text-muted'>İsminizi Giriniz</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input value={name} type="text" className='w-100 mb-3 p-2 ' onChange={(e) => setName(e.target.value)} autofocus />
          <button type='submit' className='btn btn-lg btn-warning w-100'>Giriş Yap</button>
        </form>

      </div>

    </div>
  )
}
export default Name