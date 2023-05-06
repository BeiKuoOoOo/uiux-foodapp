import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import AuthService from "../../services/auth.service";
import {response} from "express";
import Cart from "../Cart/Cart"

type Props = {};

type State = {
  pickupname: string,
  card: string,
  successful: boolean,
  message: string
};

export default class Order extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleOrder = this.handleOrder.bind(this);

    this.state = {
      pickupname: "",
      card: "",
      successful: false,
      message: ""
    };
  }
  validationSchema() {
    return Yup.object().shape({
      card: Yup.number()
        .test(
          "len",
          "The card number must be 16-19 digits.",
          (val: any) =>
            val &&
            val.toString().length >= 16 &&
            val.toString().length <= 19
        )
        .required("This field is required!"),
    });
  }

  handleOrder(formValue: { pickupname: string; card: string }) {
    const { pickupname, card } = formValue;

    this.setState({
      message: "",
      successful: false
    });
    AuthService.order(
      pickupname,
      card
    );
  }

  render() {
    const { successful, message } = this.state;

    const initialValues = {
      pickupname: "",
      card: ""
    };

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleOrder}
          >
            <Form>
              {!successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="pickupname"> Pickup Name </label>
                    <Field name="Pickup Name" type="text" className="form-control" />
                    <ErrorMessage
                      name="pickupname"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Card"> Card Number </label>
                    <Field name="card" type="number" className="form-control" />
                    <ErrorMessage
                      name="card"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Submit Order</button>
                  </div>
                </div>
              )}

              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}
