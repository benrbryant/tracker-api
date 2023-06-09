import asyncHandler from "../utils/asyncHandler";
import Book from "../db/models/book";
import BookInstance from "../db/models/bookinstance";
import Author from "../db/models/author";
import Genre from "../db/models/genre";

export const index = asyncHandler(async (req, res, next) => {
  const [
    numBooks,
    numBookInstances,
    numAvailableBookInstance,
    numAuthors,
    numGenres,
  ] = await Promise.all([
    Book.countDocuments({}).exec(),
    BookInstance.countDocuments({}).exec(),
    BookInstance.countDocuments({ status: "Available" }).exec(),
    Author.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Local Library Home",
    bookCount: numBooks,
    bookinstanceCount: numBookInstances,
    bookinstanceAvailableCount: numAvailableBookInstance,
    authorCount: numAuthors,
    genreCount: numGenres,
  });
});

export const bookList = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec();

  res.render("bookList", { title: "Book List", bookList: allBooks });
});

export const bookDetail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book detail: " + req.params.id);
});

export const bookCreateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book create GET");
});

export const bookCreatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book create POST");
});

export const bookDeleteGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book delete GET");
});

export const bookDeletePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book delete POST");
});

export const bookUpdateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book update GET");
});

export const bookUpdatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book update POST");
});
