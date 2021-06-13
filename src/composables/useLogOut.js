import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const logOut = async () => {

}

const useLogOut = () => {
  return { logOut, error }
}

export default useLogOut