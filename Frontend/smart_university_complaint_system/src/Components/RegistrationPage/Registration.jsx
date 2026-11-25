import image from '../../assets/Home/University.jpg'
import RegistrationForm from './RegistrationForm'

const Registration = () => {
  
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-white/50" />
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
      <RegistrationForm />
       
      </div>
    </div>
  )
}

export default Registration