const booksToInsert = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    numPages: 180,
    classification: "Classic",
    description: "A classic novel about the American Dream."
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    numPages: 281,
    classification: "Classic",
    description: "A powerful story of racial injustice in the South."
  },
  {
    title: "1984",
    author: "George Orwell",
    numPages: 328,
    classification: "Dystopian",
    description: "A classic dystopian novel about totalitarianism."
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    numPages: 310,
    classification: "Fantasy",
    description: "The adventure of a hobbit named Bilbo Baggins."
  },
{
    title: "Pride and Prejudice",
    author: "Jane Austen",
    numPages: 279,
    classification: "Classic",
    description: "A classic novel of manners and love."
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    numPages: 214,
    classification: "Coming of Age",
    description: "A novel about the struggles of a teenager in New York City."
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    numPages: 625,
    classification: "Adventure",
    description: "The epic tale of Captain Ahab's quest for the white whale."
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    numPages: 1225,
    classification: "Historical Fiction",
    description: "A monumental novel about Russian society during the Napoleonic era."
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    numPages: 1216,
    classification: "Fantasy",
    description: "The epic journey to destroy the One Ring."
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    numPages: 280,
    classification: "Gothic",
    description: "A novel about the creation of a monster."
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    numPages: 197,
    classification: "Adventure",
    description: "A philosophical novel about pursuing one's dreams."
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    numPages: 275,
    classification: "Science Fiction",
    description: "A satirical novel about the experiences of a soldier in World War II."
  },
  {
    title: "The Odyssey",
    author: "Homer",
    numPages: 384,
    classification: "Epic Poetry",
    description: "An ancient Greek epic poem about Odysseus's adventures."
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    numPages: 287,
    classification: "Dystopian",
    description: "A post-apocalyptic journey of a father and son."
  },
  {
    title: "The Shining",
    author: "Stephen King",
    numPages: 447,
    classification: "Horror",
    description: "A haunted hotel and a writer's descent into madness."
  },
  {
    title: "The Great Expectations",
    author: "Charles Dickens",
    numPages: 505,
    classification: "Classic",
    description: "The story of Pip, an orphan's journey to becoming a gentleman."
  },
  {
    title: "The Road Less Traveled",
    author: "M. Scott Peck",
    numPages: 316,
    classification: "Self-Help",
    description: "A book on personal growth and spiritual development."
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    numPages: 325,
    classification: "Dystopian",
    description: "A dystopian society of consumerism and technological control."
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    numPages: 215,
    classification: "Science Fiction",
    description: "A comedic journey through space."
  },
  {
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    numPages: 251,
    classification: "Literary Fiction",
    description: "A novel of the 'Lost Generation' in the 1920s."
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    numPages: 97,
    classification: "Philosophy",
    description: "A classic text on military strategy and tactics."
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    numPages: 465,
    classification: "Mystery",
    description: "A modern mystery involving a missing woman."
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    numPages: 464,
    classification: "Classic",
    description: "A novel about the struggles of a family during the Great Depression."
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    numPages: 454,
    classification: "Thriller",
    description: "A thriller involving a code hidden in art and history."
  },
  {
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    numPages: 238,
    classification: "Classic",
    description: "A story of sin and redemption in Puritan New England."
  },
  {
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    numPages: 518,
    classification: "Science Fiction",
    description: "A love story involving time travel."
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    numPages: 662,
    classification: "Fantasy",
    description: "An epic fantasy tale of a gifted young musician."
  },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    numPages: 338,
    classification: "Thriller",
    description: "A psychological thriller involving a brilliant serial killer."
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    numPages: 369,
    classification: "Science Fiction",
    description: "A story of survival on Mars."
  },
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    numPages: 307,
    classification: "Mystery",
    description: "Classic detective stories featuring Sherlock Holmes."
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    numPages: 374,
    classification: "Dystopian",
    description: "A dystopian tale of survival and rebellion."
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    numPages: 127,
    classification: "Classic",
    description: "A novella about an old fisherman's epic battle with a giant marlin."
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    numPages: 311,
    classification: "Dystopian",
    description: "A dystopian future where women's rights are severely restricted."
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    numPages: 214,
    classification: "Coming of Age",
    description: "A novel about the struggles of a teenager in New York City."
  },
{
    title: "ألف ليلة وليلة",
    author: "أنونيموس",
    numPages: 600,
    classification: "خيال",
    description: "مجموعة من القصص والحكايات من التراث العربي." ,
    language: "Arabic"
  },
  {
    title: "موت في النيل",
    author: "أجاثا كريستي",
    numPages: 200,
    classification: "رواية جريمة",
    description: "رواية جريمة كلاسيكية في إطار سفر بحري في مصر." ,
    language: "Arabic"
  },
  {
    title: "الخالدون ماتوا",
    author: "طه حسين",
    numPages: 350,
    classification: "أدب مصري",
    description: "رواية تعكس تجربة طه حسين في أدبه." ,
    language: "Arabic"
  },
  {
    title: "العقد الفريد",
    author: "جبران خليل جبران",
    numPages: 150,
    classification: "أدب",
    description: "مجموعة من القصائد والنصوص.",
    language: "Arabic"
  },
  {
    title: "البؤساء",
    author: "فيكتور هوجو",
    numPages: 700,
    classification: "أدب كلاسيكي",
    description: "رواية تحكي قصة جان فالجان ورحلته." ,
    language: "Arabic"
  },
  {
    title: "المليونير السايب",
    author: "نجيب محفوظ",
    numPages: 250,
    classification: "رواية عربية",
    description: "قصة حياة رجل ثري تسلط عليه ظروف الحياة.",
    language: "Arabic"
  },
  {
    title: "الهلال الأخضر",
    author: "محمد صادق",
    numPages: 180,
    classification: "رواية عربية",
    description: "رواية تركز على الصراعات الاجتماعية والثقافية.",
    language: "Arabic"
  },
  {
    title: "مئة عام من العزلة",
    author: "غابرييل غارسيا ماركيز",
    numPages: 400,
    classification: "سحري الواقع",
    description: "رواية تحكي قصة عائلة بوينديا في مائة عام." ,
    language: "Arabic"
  },
  {
    title: "البؤساء",
    author: "ألكسندر دوما",
    numPages: 900,
    classification: "أدب كلاسيكي",
    description: "رواية تروي حكاية جان فالجان وصراعه." ,
    language: "Arabic"
  },
  {
    title: "الحضارة والتحديث",
    author: "طه حسين",
    numPages: 280,
    classification: "فلسفة وأدب",
    description: "مقالات تتناول تحديث الأدب والثقافة في مصر." ,
    language: "Arabic"
  },
  {
    title: "ساق البامبو",
    author: "سعد الدّين وهبة",
    numPages: 230,
    classification: "رواية عربية",
    description: "رواية عن تجربة مصر الاجتماعية." ,
    language: "Arabic"
  },
  {
    title: "الفيل الأزرق",
    author: "أحمد مراد",
    numPages: 320,
    classification: "رواية مصرية",
    description: "قصة معقدة تتعامل مع قضايا اجتماعية." ,
    language: "Arabic"
  },
  {
    title: "زنزانة 7",
    author: "محمد شكري",
    numPages: 210,
    classification: "رواية عربية",
    description: "رواية تسلط الضوء على أوضاع السجون." ,
    language: "Arabic"
  },
  {
    title: "الزعيم",
    author: "خالد محمد خالد",
    numPages: 170,
    classification: "سيرة ذاتية",
    description: "سيرة حياة جمال عبد الناصر." ,
    language: "Arabic"
  },
  {
    title: "مذكرات أندريه شينييه",
    author: "أندريه شينييه",
    numPages: 260,
    classification: "أدب وذكريات",
    description: "مذكرات الأديب الفرنسي." ,
    language: "Arabic"
  },
  {
    title: "الباب المفتوح",
    author: "لطفي الشناوي",
    numPages: 230,
    classification: "رواية عربية",
    description: "رواية عن الشهامة والشجب." ,
    language: "Arabic"
  },
  {
    title: "مرآة الأيام",
    author: "نجيب محفوظ",
    numPages: 180,
    classification: "رواية مصرية",
    description: "رواية تروي قصة شاب مصري." ,
    language: "Arabic"
  },
  {
    title: "رجال في الشمس",
    author: "غسان كنفاني",
    numPages: 250,
    classification: "رواية عربية",
    description: "رواية تسلط الضوء على قضايا اللاجئين الفلسطينيين." ,
    language: "Arabic"
  },
  {
    title: "سيرة في البلاط العثماني",
    author: "عبد الرحمن الكواكبي",
    numPages: 210,
    classification: "سيرة ذاتية",
    description: "سيرة حياة في العهد العثماني." ,
    language: "Arabic"
  },
 {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    numPages: 417,
    classification: "Magical Realism",
    description: "A multi-generational saga in a fictional Latin American town.",
    language: "English"
  },
  {
    title: "The Outsiders",
    author: "S.E. Hinton",
    numPages: 192,
    classification: "Coming of Age",
    description: "A classic young adult novel about the rivalry between two groups of teenagers.",
    language: "English"
  },
  {
    title: "The Road Less Traveled",
    author: "M. Scott Peck",
    numPages: 316,
    classification: "Self-Help",
    description: "A book on personal growth and spiritual development.",
    language: "English"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    numPages: 325,
    classification: "Dystopian",
    description: "A dystopian society of consumerism and technological control.",
    language: "English"
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    numPages: 215,
    classification: "Science Fiction",
    description: "A comedic journey through space.",
    language: "English"
  },
  {
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    numPages: 251,
    classification: "Literary Fiction",
    description: "A novel of the 'Lost Generation' in the 1920s.",
    language: "English"
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    numPages: 97,
    classification: "Philosophy",
    description: "A classic text on military strategy and tactics.",
    language: "English"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    numPages: 465,
    classification: "Mystery",
    description: "A modern mystery involving a missing woman.",
    language: "English"
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    numPages: 464,
    classification: "Classic",
    description: "A novel about the struggles of a family during the Great Depression.",
    language: "English"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    numPages: 454,
    classification: "Thriller",
    description: "A thriller involving a code hidden in art and history.",
    language: "English"
  },
  {
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    numPages: 238,
    classification: "Classic",
    description: "A story of sin and redemption in Puritan New England.",
    language: "English"
  },
  {
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    numPages: 518,
    classification: "Science Fiction",
    description: "A love story involving time travel.",
    language: "English"
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    numPages: 662,
    classification: "Fantasy",
    description: "An epic fantasy tale of a gifted young musician.",
    language: "English"
  },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    numPages: 338,
    classification: "Thriller",
    description: "A psychological thriller involving a brilliant serial killer.",
    language: "English"
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    numPages: 369,
    classification: "Science Fiction",
    description: "A story of survival on Mars.",
    language: "English"
  },
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    numPages: 307,
    classification: "Mystery",
    description: "Classic detective stories featuring Sherlock Holmes.",
    language: "English"
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    numPages: 374,
    classification: "Dystopian",
    description: "A dystopian tale of survival and rebellion.",
    language: "English"
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    numPages: 127,
    classification: "Classic",
    description: "A novella about an old fisherman's epic battle with a giant marlin.",
    language: "English"
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    numPages: 311,
    classification: "Dystopian",
    description: "A dystopian future where women's rights are severely restricted.",
    language: "English"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    numPages: 214,
    classification: "Coming of Age",
    description: "A novel about the struggles of a teenager in New York City.",
    language: "English"
  }
];

// Insert the array of book documents into the "books" collection
db.books.insertMany(booksToInsert);
