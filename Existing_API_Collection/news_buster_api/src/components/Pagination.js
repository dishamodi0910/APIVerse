import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <div className="continer my-4 d-flex justify-content-between">
        <button
          disabled={this.state.page <= 1}
          type="button"
          className="btn btn-primary"
          onClick={this.handlePrevClick}
        >
          &larr; Previous
        </button>
        <button type="button" className="btn btn-secondary">
          {this.state.page}/
          {Math.ceil(this.state.totalResults / this.state.pageSize)} Page
        </button>
        <button
          disabled={
            this.state.page + 1 >
            Math.ceil(this.state.totalResults / this.state.pageSize)
          }
          type="button"
          className="btn btn-primary"
          onClick={this.handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    );
  }
}
