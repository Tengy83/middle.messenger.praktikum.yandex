export function createAuthorization(options) {
  return `
    <{{ dom }} class="{{ className }}">
      <h1 class="{{ titleClass }}">
        {{title}}
      </h1>

      <form action="{{form.action}}" method="{{form.method}}" class="{{form.className}}">
        <input type="{{form.inputs.login.type}}" name="{{form.inputs.login.name}}" class="{{form.inputs.login.className}}" placeholder="{{form.inputs.login.placeholder}}" />
        <input
          type="{{form.inputs.password.type}}"
          name="{{form.inputs.password.name}}"
          class="{{form.inputs.password.className}}"
          placeholder="{{form.inputs.password.placeholder}}"
        />
        <{{form.buttons.submit.tag}} type="{{form.buttons.submit.type}}" class="{{form.buttons.submit.className}}">{{form.buttons.submit.title}}</{{form.buttons.submit.tag}}>
        <{{form.buttons.forgotPass.tag}} href="{{form.buttons.forgotPass.link}}" class="{{form.buttons.forgotPass.className}}" data-page="{{form.buttons.forgotPass.dataPage}}">{{form.buttons.forgotPass.title}}</{{form.buttons.forgotPass.tag}}>

        <hr />

        <{{form.buttons.register.tag}} href="{{form.buttons.register.link}}" class="{{form.buttons.register.className}}" data-page="{{form.buttons.register.dataPage}}">{{form.buttons.register.title}}</{{form.buttons.register.tag}}>
      </form>
    </{{dom}}>
  `;
}

function createForm(form) {
  const inputs = createInputs(form.inputs) || '';

  return `
  <form action="{{form.action}}" method="{{form.method}}" class="{{form.className}}">
    ${inputs}
  </form>
  `;
}

function createInputs(inputs) {
  return '';
}
