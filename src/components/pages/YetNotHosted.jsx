import {  useSelector } from "react-redux"


const YetNotHosted = () => {

  const {theme} = useSelector((state)=> state.theme);
  const origin  = window.location.origin;
  return (
    <div>
      <div className={`grid h-screen place-items-center ${theme === "dark"? "text-white bg-black": "bg-white text-black"} px-6 py-24 sm:py-32 lg:px-8`}>
        <div className="text-center">
          <p className="text-base font-semibold ">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Couldn&apos;t Find Page</h1>
          <p className="mt-6 text-base leading-7 ">project is not hosted yet.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={`${origin}/projects`}
              className="rounded-md outline outline-none bg-sky-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600"
            >
              Go back home
            </a>
            {/* <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default YetNotHosted