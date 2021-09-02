export function createModuleStub(moduleName: string = ''): string {
  return `<div class="module-stub">
    <h1 class="module-stub__title"><strong>${moduleName}</strong> module is under development</h1>
  </div>`;
}
