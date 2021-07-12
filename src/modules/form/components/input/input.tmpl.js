export function createInput(inputState, inputName) {
  const placeholder = inputState['placeholder']
    ? `placeholder="{{form.inputs.${inputName}.placeholder }}"`
    : '';
  const value = inputState['value']
    ? `value="{{form.inputs.${inputName}.value }}"`
    : '';

  return `<input type="{{form.inputs.${inputName}.type}}" name="{{form.inputs.${inputName}.name}}" class="{{form.inputs.${inputName}.className}}" ${placeholder} ${value} />`;
}
