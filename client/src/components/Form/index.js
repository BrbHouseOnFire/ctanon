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
    <select {...props} defaultValue="default" id="line" className="form-control" >
      <option value="default">Choose Rail line Color...</option>
      <option id="Red" value="Red">Red</option>
      <option id="Blue" value="Blue">Blue</option>
      <option id="Brn" value="Brn">Brown</option>
      <option id="G" value="G">Green</option>
      <option id="Org" value="Org">Orange</option>
      <option id="P" value="P">Purple</option>
      <option id="Pexp" value="Pexp">Purple Express</option>
      <option id="Pink" value="Pink">Pink</option>
      <option id="Y" value="Y">Yellow</option>
    </select>
  );
}

export function CategoryInput(props) {
  return (
    <select {...props} defaultValue="default" id="category" className="form-control">
        <option value="default" > Choose an Incident Category...</option>
      <option className="" id="" value="threat">Verbal or physical threat(s)</option>
      <option className="" id="" value="inappTouch">Inappropriate touching</option>
      <option className="" id="" value="indExp">Indecent exposure</option>
      <option className="" id="" value="sexAdv">Sexual advances</option>
      <option className="" id="" value="inappPic">Inappropriate photographing/filming</option>
      <option className="" id="" value="tooClose">Unwelcomed physical proximity</option>
      <option className="" id="" value="comment">Inappropriate or sexual comments</option>
      <option className="" id="" value="obsGest">Obscene gestures</option>
      <option className="" id="" value="John Wayne Gacy's Ghost">John Wayne Gacy's Ghost</option>
      <option className="" id="" value="Other">Other</option>
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
    <div name="description" className="form-group">
      <textarea className="form-control" id="description" rows="3" maxLength="140" spellCheck="default" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <>
    <button {...props} type="submit" style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
      
    </button>
    </>
  );
}
