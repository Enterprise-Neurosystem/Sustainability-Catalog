import {create} from 'zustand';


interface SearchState {
  query: string;
  setQuery: (query: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  query: '',
  setQuery: (query) => set({ query }),
}));

export default useSearchStore;
