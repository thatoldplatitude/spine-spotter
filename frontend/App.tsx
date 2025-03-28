import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { UploadContainer } from "./components/upload/UploadContainer";
import { useState } from "react";
import { ResultsContainer } from "./components/results/ResultsContainer";
import { BooksDataContext } from "./contexts/BooksDataContext";

export type BookData = {
  id: string;
  etag: string;
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  categories: string[];
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  language: string;
  previewLink: string;
  country: string;
  forSaleOnGoogleBooks: boolean;
  availibleAsGoogleEbook: boolean;
  listPrice?: {
    amount: number;
    currencyCode: string;
  };
  retailPrice?: {
    amount: number;
    currencyCode: string;
  };
  buyLink: string;
  isbn?: {
    type: string;
    identifier: string;
  }[];
};

function App() {
  const [booksData, setBooksData] = useState<BookData[][]>([]);
  return (
    <div className="App">
      <Navigation />
      <BooksDataContext.Provider value={{ booksData, setBooksData }}>
        <main className="main-container">
          <h1 style={{ color: "#4c4b4b", padding: " 11px" }}>
            How much are the books worth infront of you?
          </h1>
          <UploadContainer />
          {booksData && <ResultsContainer />}
        </main>
      </BooksDataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
