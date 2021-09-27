export function addToCart_Action(id) {
  return { type: 'ADD', payload: id };
}
export function removeFromCart_Action(id) {
  return { type: 'REMOVE', payload: id };
}
