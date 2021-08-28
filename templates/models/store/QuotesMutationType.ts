// group our constants in a namespace
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace {{ Name }}sMutationType {
  export const load{{ Name }}s = 'load{{ Name }}s'
  export const loading{{ Name }}s = 'loading{{ Name }}s'
  export const loaded{{ Name }}s = 'loaded{{ Name }}s'

  // as you add new mutations to the {{ Name }}s store module,
  // keep adding their names here as above
}
