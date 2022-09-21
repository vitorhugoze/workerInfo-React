import React from "react";


const Select = ({jobs, setValue}) => {
return(
  <div className="selectorContainer">
    {
      jobs.map((eachJob) => {
        const{company, order} = eachJob;
        return(
          <div className="jobsSelector" key={order}>
            <button onClick={() => {setValue(order - 1)}}>{company}{console.log(order)}</button>
          </div>
        )
      })
    }
  </div>
)
}


export default Select;