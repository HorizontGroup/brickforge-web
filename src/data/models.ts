import { ModelBuildData } from '../types';

export const DEFAULT_CAMERA_MODEL: ModelBuildData = {
  id: 'BF-8842',
  name: 'Retro Instant Mini',
  category: 'Vintage Instant Camera',
  tier: 'Intermediate',
  photoUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBpv--NT1DiZA7a_2xkvn176EISDLpO9k2nXDpF_VnN7YepA-sUjJiBRL6HD15AvSsSh1KKK9-gBVKW5RlRDMKD7bHbpiN58tWQnzS5fneVzUA3jaLv5P-wnlZBEDsQXnSk1YzFFW8sud1TTXVdC23QqAeHHhyU1Y_Lru6cnDBMZMH_wQycTWfaR5CU1wI3DGQTQTbC2H9cCAIBP1iYk0psYiwl1yoXR2RcbFD_sZB4XU_A9wK4mj3h-dUtrt2TKdtRQac',
  renderUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDlcJQJp1UdDURUvL6GiaQFKTn1YZ7e7SScMSaJ93jIFVrWioSPC5t1eSk5dmGn-u3YEq6BJolFYR0auP9hYpvB_IseCS6FIrE3c80QENztb-rW97L-7Niq-y18Jbq6uc4IvljXSXQkaecGFJqo-3yY2kveEY0AGgI3nvwkV7cdSl1uVwOCptnhmkrEPfRbmQMrUD2xZQEdkJYb-uJR5Zgo87NDYDCCFBPgYwCMAdlLFwW8n3i5dBYc-Z62AnmVyyxCkFE',
  pieceCount: 132,
  uniqueTypes: 20,
  buildSteps: 15,
  dimensions: '~12 × 10 × 14 cm',
  colors: [
    { name: 'Pink', hex: '#f7a8b8', count: 52 },
    { name: 'Tan', hex: '#d1b88e', count: 38 },
    { name: 'Black', hex: '#1b1b1e', count: 42 },
  ],
  steps: [
    { stepNumber: 1, title: 'Base Plate Layer', description: 'Lay out the foundation 6x10 stud ABS baseplates', piecesUsed: 8 },
    { stepNumber: 2, title: 'Reinforced Core Grid', description: 'Interlock the internal stabilizer crossbeams', piecesUsed: 10 },
    { stepNumber: 3, title: 'Lower Chassis Wall', description: 'Attach front film ejector slot framing tiles', piecesUsed: 7 },
    { stepNumber: 4, title: 'Film Slot Mechanism', description: 'Mount flush smooth tiles for physical film door', piecesUsed: 9 },
    { stepNumber: 5, title: 'Mid-Tier Side Plates', description: 'Stack tan interlocking side wall bricks', piecesUsed: 11 },
    { stepNumber: 6, title: 'Camera Shutter Mount', description: 'Position red trigger button stud brackets', piecesUsed: 6 },
    { stepNumber: 7, title: 'Internal Optical Cavity', description: 'Lock dark interior chamber tiles to prevent light gap', piecesUsed: 12 },
    { stepNumber: 8, title: 'Lens Housing Sub-Assembly', description: 'Assemble cylindrical focus ring & aperture cylinder', piecesUsed: 8 },
    { stepNumber: 9, title: 'Front Faceplate Framing', description: 'Fasten pink corner slope tiles to front body', piecesUsed: 10 },
    { stepNumber: 10, title: 'Viewfinder Channel', description: 'Set transparent optical barrel with bracket studs', piecesUsed: 7 },
    { stepNumber: 11, title: 'Flash Cube Housing', description: 'Integrate top strobe reflector plate elements', piecesUsed: 9 },
    { stepNumber: 12, title: 'Top Beveled Lid', description: 'Clip top carrying handle brackets and hood', piecesUsed: 12 },
    { stepNumber: 13, title: 'Strap Lugs & Side Hinges', description: 'Attach left/right friction swivel eyelets', piecesUsed: 8 },
    { stepNumber: 14, title: 'Dial & Focus Range Decals', description: 'Snap knurled rotational dials to upper deck', piecesUsed: 7 },
    { stepNumber: 15, title: 'Viewfinder & Dial Polish', description: 'Final stud check and top finish plate placement', piecesUsed: 8 },
  ],
};

