const authors = [
  {
    id: "author-1",
    name: "James Clear",
  },
  {
    id: "author-2",
    name: "Mark Manson",
  },
  {
    id: "author-3",
    name: "Eckhart Tolle",
  },
  {
    id: "author-4",
    name: "Charles Duhigg",
  },
];

const books = [
  {
    id: "book-1",
    title: "Atomic Habits",
    author_id: "author-1",
    published_at: "2018-10-16",
    category: "Self-Help",
    total: 10,
  },
  {
    id: "book-2",
    title: "The Subtle Art of Not Giving a F*ck",
    author_id: "author-2",
    published_at: "2016-09-13",
    category: "Self-Help",
    total: 10,
  },
  {
    id: "book-3",
    title: "The Power of Now",
    author_id: "author-3",
    published_at: "2006-10-01",
    category: "Self-Help",
    total: 10,
  },
  {
    id: "book-4",
    title: "The Power of Habit",
    author_id: "author-4",
    published_at: "2009-10-01",
    category: "Self-Help",
    total: 10,
  },
];

const members = [
  {
    id: "member-1",
    name: "Mohamad Asep Saepulloh",
    email: "saepulloha133@gmail.com",
    verified: true,
  },
  {
    id: "member-2",
    name: "Mochamad Adiel Bawana",
    email: "adielbwn912@gmail.com",
    verified: false,
  },
  {
    id: "member-3",
    name: "Mochamad Aditya",
    email: "aditya133@gmail.com",
    verified: true,
  },
  {
    id: "member-4",
    name: "Anggana Putra",
    email: "angganaputra9@gmail.com",
    verified: true,
  },
];

const lendings = [
  {
    id: "lend-1",
    book_id: "book-1",
    member_id: "member-1",
    borrowed_at: "2024-06-13",
    returned_at: "2025-06-13",
  },
  {
    id: "lend-2",
    book_id: "book-2",
    member_id: "member-1",
    borrowed_at: "2024-06-13",
    returned_at: "2025-06-13",
  },
];

export { authors, books, members, lendings };
