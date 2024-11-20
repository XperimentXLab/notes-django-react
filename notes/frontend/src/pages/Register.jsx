import FormT from '../components/FormT'

function Register () {
  return (
    <>
      <FormT 
        route="/api/user/register/"
        method="register"
      />
    </>
  )
}

export default Register