import { Link } from "react-router-dom";

const navigation_array = [
  { name: 'Cases', to: "/cases"},
  { name: 'Upgrader', to: "/upgrader" },
  { name: 'Contracts', to: "/contracts" },
]
var username = ["User"]
var tokens = [100]

export default function Navbar() {
  return (
    <div>
      <nav class="bg-slate-800 text-gray-200 h-14 flex items-center rounded-cool justify-between mb-1.5 ">

        {/* Menu za pomoci .map a arraye */}
        <div>
        {navigation_array.map(item => (
                    <Link class="p-1.5 px-2 mr-2 ml-1 box-content rounded-cool bg-slate-700 
                    hover:text-orange-300 hover:bg-gray-700
                    transition-all" 
                      to={item.to}
                    >
                      {item.name}
                    </Link>
        ))}
        </div>

        {/* Nazev stranky */}
        <div>
          <Link class="p-1.5 px-2 mr-2 ml-1 box-content rounded-cool bg-slate-700 
          hover:text-orange-300 hover:bg-gray-700
          transition-all" 
          to="/"
          >
            GambleGO
          </Link>
        </div>

        {/* Odkaz na uzivatele + tokeny */}
          <div class="divide-x p-1.5 px-2 mr-2 ml-1 box-content rounded-cool bg-slate-700 hover:bg-gray-700 transition-all ">
            <Link  
            class="pr-1.5 hover:text-orange-500
            transition-all"
            to="/inventory">
            {tokens} Tokens
            </Link>
            <Link 
            class="pl-1.5 hover:text-orange-500
            transition-all"
            to="/inventory">
            {username}
            </Link>
          </div>

      </nav>
    </div>
  );
}