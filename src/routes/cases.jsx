import { Link } from "react-router-dom";
import tokens from "../navbar"

const cases_list = [
  { img: "src/images/shattered_web.webp", name: "Shattered Web Case", price: "50"},
  { img: "src/images/riptide.webp", name: "Riptide Case", price: "50"},
  { img: "src/images/chroma.webp", name: "Chroma Case", price: "50"},
  { img: "src/images/chroma2.webp", name: "Chroma 2 Case", price: "50"},
  { img: 'src/images/csgow.webp', name: "CSGO Weapon Case", price: "50"},
  { img: 'src/images/csgow2.webp', name: "CSGO Weapon Case 2", price: "50"},
  { img: 'src/images/revolver.webp', name: "Revolver Case", price: "50"},
  { img: 'src/images/spectrum.webp', name: "Spectrum Case", price: "50"},
  { img: 'src/images/knives.webp', name: "Knives Mix Case", price: "200"},
  { img: 'src/images/glove.webp', name: "Gloves Mix Case", price: "200"},
  { img: 'src/images/dnn.webp', name: "Dreams and Nightmares", price: "666"},

]

export default function Cases(tokens) {
  return (
    <div class="flex justify-center align-bottom">
      <div class="bg-slate-800 rounded-cool text-white divide-y-2 w-3/5 p-3">
        <h1 className="text-4xl font-bold text-slate-200">
          Cases 💼
        </h1>

        <div class="p-3 divide-y mt-2">
          <div class="grid-cols-4 grid">
          {cases_list.map(item => (
                    <div class=" p-1.5 px-2 m-2 box-content rounded-cool bg-slate-700 
                    hover:bg-gray-700
                    transition-all" >
                      <img class="" src={item.img} alt={item.img}/>
                      <h1 class="hover:text-orange-300">
                        {item.name}
                      </h1>
                      <h1 class="hover:text-orange-300">
                        {item.price} Tokens
                      </h1>
                    </div>
            ))}
          </div>
            
        </div>
      </div>
    </div>
  );
}