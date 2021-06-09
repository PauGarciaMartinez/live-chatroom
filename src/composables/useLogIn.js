import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const logIn = async (email, password) => {
  error.value = null

  
}

const useLogIn = () => {
  return { error, logIn }
}

export default useLogIn