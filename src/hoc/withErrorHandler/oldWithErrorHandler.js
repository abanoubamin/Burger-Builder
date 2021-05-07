import React, { useState, useEffect, Fragment } from "react";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    // state = {
    //     error: null
    // }
    const [error, setError] = useState(null);

    // componentWillMount () {
    //     this.reqInterceptor = axios.interceptors.request.use(req => {
    //         this.setState({error: null});
    //         return req;
    //     });
    //     this.resInterceptor = axios.interceptors.response.use(res => res, error => {
    //         this.setState({error: error});
    //     });
    // }
    const reqInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });
    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        setError(err);
      }
    );

    // componentWillUnmount () {
    //     axios.interceptors.request.eject(this.reqInterceptor);
    //     axios.interceptors.response.eject(this.resInterceptor);
    // }
    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    // errorConfirmedHandler = () => {
    //   this.setState({ error: null });
    // };
    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <Fragment>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {/* {this.state.error ? this.state.error.message : null} */}
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default withErrorHandler;
