let books = [];
const STORAGE_KEY = "books-app";

const incompleteBookList = document.getElementById("incompleteBookList");
const completeBookList = document.getElementById("completeBookList");

const isStorageAvailable = () => {
  if (typeof storage === undefined) {
    alert("local storage is not found");
    return false;
  }
  return true;
};

const updateDataToStorage = () => {
  if (isStorageAvailable()) {
    saveData();
  }
};

const createObjectBooks = (id, title, author, year, isComplete) => {
  return {
    id,
    title,
    author,
    year: parseInt(year),
    isComplete,
  };
};

const generateId = () => {
  return +new Date();
};

const addBooks = () => {
  const newId = generateId();
  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = document.getElementById("bookFormYear").value;
  const isComplete = document.getElementById("bookFormIsComplete").checked;

  const objectBooks = createObjectBooks(newId, title, author, year, isComplete);
  books.push(objectBooks);
  saveData();
  renderBooks();
};

const renderBooks = () => {
  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  for (const book of books) {
    const bookElement = addElementBook(book);
    if (!book.isComplete) incompleteBookList.append(bookElement);
    else completeBookList.append(bookElement);
  }
};

const saveData = () => {
  if (isStorageAvailable) {
    const book = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, book);
  }
};

const loadBooks = () => {
  const getData = localStorage.getItem(STORAGE_KEY);
  if (getData !== null) {
    books = JSON.parse(getData);
  }
};

const addElementBook = (objectBook) => {
  const { id, title, author, year, isComplete } = objectBook;

  const titleBook = document.createElement("h5");
  titleBook.classList.add("badge", "text-bg-primary", "fs-5");
  titleBook.setAttribute("data-testid", `bookItemTitle`);
  titleBook.innerText = `${title}`;

  const authorBook = document.createElement("p");
  authorBook.setAttribute("data-testid", `bookItemAuthor`);
  authorBook.innerText = `Penulis : ${author}`;

  const yearBook = document.createElement("p");
  yearBook.setAttribute("data-testid", `bookItemYear`);
  yearBook.innerText = `Tahun : ${year}`;

  const textContainer = document.createElement("div");
  textContainer.append(titleBook, authorBook, yearBook);

  const container = document.createElement("div");
  container.append(textContainer);
  container.setAttribute("data-bookid", `book-${id}`);
  container.setAttribute("data-testid", `bookItem`);
  container.classList.add(
    "card",
    "shadow",
    "p-3",
    "rounded",
    "border",
    "border-success",
    "mt-3"
  );

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("text-center");

  if (isComplete) {
    const btnIsNotReading = document.createElement("button");
    btnIsNotReading.classList.add("btn", "btn-success", "m-1");
    btnIsNotReading.setAttribute("id", `bookComplete`);
    btnIsNotReading.setAttribute("data-testid", `bookItemIsCompleteButton`);
    btnIsNotReading.innerText = "Belum selesai dibaca";
    btnIsNotReading.addEventListener("click", () => {
      setBookToIsNotReading(id);
    });

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn", "btn-danger", "m-1");
    btnDelete.setAttribute("id", `bookDelete`);
    btnDelete.setAttribute("data-testid", `bookItemDeleteButton`);
    btnDelete.innerText = "Hapus buku";
    btnDelete.addEventListener("click", () => {
      deleteBook(id);
    });

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("btn", "btn-warning", "m-1");
    btnEdit.setAttribute("id", "bookEdit");
    btnEdit.setAttribute("data-bs-toggle", "modal");
    btnEdit.setAttribute("data-bs-target", "#exampleModal");
    btnEdit.setAttribute("data-testid", `bookItemEditButton`);
    btnEdit.innerText = "Edit buku";
    btnEdit.addEventListener("click", () => {
      editBook(id);
    });

    actionContainer.append(btnIsNotReading, btnDelete, btnEdit);
  } else {
    const btnIsReading = document.createElement("button");
    btnIsReading.setAttribute("id", `bookComplete`);
    btnIsReading.setAttribute("data-testid", `bookItemIsCompleteButton`);
    btnIsReading.classList.add("btn", "btn-success", "m-1");
    btnIsReading.innerText = "Selesai dibaca";
    btnIsReading.addEventListener("click", () => {
      setBookToIsReading(id);
    });

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("data-testid", `bookItemDeleteButton`);
    btnDelete.setAttribute("id", `bookDelete`);
    btnDelete.classList.add("btn", "btn-danger", "m-1");
    btnDelete.innerText = "Hapus buku";
    btnDelete.addEventListener("click", () => {
      deleteBook(id);
    });

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("btn", "btn-warning", "m-1");
    btnEdit.setAttribute("id", "bookEdit");
    btnEdit.setAttribute("data-bs-toggle", "modal");
    btnEdit.setAttribute("data-bs-target", "#exampleModal");
    btnEdit.setAttribute("data-testid", `bookItemEditButton`);
    btnEdit.innerText = "Edit buku";
    btnEdit.addEventListener("click", () => {
      editBook(id);
    });

    actionContainer.append(btnIsReading, btnDelete, btnEdit);
  }

  container.append(actionContainer);
  return container;
};

