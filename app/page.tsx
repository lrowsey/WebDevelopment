"use client"
  import CountButton from "./CountButton/CountButton"
  import SearchBar from "./SearchBar/SearchBar"
  export default function Page(){
    return <div>
      <CountButton name={"Cats"} mult={2} /><CountButton name={"Griz"} mult={1} />
      <hr />
      <a href="https://github.com/lrowsey/WebDevelopment">My github</a>
      <hr />
      <SearchBar />
    </div>
  }