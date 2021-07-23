import React, { Component } from "react";
import LoaderItem from "react-loader-spinner";

import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import Button from "./components/Button";

import pixabayApi from "./services/pixabay-api";

export default class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    currentPage: 1,
    isLoading: false,
    totalImages: 0,
    error: null,
  };

  componentDidMount() {
    console.log("App componentDidMount");

    const { searchQuery, currentPage } = this.state;

    this.fetchImages();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };
    // console.log("App ~ options: ", options);

    this.setState({ isLoading: true });

    pixabayApi
      .fetchImages(options)
      .then((data) => {
        console.log("APP pixabayApi ~ data: ", data);

        const imagesQuery = data.hits;
        const totalImages = data.total;
        this.setState((prevState) => ({
          images: [...prevState.images, ...imagesQuery],
          totalImages: totalImages,
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onChangeQuery = (query) => {
    console.log("App ~ query: ", query);
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  onLoadMore = () => {
    this.fetchImages();
  };

  render() {
    const { images, isLoading, totalImages } = this.state;
    const diffCurrentLoadImages = totalImages - images.length;
    const isShowLoadMore =
      images.length > 0 && diffCurrentLoadImages > 0 && !isLoading;

    return (
      <Container>
        <Searchbar onSubmit={this.onChangeQuery} />
        {images.length > 0 && <ImageGallery images={images} />}

        {isLoading && <Loader />}

        {isShowLoadMore && <Button onLoadMore={this.onLoadMore} />}

        {images.length < 0 && (
          <div>
            <br />
            <br />
            <br />
            <hr />
            <hr />
            <hr />

            <p>TailSpin</p>
            <LoaderItem
              type="TailSpin"
              color="#00BFFF"
              height={80}
              width={80}
            />
            <p>ThreeDots</p>
            <LoaderItem
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
            />
            <p>BallTriangle</p>
            <LoaderItem
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
            <p>Bars</p>
            <LoaderItem type="Bars" color="#00BFFF" height={80} width={80} />
            <p>Circles</p>
            <LoaderItem type="Circles" color="#00BFFF" height={80} width={80} />
            <p>Grid</p>
            <LoaderItem type="Grid" color="#00BFFF" height={80} width={80} />

            <p>Oval</p>
            <LoaderItem type="Oval" color="#00BFFF" height={80} width={80} />
          </div>
        )}
      </Container>
    );
  }
}

// export default App;
