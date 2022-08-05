export const FilteredSneakersReducer = (state, action) => {
  
  switch(action.type) {
    
    case 'FILTER-SNEAKERS': 
      for(let i=0; i< state._store.sneakers.length; i++){
        
        state._store.filteredSneakers.id = state._store.sneakers[i].id;
        state._store.filteredSneakers.mainImgSRC = state._store.sneakers[i].mainImgSRC;
        state._store.filteredSneakers.pictures = state._store.sneakers[i].pictures;
        state._store.filteredSneakers.sex = state._store.sneakers[i].sex;
        state._store.filteredSneakers.model = state._store.sneakers[i].model;
        state._store.filteredSneakers.sizes = state._store.sneakers[i].sizes;
        state._store.filteredSneakers.colors = state._store.sneakers[i].colors;
        state._store.filteredSneakers.price = state._store.sneakers[i].price;
        
      }

      state._store.changed = true;
      return state._store.filteredSneakers;
       
      
      
    default:
      return state._store.filteredSneakers;
  }
  
}

export default FilteredSneakersReducer;