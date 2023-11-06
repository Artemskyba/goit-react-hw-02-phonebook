export const Filter = ({filter, updateFilter}) => {
  return (
    <input type="text" value={filter} onChange={e => updateFilter(e.target.value)} placeholder="Contacts filter"></input>)
}