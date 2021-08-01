export function createInput(
  isPlaceholder: boolean,
  isValue: boolean,
  inputName: string
): string {
  const placeholder = isPlaceholder
    ? `placeholder="{{form.inputs.${inputName}.placeholder }}"`
    : "";
  const value = isValue ? `value="{{form.inputs.${inputName}.value }}"` : "";

  return `<input type="{{form.inputs.${inputName}.type}}" name="{{form.inputs.${inputName}.name}}" class="{{form.inputs.${inputName}.className}}" ${placeholder} ${value} />`;
}
