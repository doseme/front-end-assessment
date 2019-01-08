export type TStoreContent = {
  data: string[]
}

export type TStoreContext = {
  store: TStoreContent
  setStore(store: TStoreContent): void
}
