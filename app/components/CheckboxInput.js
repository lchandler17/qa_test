import React from 'react';
import PropTypes from 'prop-types';

//Input for Checbkox or radio buttons
function CheckboxInput(props) {
  return (
    <div>
      {props.title && (
        <label style={{fontSize: "35px"}}className={'label ' + (props.classes || '')}>
          {props.title}
        </label>
      )}
      <div className="checkbox-group">
        {props.options.map(
          opt =>
            //if custom icons are provided, checkbox logic handled slightly differently
            new Icon(props, opt)
        )}
      </div>
    </div>
  );
}


function Icon(props, opt) {
  //if icons are provided synthetically create the click event
  const e = {
    target: {
      name: props.name,
      value: opt,
      type: props.type
    }
  };

  const on_icon = <div style={{display:"inline-block",height:"20px",width:"20px", backgroundColor:"#54d852"}}></div>;
  const off_icon = <div style={{display:"inline-block", height:"20px",width:"20px", backgroundColor:"#cbd6db"}}></div>;

  const checked = (props.selected === opt);

  return (
    <div
      key={opt}
      onClick={() => props.onChange(e)}
      onFocus={() => props.onFocus(e)}
      name={props.name}
      value={opt}
      type={props.type}
      style={{marginBottom: "10px",cursor: "pointer"}}
    >
      {checked ? (
        on_icon
      ) : (
        off_icon
      )}
      <div style={{marginTop:"-10px",marginLeft:"10px", display:"inline-block"}}>{opt}</div>
    </div>
  );
}


// CheckboxInput.propTypes = {
//   title: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   options: PropTypes.array.isRequired,
//   type: PropTypes.oneOf(['radio', 'checkbox']),
//   //the array of selected options
//   selected: PropTypes.oneOfType([
//     PropTypes.array,
//     PropTypes.string,
//     PropTypes.number
//   ]),
//   onChange: PropTypes.func.isRequired,
//   withLabels: PropTypes.bool,
//   on_icon: PropTypes.string,
//   off_icon: PropTypes.string,
//   displayTransform: PropTypes.func
// };

export default CheckboxInput;
