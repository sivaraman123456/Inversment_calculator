import React from 'react'
import { calculateInvestmentResults,formatter } from '../utils/investement_data';
const Result = ({input}) => {
    console.log("input:",input);
    const result = calculateInvestmentResults(input.initialInvestment,input.annualIvestment,input. expectedReturn,input.duration)
    console.log("result:",result);
    const initialInvestment =result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment
  return (
<table id='result'>
    <thead>
        <tr>
            <th>Year</th>
            <th>Ivestmet Value</th>
            <th>Intrest (year)</th>
            <th>Total Intrest</th>
            <th>Invested Captial</th>

        </tr>
    </thead>
    <tbody>
        {result && result.map((data,index)=>{
            const totalInvest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment
            const totalAmountInvested = data.valueEndOfYear - totalInvest
         return   (<tr key={index}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInvest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
         )
})}
    </tbody>
</table>
 
  )
}

export default Result