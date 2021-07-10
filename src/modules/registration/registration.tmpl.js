export function createRegistration() {
  return `
  <div class="{{ className }}">
      <h1 class="{{ titleClass }}">
        {{title}}
      </h1>
      <form action="{{form.action}}" method="{{form.method}}" class="{{form.className}}">
      
      <input type="{{form.inputs.email.type}}" name="{{form.inputs.email.name}}" class="{{form.inputs.email.className}}" placeholder="{{form.inputs.email.placeholder}}" />

      <input type="{{form.inputs.login.type}}" name="{{form.inputs.login.name}}" class="{{form.inputs.login.className}}" placeholder="{{form.inputs.login.placeholder}}" />

      <input type="{{form.inputs.firstName.type}}" name="{{form.inputs.firstName.name}}" class="{{form.inputs.firstName.className}}" placeholder="{{form.inputs.firstName.placeholder}}" />

      <input type="{{form.inputs.secondName.type}}" name="{{form.inputs.secondName.name}}" class="{{form.inputs.secondName.className}}" placeholder="{{form.inputs.secondName.placeholder}}" />

      <input type="{{form.inputs.phone.type}}" name="{{form.inputs.phone.name}}" class="{{form.inputs.phone.className}}" placeholder="{{form.inputs.phone.placeholder}}" />

        <input
          type="{{form.inputs.password.type}}"
          name="{{form.inputs.password.name}}"
          class="{{form.inputs.password.className}}"
          placeholder="{{form.inputs.password.placeholder}}"
        />
        <input
          type="{{form.inputs.passwordRepeat.type}}"
          name="{{form.inputs.passwordRepeat.name}}"
          class="{{form.inputs.passwordRepeat.className}}"
          placeholder="{{form.inputs.passwordRepeat.placeholder}}"
        />

        <{{form.buttons.submit.tag}} type="{{form.buttons.submit.type}}" class="{{form.buttons.submit.className}}" disabled>{{form.buttons.submit.title}}</{{form.buttons.submit.tag}}>

        <{{form.buttons.login.tag}} href="{{form.buttons.login.link}}" class="{{form.buttons.login.className}}" onclick="pageRenderListaner(this)" data-page="{{form.buttons.login.dataPage}}">{{form.buttons.login.title}}</{{form.buttons.login.tag}}>
      </form>
    </div>
  `;
}
