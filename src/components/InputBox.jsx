export default function InputBox(props) {
  const handleInputChange = (e) => {
    if(e.target.value.length < 38) {
      props.setText(e.target.value);
    }
  };
  return (
    <form onSubmit={ props.onSubmit } className="w-full flex flex-row justify-center">
          <input type="text" 
            className="outline-none border-none w-[18rem] py-2 px-3 bg-gray-700 shadow text-white rounded-tl rounded-bl font-bold ring-1 ring-orange-400"
            placeholder="Enter your ToDo" 
            onChange={ handleInputChange } 
            value={props.value}
          />
          <button type="submit" className="border-none py-2 px-5 bg-orange-400 rounded-tr rounded-br hover:bg-orange-500 shadow ring-1 ring-orange-400 hover:ring-orange-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          </button>
        </form>
  )
}