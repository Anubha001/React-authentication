import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../actions/items";
import Data from "../Data/index";
import "antd/dist/antd.css";
import { Table } from "antd";

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      columns: [
        {
          title: "Id",
          dataIndex: "id",
          key: "addidess"
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age"
        },

        {
          title: "Gender",
          dataIndex: "gender",
          key: "gender"
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email"
        },
        {
          title: "Phone No",
          dataIndex: "phoneNo",
          key: "phoneNo"
        }
      ],
      user: [
        {
          id: 1,
          name: "test1",
          age: "11",
          gender: "male",
          email: "test1@gmail.com",
          phoneNo: "9415346313"
        },
        {
          id: 2,
          name: "test2",
          age: "12",
          gender: "male",
          email: "test2@gmail.com",
          phoneNo: "9415346314"
        },
        {
          id: 3,
          name: "test3",
          age: "13",
          gender: "male",
          email: "test3@gmail.com",
          phoneNo: "9415346315"
        },
        {
          id: 4,
          name: "test4",
          age: "14",
          gender: "male",
          email: "test4@gmail.com",
          phoneNo: "9415346316"
        },
        {
          id: 5,
          name: "test5",
          age: "15",
          gender: "male",
          email: "test5@gmail.com",
          phoneNo: "9415346317"
        },
        {
          id: 6,
          name: "test6",
          age: "16",
          gender: "male",
          email: "test6@gmail.com",
          phoneNo: "9415346318"
        }
      ]
    };
  }

  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    console.log(this.props.items);
    const { columns } = this.state;
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    return <Table columns={columns} dataSource={this.state.user} />;
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
