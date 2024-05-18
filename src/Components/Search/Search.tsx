import React, { useState } from 'react'

interface Props {}

const Search: React.FC<{}> = (props: Props):JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }
    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e)
    }
  return (
    <div><input value={search} onChange={(e)=> handleChange(e)}></input>
    <button onClick={(e)=> onClick(e)}></button>
    </div>
  )
}

export default Search