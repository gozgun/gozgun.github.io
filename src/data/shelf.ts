// Shelf content. To add a product logo, put the file in /public/logos/ and set `logo`.

export type ShelfItem = { title: string; by?: string; why: string; logo?: string };

export const books: ShelfItem[] = [
  { title: 'East of Eden', by: 'John Steinbeck', why: 'A retelling of Cain and Abel whose idea of timshel, that we can always choose, still shapes how I think about good and evil.' },
  { title: 'Crescent City', by: 'Sarah J. Maas', why: 'Worlds you can live in for a thousand pages, a reminder that great storytelling is mostly pacing and care for the reader. I would happily read her grocery list.' },
  { title: "What Money Can't Buy", by: 'Michael J. Sandel', why: 'How putting a price on something can quietly change what it means, a question I now notice everywhere and my favourite conversation starter.' },
  { title: 'Getting Things Done', by: 'David Allen', why: 'His idea that your mind is for having ideas, not holding them, changed my days. My inbox stays at zero and starting things feels lighter.' },
];

export const products: ShelfItem[] = [
  { title: 'Libby', logo: '/logos/libby.png', why: 'A library card turned into a calm, beautiful reading app, proof that a public service can feel delightful.' },
  { title: 'Granola', logo: '/logos/granola.png', why: 'It stays out of the way during a meeting and adds structure only afterwards, which is how I think AI should support people.' },
];

export const podcasts: ShelfItem[] = [
  { title: "Lenny's Podcast", why: 'Hearing product leaders explain how they actually make decisions, not just what they shipped, is the closest I get to sitting in their meetings.' },
  { title: 'Philosophize This!', by: 'Stephen West', why: 'Philosophy made approachable, and the episodes on fallacies changed how I listen to arguments, including my own.' },
  { title: 'Easy French', why: 'Two friends chatting in natural, everyday French, which trained my ear far more than any textbook.' },
];

// Warm, muted shelf colours, all dark-text readable.
export const shelfColors = ['#C98F6B', '#D9B26A', '#9AA07A', '#B08466', '#E5D6BE', '#C7A29A', '#8197B2', '#BE9481'];
