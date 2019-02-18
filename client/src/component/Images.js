import React, { Component } from "react";
import axios from "axios";
import InInfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

export class Images extends Component {
  state = {
    images: [],
    count: 30,
    start: 1
  };

  componentDidMount() {
    const { count, start } = this.state;
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  }

  fetchImage = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res =>
        this.setState({ images: this.state.images.concat(res.data) })
      );
  };
  render() {
    return (
      <div className='images'>
        <InInfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImage}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.images.map(data => (
            <Image key={data.id} image={data} />
          ))}
        </InInfiniteScroll>
      </div>
    );
  }
}

export default Images;
