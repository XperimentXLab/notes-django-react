import FormT from '../components/FormT'

function Login () {
  return (
    <>
      <FormT 
        route="/api/token/"
        method="login"
      />
    </>
  )
}

export default Login