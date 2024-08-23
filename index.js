const inputs = document.getElementById("inputs")
const day = document.getElementById("day")
const income = document.getElementById("income")
const expenses = document.getElementById("expenses")
const totalAmount = document.getElementById("totalAmount")
const addRow = document.getElementById("addRow")
const table = document.querySelector(".table")


console.log(income.value)


inputs.addEventListener("change", (e)=>{
    totalAmount.innerText = income.value - expenses.value
    console.log(e)
})

//const totalValue = income.value - expenses.value 

addRow.addEventListener("click", (e)=>{
    const newRow = document.createElement("tr")
    const newDay = document.createElement("th")
    const dayInput = document.createElement("input")
    dayInput.setAttribute("type", "date")
    newDay.append(dayInput)
    const newDescription = document.createElement("th")
    const descInput = document.createElement("input")
    newDescription.append(descInput)
    const newIncome = document.createElement("th")
    const incomeInput = document.createElement("input")
    newIncome.append(incomeInput)
    const newExpense = document.createElement("th")
    const expenseInput = document.createElement("input")
    newExpense.append(expenseInput)
    newRow.append(newDay, newDescription, newIncome, newExpense)
    table.append(newRow)
    

})

const newDay = document.createElement("th")
const newDescription = document.createElement("th")
const newIncome = document.createElement("th")
const newExpense = document.createElement("th")