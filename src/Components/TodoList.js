import React, { Component, Fragment } from "react";
class TodoList extends Component {
  state = {};
  render() {
    let { items, handleDelete, handleEdit } = this.props;

    return (
      <Fragment>
        <section className="col-md-5 my-4 card mx-auto">
          <article className="card-body">
            <ul className="list-group">
              {items.map((item) => (
                <li className="list-group-item my-2" key={item.id}>
                  {item.title}
                  <span className="float-right">
                    <span className="float-right ml-2 mr-2 p-2">
                      <i
                        className=" fa fa-pencil text-primary p-1"
                        aria-hidden="true"
                        onClick={(_) => handleEdit(item.id)}
                      ></i>
                    </span>
                    <i
                      className=" fa fa-trash text-danger p-1"
                      aria-hidden="true"
                      onClick={(_) => handleDelete(item.id)}
                    ></i>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default TodoList;
