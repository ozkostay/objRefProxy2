export default function takeAttacks({
  id, name, icon, description = 'Описание недоступно',
}) {
  const arr = [];
  arr.push(id);
  arr.push(name);
  arr.push(icon);
  arr.push(description);
  return arr;
}