const setBookToIsReading = (bookId) => {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = true;
  updateDataToStorage();
  renderBooks();
};

const setBookToIsNotReading = (bookId) => {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = false;
  updateDataToStorage();
  renderBooks();
};

const editBook = (bookId) => {
  const bookTarget = findBook(bookId);
  document.getElementById("getBookId").value = bookTarget.id;
  document.getElementById("bookFormTitleEdit").value = bookTarget.title;
  document.getElementById("bookFormAuthorEdit").value = bookTarget.author;
  document.getElementById("bookFormYearEdit").value = bookTarget.year;
  document.getElementById("bookFormIsCompleteEdit").checked =
    bookTarget.isComplete;

  const formEdit = document.getElementById("bookFormEdit");
  formEdit.addEventListener("submit", function (event) {
    event.preventDefault();

    const updatedBook = {
      id: bookTarget.id,
      title: document.getElementById("bookFormTitleEdit").value,
      author: document.getElementById("bookFormAuthorEdit").value,
      year: document.getElementById("bookFormYearEdit").value,
      isComplete: document.getElementById("bookFormIsCompleteEdit").checked,
    };

    bookTarget.title = updatedBook.title;
    bookTarget.author = updatedBook.author;
    bookTarget.year = updatedBook.year;
    bookTarget.isComplete = updatedBook.isComplete;
    updateDataToStorage();
    renderBooks();
  });
};

const deleteBook = (bookId) => {
  const bookTarget = findBookIndex(bookId);
  if (bookTarget === -1) return;

  books.splice(bookTarget, 1);
  updateDataToStorage();
  renderBooks();
};

const findBook = (bookId) => {
  for (const book of books) {
    if (book.id === bookId) {
      return book;
    }
  }
  return null;
};

const findBookIndex = (bookId) => {
  let index = 0;
  for (const book of books) {
    if (book.id === bookId) {
      return index;
    }
    index++;
  }
  return -1;
};

// feature search
const setElementResultSearch = (objectBook) => {
  const { id, title, author, year } = objectBook;

  const idBook = document.createElement("td");
  idBook.setAttribute("data-testid", `bookItemTitle`);
  idBook.innerText = `${id}`;

  const titleBook = document.createElement("td");
  titleBook.setAttribute("data-testid", `bookItemTitle`);
  titleBook.innerText = `${title}`;

  const authorBook = document.createElement("td");
  authorBook.setAttribute("data-testid", `bookItemAuthor`);
  authorBook.innerText = `${author}`;

  const yearBook = document.createElement("td");
  yearBook.setAttribute("data-testid", `bookItemYear`);
  yearBook.innerText = `${year}`;

  const container = document.createElement("tr");
  container.append(idBook, titleBook, authorBook, yearBook);
  container.setAttribute("data-bookid", `book-${id}`);
  container.setAttribute("data-testid", `bookItem`);

  return container;
};

const renderResult = (results) => {
  document.getElementById("tableResult").style.display = "table";
  const resultSearchBook = document.getElementById("resultSearchBook");
  const infoResult = document.getElementById("infoResult");
  resultSearchBook.innerHTML = "";
  infoResult.innerHTML = "";

  if (results.length === 0) {
    document.getElementById("tableResult").style.display = "none";
    const notFound = document.createElement("h5");
    notFound.classList.add("text-center", "text-danger", "m-2");
    notFound.textContent = "Books Is Not Found";
    infoResult.appendChild(notFound);
  } else {
    const foundBook = document.createElement("h5");
    foundBook.classList.add(
      "text-center",
      "text-white",
      "m-2",
      "badge",
      "text-bg-success"
    );
    foundBook.textContent = `OK! ${results.length} Books Is Found`;
    infoResult.appendChild(foundBook);

    for (const book of results) {
      const booksElement = setElementResultSearch(book);
      resultSearchBook.appendChild(booksElement);
    }
  }
};

const searchBook = (title) => {
  const results = [];
  for (const book of books) {
    const bookTitle = book.title.toLowerCase();
    if (bookTitle.includes(title)) {
      results.push(book);
    }
  }
  return results;
};

// show element
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("tableResult").style.display = "none";
  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  const formSubmit = document.getElementById("bookForm");
  formSubmit.addEventListener("submit", function (event) {
    event.preventDefault();
    addBooks();
    formSubmit.reset(); // Reset form after submission
  });

  const searchForm = document.getElementById("searchBook");
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTitleBook = document
      .getElementById("searchBookTitle")
      .value.trim()
      .toLowerCase();
    console.log(searchTitleBook);
    const searchResult = searchBook(searchTitleBook);
    console.log(searchResult);

    renderResult(searchResult);
  });

  if (isStorageAvailable()) {
    loadBooks();
    renderBooks();
  }
});