export const EXAMPLE_BUILDS = [
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    pieceCount: 164,
    photoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWkydQWmu-hMZ50JHSjuzQYR0x7hqIkWWqIYbJSYSkO09p4Ug9a9Jwz2JN2ZqcxiXhV9gJhtpzCLJysR6UNd1lIXxHq4a2hHvyrDAjXBv2EfbU889K7yhmg6K9wttZMKlD19s7MPqtVXRGAJ8VyGvUROOJlfvj3hhwKvCQ-O81N5D5qdcBBn0hZCqK21DKQcyFmFDxyc3LXktGCZRP94jdJHXD4_00sK_IEzXKvu3EZSXvm8xMbwGSDQ',
    renderUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyMHiHZqJeg0dAJacCb0mXz1c2VsYevleDfunhqZ8wXrSY65N_XbwetIsDOVEGUyWnJNL4KAk4AHuYHN4BWkAcTRpjrH1iJmdJW9rl34zUheEvTHQbVOUjnFZJz62ZZJJnaqOTehc6ZeBeTCeOvFf-pGTYOfeG5Zaq2lfR7yKZG-hvxZb6F1RPirsksyOc-i3ovc9PSBO7Zp62Wem_3Mh75wJ6fAxcya66qiF_lsrl8lThP-3CewD9CA',
  },
  {
    id: 'vintage-camera',
    name: 'Vintage Camera',
    pieceCount: 132,
    photoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5rL2reli9L8_cSAmAsskjQbkKcaoWsYF84yyRDvB076QvruIz810toHdiMAg0fzzpVUXAPhOd8dFqmJdImvG0VLTJzB-j1Nt3VtC-Cxu6LltcHZVwKIpyfc463tnOXqy6BxFD8zHt31m24ue4kRf4eX8ZfEHQZVS2Qk9fZu30l3iu-pHKcxZBRIOqcN6JbioSGm_71-bet2r9lBdf-Ot-Ba2fuiAkCjb5GkM3BBh4vmS7x3vPFIIAaQXQ_Gh4QFFirfo',
    renderUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZMRSl9BxNTs2KHRpsa3mTkAxJtRuseQC-Z_psjUN0hQNgMJ08AFS1qSC_nd8RjCpE7qEcuEKjaUFq2dDpxC4enDAl4yMRiWBE8SUkpHyQfI5_TgFDsLPMmKMm3NAAbdE1-j0M22a_-sWnJztoWtziAr66shb_uA9Tk5NX0uMWXYob6ro2u16QVeJNequ4fVrEyI9psitHp94bMY6F7E8HKkBrVo9NEW_-T83Ovt_SxKZqixki4YkTCQAkJPNW0eBhLc',
  },
  {
    id: 'family-home',
    name: 'Family Home',
    pieceCount: 310,
    photoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAc8zXs9G1Gsr4MDKkiFKzN2ia70npSqrrw1pibZ_l_GwRTzQvt5dRhtn08Vvz-OoTKwyqNLtlI0lJwY-2IlbVeXCrD-1IPoNFO-MN5py7xupXE3b794UBhn1OrtPHmwSAAEMSpsivxlcmwmPzqKyTHmFYnj9fmMNOf4KqS1Y1DDCX5XA8pegw1Vtzu5j-LpVYfTptnYqTWuzEjC37io2CFGmwLmECzX46A_T8t5CSxEtmGwwlRyg9asg',
    renderUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASzlmwJQAsRXwEe1T1NpPeLWRgh9XQ7SD8R11XnufiJnkAz5xyYrE0Le4qv1zbKQTH4ylMhO29xBaOntXJx1oVVdCPcrLalRCzuvHnrhrZZdmlZILy39vtzmI5w_Ab1X8Q1psL0hs-LXV4Y6CXGjyqD8UoMP9LEoaYp0MswkXti1CdMya-8kzpDgZwaoFFroLOXyNpw5a0Cg5wkMg0zhI1togVKdcT82MZgcKsyT8MgcFUR9vamGpQAw',
  },
  {
    id: 'red-sports-car',
    name: 'Red Sports Car',
    pieceCount: 248,
    photoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5rL2reli9L8_cSAmAsskjQbkKcaoWsYF84yyRDvB076QvruIz810toHdiMAg0fzzpVUXAPhOd8dFqmJdImvG0VLTJzB-j1Nt3VtC-Cxu6LltcHZVwKIpyfc463tnOXqy6BxFD8zHt31m24ue4kRf4eX8ZfEHQZVS2Qk9fZu30l3iu-pHKcxZBRIOqcN6JbioSGm_71-bet2r9lBdf-Ot-Ba2fuiAkCjb5GkM3BBh4vmS7x3vPFIIAaQXQ_Gh4QFFirfo',
    renderUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZMRSl9BxNTs2KHRpsa3mTkAxJtRuseQC-Z_psjUN0hQNgMJ08AFS1qSC_nd8RjCpE7qEcuEKjaUFq2dDpxC4enDAl4yMRiWBE8SUkpHyQfI5_TgFDsLPMmKMm3NAAbdE1-j0M22a_-sWnJztoWtziAr66shb_uA9Tk5NX0uMWXYob6ro2u16QVeJNequ4fVrEyI9psitHp94bMY6F7E8HKkBrVo9NEW_-T83Ovt_SxKZqixki4YkTCQAkJPNW0eBhLc',
  },
  {
    id: 'tabby-cat',
    name: 'Tabby Cat',
    pieceCount: 178,
    photoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWkydQWmu-hMZ50JHSjuzQYR0x7hqIkWWqIYbJSYSkO09p4Ug9a9Jwz2JN2ZqcxiXhV9gJhtpzCLJysR6UNd1lIXxHq4a2hHvyrDAjXBv2EfbU889K7yhmg6K9wttZMKlD19s7MPqtVXRGAJ8VyGvUROOJlfvj3hhwKvCQ-O81N5D5qdcBBn0hZCqK21DKQcyFmFDxyc3LXktGCZRP94jdJHXD4_00sK_IEzXKvu3EZSXvm8xMbwGSDQ',
    renderUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyMHiHZqJeg0dAJacCb0mXz1c2VsYevleDfunhqZ8wXrSY65N_XbwetIsDOVEGUyWnJNL4KAk4AHuYHN4BWkAcTRpjrH1iJmdJW9rl34zUheEvTHQbVOUjnFZJz62ZZJJnaqOTehc6ZeBeTCeOvFf-pGTYOfeG5Zaq2lfR7yKZG-hvxZb6F1RPirsksyOc-i3ovc9PSBO7Zp62Wem_3Mh75wJ6fAxcya66qiF_lsrl8lThP-3CewD9CA',
  },
];
