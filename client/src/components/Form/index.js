import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function ColorInput(props) {
  return (
    <select id="color" className="form-control">
        <option value="DEFAULT" disabled>Choose Rail line Color...</option>
      <option {...props} id="redOpt" value="Red">Red</option>
      <option {...props} id="orgOpt" value="Orange">Orange</option>
      <option {...props} id="ylwOpt" value="Yellow">Yellow</option>
      <option {...props} id="grnOpt" value="Green">Green</option>
      <option {...props} id="bluOpt" value="Blue">Blue</option>
      <option {...props} id="prpOpt" value="Purple">Purple</option>
      <option {...props} id="pnkOpt" value="Pink">Pink</option>
      <option {...props} id="brnOpt" value="Brown">Brown</option>
    </select>
  );
}

export function CategoryInput(props) {
  return (
    <select id="category" className="form-control">
        <option value="DEFAULT" disabled>Choose an Incident Category...</option>
      <option className="" id=""  {...props} value="Thing">Thing</option>
      <option className="" id=""  {...props} value="Bad Guy">Bad Guy</option>
      <option className="" id=""  {...props} value="Jabroni">Jabroni</option>
      <option className="" id=""  {...props} value="Shenanigans">Shenanigans</option>
      <option className="" id=""  {...props} value="John Wayne Gacy's Ghost">John Wayne Gacy's Ghost</option>
      <option className="" id=""  {...props} value="Other">Other</option>
    </select>
  );
}

// export function FileInput(props) {
//   return (
//     <div className="form-group">
//       <input type="file" class="form-control-file"  id="file" {...props}/>
//     </div>
//   )
// };
// add FileInput to imports in Alert.js in pages folder

export function TextArea(props) {
  return (
    <div id="description" className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
