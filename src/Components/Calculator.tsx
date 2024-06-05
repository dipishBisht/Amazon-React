import React, { useState } from "react";

const Calculator = () => {
  const [inp1, setInp1] = useState<string>("");
  const [inp2, setInp2] = useState<string>("");
  const [output, setOutput] = useState<string | number>("");

  const handleOperation = (e: React.MouseEvent<HTMLButtonElement>) => {
    const curOper = e.currentTarget.dataset.operation;
    const num1 = parseFloat(inp1);
    const num2 = parseFloat(inp2);
    setInp1(""), setInp2("");
    if (num1 && num2) {
      if (curOper === "+") setOutput(num1 + num2);
      else if (curOper === "-") setOutput(num1 - num2);
      else if (curOper === "*") setOutput(num1 * num2);
      else if (curOper === "/") setOutput(num1 / num2);
    } else {
      setOutput("Invalid");
    }
  };

  return (
    <div className="my-10">
      <div className="flex gap-4 mx-4">
        <input
          className="border-2 border-solid pl-1"
          placeholder="Enter First Number"
          type="text"
          value={inp1}
          onChange={(e) => setInp1(e.target.value)}
        />
        <input
          className="border-2 border-solid pl-1"
          placeholder="Enter Second Number"
          type="text"
          value={inp2}
          onChange={(e) => setInp2(e.target.value)}
        />
      </div>
      <div className="flex gap-2 my-5 mx-4">
        <button
          className="px-2 py-2 border-2 border-blue-500 w-[110px] duration-100 hover:bg-blue-500 hover:text-white"
          data-operation="+"
          onClick={handleOperation}
        >
          Addition
        </button>
        <button
          className="px-2 py-2 border-2 border-blue-500 w-[110px] duration-100 hover:bg-blue-500 hover:text-white"
          data-operation="-"
          onClick={handleOperation}
        >
          Subtraction
        </button>
        <button
          className="px-2 py-2 border-2 border-blue-500 w-[110px] duration-100 hover:bg-blue-500 hover:text-white"
          data-operation="*"
          onClick={handleOperation}
        >
          Multiplication
        </button>
        <button
          className="px-2 py-2 border-2 border-blue-500 w-[110px] duration-100 hover:bg-blue-500 hover:text-white"
          data-operation="/"
          onClick={handleOperation}
        >
          Division
        </button>
      </div>
      <div className="mx-4 text-xl font-semibold">{output}</div>
    </div>
  );
};

export default Calculator;
