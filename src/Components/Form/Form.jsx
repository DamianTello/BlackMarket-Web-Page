import { Input } from './FormComponents/Input'
import { Checkbox } from './FormComponents/Checkbox'
import { useState } from 'react'
import { axiosInstance } from '../../axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserSessionContext } from '../../Context/UserSessionProvider'

export const Form = ({ formToggle, formTitle, submitButtonText }) => {
  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')

  const [IsLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const { handleLogin } = useContext(UserSessionContext)
  const HandleSubmit = async event => {
    event.preventDefault()
    console.log('formulario enviado')
    setIsLoading(true)
    if (formToggle === 'SignUp') {
      try {
        const response = await axiosInstance.post('/users', {
          user: {
            name,
            email,
            password,
            password_confirmation: confirmpassword
          }
        })
        setemail('')
        setpassword('')
        setconfirmpassword('')
        setname('')
        navigate('/SignIn')
      } catch (e) {
        alert('Please complete the registration form correctly')
      } finally {
        setIsLoading(false)
      }
    } else {
      try {
        const response = await axiosInstance.post('/users/sign_in', {
          user: {
            email,
            password
          }
        })

        console.log('success', response)
        setemail('')
        setpassword('')
        handleLogin()
        navigate('/')
      } catch (e) {
        console.log(e)
        alert(e.response.data.error)
      } finally {
        setIsLoading(false)
      }
    }
  }
  return (
    <form
      onSubmit={HandleSubmit}
      action=''
      className='flex flex-col mt-12 ml-3 w-9/12 sm:max-w-sm min-w-72 self-center text-whitish shrink-0'
    >
      <h1 className='self-center'>{formTitle}</h1>
      <Input
        labelName={'emails'}
        type={'email'}
        labelContent={'Email:'}
        value1={email}
        value2={setemail}
        required
        showToggle={true}
      ></Input>
      <Input
        labelName={'Username'}
        type={'text'}
        labelContent={'Username:'}
        showToggle={formToggle === 'SignUp'}
        value1={name}
        value2={setname}
      ></Input>
      <Input
        labelName={'password'}
        type={'password'}
        labelContent={'Password:'}
        showToggle={true}
        value1={password}
        required
        value2={setpassword}
      ></Input>
      <Input
        labelName={'confirmPassword'}
        type={'password'}
        labelContent={'Confirm password:'}
        showToggle={formToggle === 'SignUp'}
        value1={confirmpassword}
        value2={setconfirmpassword}
      ></Input>
      <Checkbox
        labelName={'termsCheck'}
        labelContent={'Accept the terms and conditions:'}
        showToggle={formToggle === 'SignUp'}
        required
      ></Checkbox>

      <button
        type='submit'
        className=' my-2 px-10 py-2 text-md w-1/2 min-w-fit self-center cursor-pointer rounded-md hover:transition hover:duration-100 hover:text-white hover:bg-button-blue shadow-inner shadow-button-blue'
      >
        {submitButtonText}
      </button>
    </form>
  )
}
