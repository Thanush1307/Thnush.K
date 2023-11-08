import {useState} from 'react'

export const Cricket = () => {
    const [curr,update]=useState(0);
    const [wicket,updateWicket]=useState(0);
    const [value,updatevalue]=useState(false);
  return (
    <div>
        <br></br>
        <p>Runs:{curr}</p>
        <button disabled={value} onClick={()=>update(curr+1)}>1 runs</button><br></br>
        <button disabled={value} onClick={()=>update(curr+2)}>2 runs</button><br></br>
        <button disabled={value} onClick={()=>update(curr+4)}>4 runs</button><br></br>
        <button disabled={value} onClick={()=>update(curr+6)}>6 runs</button><br></br>
        {curr===10 ? updatevalue(true):null}
        <button onClick={()=>update(0)}>Reset Runs</button><br></br>
        <br></br>
        <button onClick={()=>updateWicket(wicket+1)}>Wicket</button><br></br>
        <p>Wicket:{wicket}</p>
        <button onClick={()=>updateWicket(0)}>Reset Wickets</button><br></br>
    </div>
  )
}