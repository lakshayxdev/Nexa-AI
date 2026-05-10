function LanguageSelector({ language, setLanguage }) {

  return (
   <div className="relative">

  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}

    className="
      appearance-none

      bg-[#111827]
      border
      border-blue-500/40

      hover:border-blue-400

      text-white
      font-semibold

      px-6
      py-3
      pr-12

      rounded-full

      outline-none

      transition-all
      duration-300

      hover:shadow-lg
      hover:shadow-blue-500/10

      cursor-pointer
    "
  >

    <option value="javascript">
      JavaScript
    </option>

    <option value="python">
      Python
    </option>

    <option value="cpp">
      C++
    </option>

    <option value="java">
      Java
    </option>

    <option value="typescript">
      TypeScript
    </option>

  </select>



  {/* CUSTOM ARROW */}
  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">

    ▼

  </div>

</div>
  );
}

export default LanguageSelector;