export interface IApp {
  value: number
  setValue: (value: number) => void
  selectedItem: number
  setSelectedItem: (selectedItem: number) => void
}