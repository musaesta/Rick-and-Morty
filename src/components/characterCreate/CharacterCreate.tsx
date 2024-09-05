import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { useForm } from "react-hook-form"
import { addCharacter } from "../../features/characterSlice"
import type { FormData } from "./types"
import styles from "./CharacterCreate.module.css"
export const CharacterCreate: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const newCharacter = {
      id: Date.now(),
      name: data.name,
      image: data.imageUrl,
      status: data.status,
      gender: data.gender,
    }

    dispatch(addCharacter(newCharacter))
    navigate("/")
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          id="name"
          type="text"
          placeholder="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div className={styles.wrapper}>
        <input
          className={styles.input}
          id="gender"
          type="text"
          placeholder="gender"
          {...register("gender", { required: "Gender is required" })}
        />
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>

      <div className={styles.wrapper}>
        <input
          className={styles.input}
          id="status"
          type="text"
          placeholder="status"
          {...register("status", { required: "Status is required" })}
        />
        {errors.status && <p>{errors.status.message}</p>}
      </div>

      <div className={styles.wrapper}>
        <input
          className={styles.input}
          id="imageUrl"
          type="text"
          placeholder="Image URL"
          {...register("imageUrl", { required: "Image URL is required" })}
        />
        {errors.imageUrl && <p>{errors.imageUrl.message}</p>}
      </div>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
