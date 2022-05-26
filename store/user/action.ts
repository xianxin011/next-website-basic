export enum examplesTypes {
  EXAMPLES_01 = "EXAMPLES_01",
  EXAMPLES_02 = "EXAMPLES_02",
  EXAMPLES_ASYNC = "EXAMPLES_ASYNC",
}

export function examples_01(result: any) {
  return {
    type: examplesTypes.EXAMPLES_01,
    payload: result,
  };
}

export function examples_02(result: any) {
  return {
    type: examplesTypes.EXAMPLES_02,
    payload: result,
  };
}

export function examplesAsync(result: any) {
  return {
    type: examplesTypes.EXAMPLES_ASYNC,
    payload: result,
  };
}
