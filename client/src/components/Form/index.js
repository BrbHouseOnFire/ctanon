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
    <select id="title" className="form-control">
      <option className="" id=""  {...props} value="" disabled selected>Line Color</option>
      <option className="" id=""  {...props} value="Red">Red</option>
      <option className="" id=""  {...props} value="Orange">Orange</option>
      <option className="" id=""  {...props} value="Yellow">Yellow</option>
      <option className="" id=""  {...props} value="Green">Green</option>
      <option className="" id=""  {...props} value="Blue">Blue</option>
      <option className="" id=""  {...props} value="Purple">Purple</option>
      <option className="" id=""  {...props} value="Pink">Pink</option>
      <option className="" id=""  {...props} value="Brown">Brown</option>
    </select>
  );
}

export function CategoryInput(props) {
  return (
    <select id="author" className="form-control">
      <option className="" id=""  {...props} value="" disabled selected>Incident Category</option>
      <option className="" id=""  {...props} value="Thing">Thing</option>
      <option className="" id=""  {...props} value="Bad Guy">Bad Guy</option>
      <option className="" id=""  {...props} value="Jabroni">Jabroni</option>
      <option className="" id=""  {...props} value="Shenanigans">Shenanigans</option>
      <option className="" id=""  {...props} value="John Wayne Gacy's Ghost">John Wayne Gacy's Ghost</option>
    </select>
  );
}

export function FileInput(props) {
  return (
    <div className="form-group">
      <input type="file" class="form-control-file"  id="file" {...props}/>
      <label for="file">FILE PICKER BROKEN DO NOT TOUCH</label>
    </div>
  )
};

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
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
