import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const signUp = async (email, password, displayName) => {
  error.value = null

  try {
    await projectAuth
  } catch(err) {

  }

}

const useSignUp = () => {
  return { error, signUp }
}

export default useSignUp