//write a function that calculates how much the out of pocket cost would be per vet bill 

/*
let monthlyPrem = 58.36
let annualPrem = monthlyPrem*12
let deductible = 300 
let reimbursementRate = 0.80
let minimalYearlyExpense = annualPrem + deductible 

function outOfPOcket(vetBill) {
  let costCovered = vetBill*reimbursementRate
  return (vetBill - costCovered + minimalYearlyExpense).toFixed(2)
}

console.log(`Under this plan, you will have paid $ ${outOfPOcket(10000)} out of pocket for this bill including your annual premium and deductible`)
*/

//-----------------------------

//myPlan:

let monthlyPrem = 49.79
let deductible = 250
let reimbursementRate = 0.80
let costOfCoverage = monthlyPrem*12 + deductible

function CostWithOrWithoutInsurance (vetBill) {
  let costCovered = vetBill*0.8
  let costWithIns = vetBill - costCovered + costOfCoverage
  let costWithOutIns = vetBill 
  let savings = vetBill - costWithIns

  console.log(`under this plan, you would have saved $ ${savings}`)

  if (costWithIns > costWithOutIns) {
    return "you didn't get a good deal in this scenario"
  } else if (costWithIns < costWithOutIns) {
    return "you got a good deal in this scenario"
  } else (costWithIns == costWithOutIns)
    return "you broke even in this scenario"
  } 

console.log(CostWithOrWithoutInsurance(5000))

//console.log(CostWithOrWithoutInsurance(1250.40)) minimum vet bill for a good deal 
