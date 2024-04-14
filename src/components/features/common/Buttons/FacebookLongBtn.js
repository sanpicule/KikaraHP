import FacebookIcon from "./FacebookIcon"

const FacebookLongBtn = () => {
  return (
    <button className="bg-Facebook hover:bg-Facebook-hover text-white font-bold py-2 px-4 rounded w-36 md:w-64 flex items-center justify-center gap-2">
      <FacebookIcon size={18} color={"#fff"} />
      <p>
        Facebook
      </p>
    </button>
  )
}

export default FacebookLongBtn
