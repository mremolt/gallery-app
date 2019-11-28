import { Gallery } from './gallery.model';

export interface GalleryState {
  entities: Array<Gallery>;
}

export const initialState: GalleryState = {
  entities: [],
};

// { type:'LOAD...', galleries: [......] }
// { type:'ADD...', gallery: {...} }

export function galleryReducer(state: GalleryState = initialState, action: any): GalleryState {
  switch (action.type) {
    case 'GALLERY Load':
      //state.entities = action.galleries;
      return { ...state, entities: action.galleries };

    case 'GALLERY Create':
      return { ...state, entities: [...state.entities, action.gallery] };

    case 'GALLERY Reset':
      return initialState;

    default:
      return state;
  }
}
