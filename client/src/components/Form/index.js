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
    <select defaultValue="default" id="line" className="form-control" >
        <option value="default">Choose Rail line Color...</option>
      <option {...props} id="Red" value="Red">Red</option>
      <option {...props} id="Blue" value="Blue">Blue</option>
      <option {...props} id="Brn" value="Brn">Brown</option>
      <option {...props} id="G" value="G">Green</option>
      <option {...props} id="Org" value="Org">Orange</option>
      <option {...props} id="P" value="P">Purple</option>
      <option {...props} id="Pexp" value="Pexp">Purple Express</option>
      <option {...props} id="Pink" value="Pink">Pink</option>
      <option {...props} id="Y" value="Y">Yellow</option>
    </select>
  );
}

export function CategoryInput(props) {
  return (
    <select defaultValue="default" id="category" className="form-control">
        <option value="default" > Choose an Incident Category...</option>
      <option className="" id=""  {...props} value="threat">Verbal or physical threat(s)</option>
      <option className="" id=""  {...props} value="inappTouch">Inappropriate touching</option>
      <option className="" id=""  {...props} value="indExp">Indecent exposure</option>
      <option className="" id=""  {...props} value="sexAdv">Sexual advances</option>
      <option className="" id=""  {...props} value="inappPic">Inappropriate photographing/filming</option>
      <option className="" id=""  {...props} value="tooClose">Unwelcomed physical proximity</option>
      <option className="" id=""  {...props} value="comment">Inappropriate or sexual comments</option>
      <option className="" id=""  {...props} value="obsGest">Obscene gestures</option>
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
    <div name="description" id="description" className="form-group">
      <textarea className="form-control" rows="3" maxLength="140" spellCheck="default" {...props} />
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
