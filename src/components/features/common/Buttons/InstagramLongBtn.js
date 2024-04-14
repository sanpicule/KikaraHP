import InstagramIcon from "./InstagramIcon"

const InstagramLongBtn = () => {
  return (
    <button className="bg-Instagram hover:bg-Instagram-hover text-white font-bold py-2 px-4 rounded w-36 md:w-64 flex items-center justify-center gap-2">
      <InstagramIcon size={18} color={"#fff"} />
      Instagram
    </button>
  )
}

export default InstagramLongBtn
