import * as fromGallery from './gallery.reducer';
import { selectGalleryState } from './gallery.selectors';

describe('Gallery Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGalleryState({
      [fromGallery.galleryFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
