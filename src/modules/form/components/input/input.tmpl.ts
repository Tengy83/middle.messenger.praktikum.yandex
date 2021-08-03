export function createInput(
  inputName: string,
  isLabel?: boolean,
  isPlaceholder?: boolean,
  isValue?: boolean
): string {
  const placeholder = isPlaceholder
    ? `placeholder="{{form.inputs.${inputName}.placeholder }}"`
    : "";
  const value = isValue ? `value="{{form.inputs.${inputName}.value }}"` : "";
  const label = isLabel
    ? `<label for="{{form.inputs.${inputName}.name}}">{{form.inputs.${inputName}.label}}</label>`
    : "";

  return `${label}<input type="{{form.inputs.${inputName}.type}}" name="{{form.inputs.${inputName}.name}}" class="{{form.inputs.${inputName}.className}}" id="{{form.inputs.${inputName}.name}}" ${placeholder} ${value} />`;
}
