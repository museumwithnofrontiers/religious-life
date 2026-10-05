import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'religiousLife',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Religious life',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '0e4485e1-3fb0-5d8c-a83c-5315bc85cb66',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'a98d0e50-3029-5377-a2cf-b09ed33dce7b',
    dynasty: {
      item: '825bbc31-2ea9-5983-a4b5-235679be04cb',
      name: 'Other Dynasties',
    },
    timeline: {
      code: 'uk',
      id: 'gbr',
      country: 'United Kingdom',
    },
    partner: {
      id: '04c60c4a-2430-5a48-ac2a-c1b3d488b403',
      name: 'Benaki Museum',
      city: 'Athens',
      country: 'Greece',
      objects: 2,
    },
  },
})
