import { eduData } from "./data";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
    {
      eduData.map((edu) => (
        <div key={edu.id} className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-gray-300 shadow-md border border-gray-600 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent shadow-none p-6">
            <h5 className="font-bold block text-xl leading-snug capitalize">{edu.title}</h5>
            <p className="block pt-3 font-medium text-sm leading-normal">{edu.institute}</p>
            <h3 className="text-3xl font-semibold leading-snug flex gap-1 mt-4 text-blue-400">{edu.marks}</h3>
          </div>
          <div className="p-6 border-t border-gray-700">
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <p className="block text-sm leading-normal">{edu.eduBoard}</p>
              </li>
              <li className="flex items-center gap-3">
                <p className="block text-sm leading-normal">{edu.completionStatus}</p>
              </li>
            </ul>
            <button className="align-middle font-bold text-center uppercase transition-all text-xs py-2 px-4 rounded-lg border border-blue-400 hover:bg-blue-500 hover:text-white block w-full mt-6">
              <a href={edu.link} target="_blank" rel="noopener noreferrer"> 
                {edu.linkTitle}
              </a>
            </button>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default Card